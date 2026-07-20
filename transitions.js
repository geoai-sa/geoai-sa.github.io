// ========== PAGE TRANSITIONS (مشترك بين كل الصفحات) ==========
// ستارة داكنة: تنكشف عند دخول الصفحة، وتُسدل قبل الانتقال لصفحة أخرى.

const veil = document.createElement('div');
veil.className = 'page-veil';
document.body.appendChild(veil);

// انكشاف الدخول (بعد إطارين ليُلتقط الانتقال)
requestAnimationFrame(() => requestAnimationFrame(() => veil.classList.add('veil-out')));

// إسدال قبل مغادرة الصفحة لأي رابط داخلي (غير المراسي #)
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || link.target === '_blank') return;

  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin) return;
  if (url.pathname === location.pathname && url.hash) return; // مرساة بنفس الصفحة

  e.preventDefault();
  veil.classList.remove('veil-out');
  setTimeout(() => { location.href = link.href; }, 420);
});

// عند العودة من ذاكرة المتصفح (bfcache) نضمن انكشاف الستارة
window.addEventListener('pageshow', (e) => {
  if (e.persisted) veil.classList.add('veil-out');
});
