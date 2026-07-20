// ========== ENGINE SCROLLYTELLING ==========
import './transitions.js';

// بصمة الإصدار — للتحقق من أنك تشاهد أحدث نسخة (افتح الكونسول)
console.info('%cGeoAI engine build 2026.06.29-3', 'color:#c5a059;font-weight:bold');
// حلقة rAF مستمرة: نقرأ هدف التقدّم من التمرير ونلاحقه بنعومة (lerp)،
// مع بوّابة seek تمنع تكدّس القفزات — فلا تقطيع ولا فجوات في الحركة.

const acts = Array.from(document.querySelectorAll('[data-act]')).map((el, index) => ({
  el,
  index,
  sticky: el.querySelector('.act-sticky'),
  video: el.querySelector('video'),
  target: 0,      // التقدّم المطلوب من موضع التمرير (0..1)
  shown: 0,       // التقدّم المعروض فعلياً (يلاحق الهدف بنعومة)
  seeking: false, // هل توجد قفزة قيد التنفيذ؟
  pending: -1,    // آخر زمن مطلوب أثناء انشغال القفزة السابقة
}));
const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ========== سكة الفصول الجانبية ==========
const rail = document.getElementById('chapter-rail');
const railFill = document.getElementById('rail-fill');
const railDots = rail ? Array.from(rail.querySelectorAll('.rail-dot')) : [];
const actsWrap = document.querySelector('.acts');

railDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const act = acts[parseInt(dot.dataset.chapter, 10)];
    if (!act) return;
    const top = window.scrollY + act.el.getBoundingClientRect().top + 4;
    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  });
});

const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

// بوّابة seek: لا نطلب قفزة جديدة قبل اكتمال السابقة (يمنع الـ seek storm)
function seek(a, t) {
  if (a.seeking) { a.pending = t; return; }
  a.seeking = true;
  try { a.video.currentTime = t; } catch (e) { a.seeking = false; }
}

acts.forEach((a) => {
  if (!a.video) return;
  a.video.addEventListener('seeked', () => {
    a.seeking = false;
    if (a.pending >= 0) {
      const t = a.pending;
      a.pending = -1;
      seek(a, t);
    }
  });
});

function frame() {
  const vh = window.innerHeight;
  const sy = window.scrollY;

  // خلفية بارالاكس (عمق ثلاثي الأبعاد يتحرك مع التمرير)
  if (!reduce) {
    for (const el of parallaxEls) {
      const f = parseFloat(el.dataset.parallax) || 0;
      el.style.translate = `0 ${(sy * f).toFixed(1)}px`;
    }
  }

  for (const a of acts) {
    if (!a.video) continue;
    const rect = a.el.getBoundingClientRect();

    // تجاهل الأقسام البعيدة عن الشاشة (توفير معالجة)
    if (rect.bottom < -vh || rect.top > vh * 2) continue;

    const range = a.el.offsetHeight - vh;
    a.target = range > 0 ? clamp(-rect.top / range, 0, 1) : 0;

    // ملاحقة ناعمة تملأ الفجوات بين أحداث التمرير
    if (reduce) {
      a.shown = a.target;
    } else {
      a.shown += (a.target - a.shown) * 0.14;
      if (Math.abs(a.target - a.shown) < 0.0006) a.shown = a.target;
    }

    const d = a.video.duration;
    if (d && isFinite(d)) {
      const t = a.shown * d;
      // لا نطلب قفزة أدق من إطار واحد (~1/30 ثانية)
      if (Math.abs(a.video.currentTime - t) > 1 / 30) seek(a, t);
    }

    // تلاشٍ متقاطع في المكان: المقطع يبقى مخفياً حتى يتثبّت (يمنع
    // انزلاقه المرئي فوق السابق)، ثم يتجلّى مع بدء تقدّمه بينما
    // يخفت السابق فوقه أثناء خروجه — انتقال متصل بلا فجوات
    if (a.sticky) {
      const enterVis = a.index === 0
        ? clamp(1 - (rect.top - vh * 0.1) / (vh * 0.6), 0, 1) // الأول يدخل بالانزلاق المرئي
        : clamp(a.shown / 0.04, 0, 1);                        // المتراكبة تتجلّى في مكانها
      const exitVis = clamp(1 - ((-rect.top - range) / (vh * 0.55)), 0, 1);
      a.sticky.style.opacity = Math.min(enterVis, exitVis).toFixed(3);
    }

    // المقطع الذي يتوسّط الشاشة يُعتبر النشِط (لتوهّج أوضح)
    const center = rect.top + a.el.offsetHeight / 2;
    a.el.classList.toggle('is-active', Math.abs(center - vh / 2) < vh * 0.75);
  }

  // تحديث سكة الفصول: التعبئة الكلية + الفصل الحالي
  if (rail && actsWrap) {
    const wrapRect = actsWrap.getBoundingClientRect();
    const total = actsWrap.offsetHeight - vh;
    const wp = total > 0 ? clamp(-wrapRect.top / total, 0, 1) : 0;
    rail.classList.toggle('is-visible', wrapRect.top < vh * 0.8 && wrapRect.bottom > vh * 0.3);
    if (railFill) railFill.style.height = `calc((100% - 20px) * ${wp.toFixed(3)})`;
    let cur = 0;
    for (let i = 0; i < acts.length; i++) {
      if (acts[i].el.getBoundingClientRect().top <= vh * 0.5) cur = i;
    }
    railDots.forEach((d, i) => d.classList.toggle('is-current', i === cur));
  }

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
