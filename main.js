import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';

import './transitions.js';

gsap.registerPlugin(ScrollTrigger);

// بصمة الإصدار — للتحقق من أنك تشاهد أحدث نسخة (افتح الكونسول)
console.info('%cGeoAI main build 2026.06.29-3', 'color:#c5a059;font-weight:bold');

// ========== PRELOADER ==========
// يخفي تحميل الأصول الثقيلة ويطلق حدث geoai:ready لبدء كوريوغرافيا الهيرو
{
  const preloaderEl = document.getElementById('preloader');
  const ready = () => {
    if (preloaderEl) {
      preloaderEl.classList.add('done');
      setTimeout(() => preloaderEl.remove(), 900);
    }
    document.dispatchEvent(new Event('geoai:ready'));
  };
  const minWait = new Promise((r) => setTimeout(r, 950));
  const loaded = document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise((r) => window.addEventListener('load', r, { once: true }));
  Promise.all([minWait, loaded]).then(ready);
}

// ========== REDUCED MOTION CHECK ==========
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const supportsHover = window.matchMedia('(hover: hover)').matches;

// ========== SMOOTH SCROLLING (LENIS) ==========
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// ========== SCROLL PROGRESS BAR (HORIZONTAL TOP) ==========
const scrollProgressEl = document.getElementById('scroll-progress');
lenis.on('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / scrollHeight) * 100;
  if (scrollProgressEl) {
    scrollProgressEl.style.width = `${progress}%`;
  }
});

// ========== MOBILE HAMBURGER NAV (GSAP STAGGER) ==========
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

if (hamburgerBtn && navLinks) {
  let menuOpen = false;

  hamburgerBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    hamburgerBtn.classList.toggle('active');
    navLinks.classList.toggle('open');

    if (menuOpen) {
      // Stagger link entrance
      gsap.fromTo('#nav-links li', 
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power3.out", delay: 0.1 }
      );
    }
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      hamburgerBtn.classList.remove('active');
      navLinks.classList.remove('open');
      menuOpen = false;
      goTo(target);
    });
  });
}

// ========== SCENE SETUP ==========
const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x070b13); // Deepest Space Slate Navy

const cameraGroup = new THREE.Group();
scene.add(cameraGroup);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 12);
cameraGroup.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 0.95;

// ========== POST-PROCESSING (SUBTLE CLINICAL BLOOM) ==========
const renderScene = new RenderPass(scene, camera);
// Half-resolution bloom input — visually identical at strength 0.16, ~4x cheaper
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2), 1.5, 0.4, 0.85);
bloomPass.threshold = 0.35;
bloomPass.strength = 0.16;   // Toned down to 0.16 for premium depth
bloomPass.radius = 0.4;      // Reduced from 0.8 for crisp lighting

const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);

// RGB Shift Pass — subtle velocity shift (enabled only while scrolling)
const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms['amount'].value = 0.00;
rgbShiftPass.enabled = false;
composer.addPass(rgbShiftPass);

// OutputPass ثابت في نهاية السلسلة: يطبّق tone mapping وتحويل sRGB مرة واحدة
// دائماً، فلا يتغيّر سطوع المشهد عند تفعيل/تعطيل الممرّات (يمنع الوميض)
composer.addPass(new OutputPass());

// Velocity target consumed by the render loop — no per-event tween churn
let rgbShiftTarget = 0;
if (!prefersReducedMotion) {
  lenis.on('scroll', (e) => {
    rgbShiftTarget = Math.min(Math.abs(e.velocity) * 0.0001, 0.006);
  });
}

// ========== UNIVERSE GROUPS ==========
const starsGroup = new THREE.Group();
starsGroup.scale.set(1, 1, 1);
starsGroup.visible = true;
scene.add(starsGroup);

const earthUniverseGroup = new THREE.Group();
earthUniverseGroup.scale.set(1, 1, 1);
earthUniverseGroup.position.set(0, 0, 0); // Centered on startup
earthUniverseGroup.visible = true;
scene.add(earthUniverseGroup);

// ========== GLOBAL LAZY ASSET DECLARATIONS ==========
let isEarthInitialized = false;
let starMaterial, starParticles;
let earth, earthMaterial, clouds, innerAtmosphere, outerAtmosphere, wireframe, instancedMarkers;
let ambientLight, directionalLight, pointLight1, pointLight2;
let earthPivot, riyadhMarker, satellite, satelliteOrbit;
// شهاب عابر (كائن واحد يُعاد استخدامه)
const shooting = {
  line: null, active: false, t0: 0, next: 5,
  start: new THREE.Vector3(), dir: new THREE.Vector3(),
  head: new THREE.Vector3(), tail: new THREE.Vector3(),
};
const dataPackets = [];
const markerPositions = [];
const markerCount = 80;
const dummy = new THREE.Object3D();
const sunDirection = new THREE.Vector3(5, 3, 7).normalize();

// ========== LAZY SCENE INITIALIZATION FLOW ==========
function initEarthScene() {
  if (isEarthInitialized) return;
  isEarthInitialized = true;

  const textureLoader = new THREE.TextureLoader();

  // Load textures asynchronously (BASE_URL keeps paths correct under a sub-path deployment, e.g. GitHub Pages)
  const assetBase = `${import.meta.env.BASE_URL}earth-3D/textures/`;
  const earthDayTexture = textureLoader.load(`${assetBase}2_no_clouds_16k.jpeg`);
  const earthNightTexture = textureLoader.load(`${assetBase}NIGHT.jpg`);
  const earthBumpTexture = textureLoader.load(`${assetBase}elev_bump_16k.jpeg`);
  const earthWaterTexture = textureLoader.load(`${assetBase}water_16k.png`);
  const earthSpecTexture = textureLoader.load(`${assetBase}reflex2.png`);
  const earthCloudsTexture = textureLoader.load(`${assetBase}fair_clouds_8k.jpeg`);

  [earthDayTexture, earthNightTexture, earthBumpTexture, earthWaterTexture, earthSpecTexture, earthCloudsTexture].forEach(tex => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  });
  earthBumpTexture.colorSpace = THREE.LinearSRGBColorSpace;
  earthWaterTexture.colorSpace = THREE.LinearSRGBColorSpace;

  // 1. STARFIELD PARTICLES (Toned down to 2500)
  const starCount = 2500;
  const starGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  const starSizes = new Float32Array(starCount);

  const starColorsPalette = [
    new THREE.Color(0xffffff),
    new THREE.Color(0xfff8ee),
    new THREE.Color(0xe2e8f0),
    new THREE.Color(0xc5a059),
  ];

  for (let i = 0; i < starCount; i++) {
    const r = 40 + Math.random() * 140;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    starPositions[i * 3 + 2] = r * Math.cos(phi);

    const col = starColorsPalette[Math.floor(Math.random() * starColorsPalette.length)];
    starColors[i * 3] = col.r;
    starColors[i * 3 + 1] = col.g;
    starColors[i * 3 + 2] = col.b;

    starSizes[i] = 0.35 + Math.random() * 0.9;
  }

  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
  starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

  starMaterial = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 }, uOpacity: { value: 1.0 } },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (320.0 / -mvPosition.z) * (0.85 + 0.15 * sin(position.x * 6.0 + position.y * 3.0));
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      uniform float time;
      uniform float uOpacity;
      void main() {
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
        float r = dot(cxy, cxy);
        if (r > 1.0) discard;
        float alpha = (1.0 - r) * (0.75 + 0.25 * sin(gl_PointCoord.x * 12.0 + time * 1.2));
        gl_FragColor = vec4(vColor, alpha * uOpacity);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  starParticles = new THREE.Points(starGeometry, starMaterial);
  starsGroup.add(starParticles);

  // 2. SHADER EARTH DAY/NIGHT
  const earthVertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const earthFragmentShader = `
    uniform sampler2D dayMap;
    uniform sampler2D nightMap;
    uniform sampler2D bumpMap;
    uniform sampler2D waterMap;
    uniform sampler2D specMap;
    uniform vec3 sunDir;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);

      // Light factor
      float NdotL = dot(normal, sunDir);
      float dayFactor = smoothstep(-0.15, 0.22, NdotL);

      // Texture sampling
      vec4 dayColor = texture2D(dayMap, vUv);
      vec4 nightColor = texture2D(nightMap, vUv);
      float waterMask = texture2D(waterMap, vUv).r;
      float specMask = texture2D(specMap, vUv).r;

      // Color blending
      vec3 surfaceColor = mix(nightColor.rgb, dayColor.rgb, dayFactor);

      // Amber/Gold warm city lights on the dark side
      float nightGlow = (1.0 - dayFactor) * nightColor.r * 2.2;
      surfaceColor += vec3(1.0, 0.84, 0.58) * nightGlow * 0.45;

      // Diffuse shadow lighting (low ambient for cinematic space realism)
      float diffuse = max(NdotL, 0.0) * 0.85 + 0.15;
      surfaceColor *= diffuse;

      // Clean specular reflections on oceans
      vec3 halfDir = normalize(sunDir + viewDir);
      float spec = pow(max(dot(normal, halfDir), 0.0), 56.0);
      float specularStrength = waterMask * spec * specMask * dayFactor * 1.3;
      surfaceColor += vec3(1.0, 0.94, 0.82) * specularStrength;

      // Elegant side rim highlight
      float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
      vec3 rimColor = mix(vec3(0.05, 0.43, 0.33), vec3(0.77, 0.63, 0.35), 0.25); // Emerald-Gold blend
      surfaceColor += rimColor * fresnel * 0.12;

      gl_FragColor = vec4(surfaceColor, 1.0);
    }
  `;

  const earthGeometry = new THREE.SphereGeometry(2, 96, 96);
  const earthMaterialObj = new THREE.ShaderMaterial({
    uniforms: {
      dayMap: { value: earthDayTexture },
      nightMap: { value: earthNightTexture },
      bumpMap: { value: earthBumpTexture },
      waterMap: { value: earthWaterTexture },
      specMap: { value: earthSpecTexture },
      sunDir: { value: sunDirection },
      time: { value: 0.0 },
    },
    vertexShader: earthVertexShader,
    fragmentShader: earthFragmentShader,
  });

  earthMaterial = earthMaterialObj;
  earth = new THREE.Mesh(earthGeometry, earthMaterialObj);

  const earthGroup = new THREE.Group();
  earthUniverseGroup.add(earthGroup);
  earthGroup.add(earth);
  earthPivot = earthGroup; // مرجع للميل التفاعلي مع مؤشر الفأرة

  // 3. EARTH CLOUDS SHADER
  const cloudsGeometry = new THREE.SphereGeometry(2.022, 96, 96);
  const cloudsMaterial = new THREE.ShaderMaterial({
    uniforms: {
      cloudMap: { value: earthCloudsTexture },
      sunDir: { value: sunDirection },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D cloudMap;
      uniform vec3 sunDir;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        float cloudAlpha = texture2D(cloudMap, vUv).r;
        float NdotL = dot(normalize(vNormal), sunDir);
        float lighting = smoothstep(-0.1, 0.25, NdotL) * 0.8 + 0.2;
        vec3 cloudColor = vec3(1.0, 0.98, 0.96) * lighting;
        gl_FragColor = vec4(cloudColor, cloudAlpha * 0.32);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
  earth.add(clouds);

  // 4. ATMOSPHERE SCATTERING SHADERS
  const innerAtmoGeometry = new THREE.SphereGeometry(2.05, 64, 64);
  innerAtmosphere = new THREE.Mesh(
    innerAtmoGeometry,
    new THREE.ShaderMaterial({
      uniforms: { sunDir: { value: sunDirection } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 sunDir;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldNormal;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = 1.0 - max(dot(viewDir, vNormal), 0.0);
          float rim = pow(fresnel, 3.2);

          float sunFacing = max(dot(vWorldNormal, sunDir), 0.0);
          vec3 dayAtmo = vec3(0.1, 0.55, 0.42);    // Sovereign Emerald tint
          vec3 twilightAtmo = vec3(0.77, 0.63, 0.35); // Gold twilight rim
          vec3 atmoColor = mix(twilightAtmo, dayAtmo, smoothstep(0.0, 0.4, sunFacing));

          float alpha = rim * (0.25 + sunFacing * 0.35);
          gl_FragColor = vec4(atmoColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  earth.add(innerAtmosphere);

  const outerAtmoGeometry = new THREE.SphereGeometry(2.15, 64, 64);
  outerAtmosphere = new THREE.Mesh(
    outerAtmoGeometry,
    new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x0e6e53) }, // Sovereign Emerald Glow
        sunDir: { value: sunDirection },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = dot(viewDir, vNormal);
          float strength = pow(1.0 - fresnel, 3.5);
          gl_FragColor = vec4(glowColor, strength * 0.28);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  earth.add(outerAtmosphere);

  // Muted tech wireframe
  wireframe = new THREE.Mesh(
    new THREE.SphereGeometry(2.03, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x0e6e53, wireframe: true, transparent: true, opacity: 0.03 })
  );
  earthGroup.add(wireframe);

  // 5. CACHED POSITION INSTANCED MARKERS (Optimized CPU marker update!)
  const markerGeometry = new THREE.SphereGeometry(0.015, 16, 16);
  const markerMaterial = new THREE.MeshBasicMaterial({
    color: 0xc5a059, // Noble Saudi Gold
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });
  instancedMarkers = new THREE.InstancedMesh(markerGeometry, markerMaterial, markerCount);
  instancedMarkers.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  earthGroup.add(instancedMarkers);

  // Populate & cache marker vector positions (avoid matrix decomposition entirely in loops)
  for (let i = 0; i < markerCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / markerCount);
    const theta = Math.sqrt(markerCount * Math.PI) * phi;
    
    const x = 2.01 * Math.sin(phi) * Math.cos(theta);
    const y = 2.01 * Math.sin(phi) * Math.sin(theta);
    const z = 2.01 * Math.cos(phi);
    
    const pos = new THREE.Vector3(x, y, z);
    markerPositions.push(pos);

    dummy.position.copy(pos);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    instancedMarkers.setMatrixAt(i, dummy.matrix);
  }
  instancedMarkers.instanceMatrix.needsUpdate = true;

  // 6. DATA CHANNELS AND TRAVEL PACKETS
  const lineCount = 20; // Reduced to 20 for performance
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0e6e53, transparent: true, opacity: 0.08 });
  const packetGeometry = new THREE.SphereGeometry(0.012, 8, 8);
  const packetMaterial = new THREE.MeshBasicMaterial({ color: 0xc5a059, blending: THREE.AdditiveBlending });

  for (let i = 0; i < lineCount; i++) {
    const startIdx = Math.floor(Math.random() * markerCount);
    const endIdx = Math.floor(Math.random() * markerCount);
    if (startIdx === endIdx) continue;

    const startPos = markerPositions[startIdx];
    const endPos = markerPositions[endIdx];

    const mid = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5).normalize().multiplyScalar(2.3);
    const curve = new THREE.QuadraticBezierCurve3(startPos, mid, endPos);
    const points = curve.getPoints(20);

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    earthGroup.add(line);

    const packet = new THREE.Mesh(packetGeometry, packetMaterial);
    earthGroup.add(packet);

    dataPackets.push({
      mesh: packet,
      curve: curve,
      progress: Math.random(),
      speed: 0.001 + Math.random() * 0.002
    });
  }

  // 8. علامة الرياض النابضة (مقر GeoAI) — ابنة لسطح الأرض فتدور معه
  {
    const lat = 24.71 * Math.PI / 180;
    const lon = 46.68 * Math.PI / 180;
    const phi = Math.PI / 2 - lat;
    const theta = lon + Math.PI;
    const rr = 2.03;
    riyadhMarker = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xc5a059, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending })
    );
    riyadhMarker.position.set(
      -rr * Math.sin(phi) * Math.cos(theta),
      rr * Math.cos(phi),
      rr * Math.sin(phi) * Math.sin(theta)
    );
    earth.add(riyadhMarker);
  }

  // 9. حلقة مدارية وقمر صناعي (رمز الاستشعار عن بعد)
  satelliteOrbit = new THREE.Group();
  satelliteOrbit.rotation.x = 1.15;
  satelliteOrbit.rotation.y = 0.4;
  earthGroup.add(satelliteOrbit);

  const orbitRing = new THREE.Mesh(
    new THREE.RingGeometry(2.62, 2.633, 160),
    new THREE.MeshBasicMaterial({ color: 0x0e6e53, side: THREE.DoubleSide, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending })
  );
  satelliteOrbit.add(orbitRing);

  satellite = new THREE.Mesh(
    new THREE.SphereGeometry(0.03, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xc5a059, blending: THREE.AdditiveBlending })
  );
  satelliteOrbit.add(satellite);

  // 10. شهاب عابر — خط واحد يُعاد استخدامه
  shooting.line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]),
    new THREE.LineBasicMaterial({ color: 0xfff6e0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
  );
  starsGroup.add(shooting.line);

  // 7. CINEMATIC REALISTIC LIGHTING (Extremely high contrast, low space ambient)
  ambientLight = new THREE.AmbientLight(0x090e18, 0.12);
  earthUniverseGroup.add(ambientLight);

  directionalLight = new THREE.DirectionalLight(0xfffaf2, 2.2); // Powerful cinematic sun
  directionalLight.position.set(5, 5, 7);
  earthUniverseGroup.add(directionalLight);

  // Accent lights — soft starlight hints instead of aggressive spotlights
  pointLight1 = new THREE.PointLight(0xc5a059, 0.4, 20);
  pointLight1.position.set(-3, 2, 4);
  earthUniverseGroup.add(pointLight1);

  pointLight2 = new THREE.PointLight(0x0e6e53, 0.3, 20);
  pointLight2.position.set(4, -2, 3);
  earthUniverseGroup.add(pointLight2);

  // Trigger ScrollTrigger refresh now that 3D sizing is correct
  ScrollTrigger.refresh();
  composer.render();
}

// ========== DUAL-TRIGGER LAZY INITIALIZATION ==========
let lazyInitTriggered = false;
function triggerLazyLoad() {
  if (lazyInitTriggered) return;
  lazyInitTriggered = true;
  initEarthScene();
}

// Trigger 1: Scroll threshold
ScrollTrigger.create({
  trigger: "#about",
  start: "top bottom",
  once: true,
  onEnter: triggerLazyLoad
});

// Trigger 2: Idle fallback (after 100ms for instant paint loading)
window.addEventListener('load', () => {
  setTimeout(() => {
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(() => triggerLazyLoad());
    } else {
      triggerLazyLoad();
    }
  }, 100);
});

// ========== MOUSE TRACKING ==========
let mouseX = 0, mouseY = 0;
window.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// ========== SCROLL TRIGGER TIMELINES (EARTH & STARS) ==========

// Stars scale timeline
let starsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top bottom",
    end: "bottom top",
    scrub: 1.5,
    onEnter: () => {
      document.body.classList.add('section-about');
    },
    onLeaveBack: () => {
      document.body.classList.remove('section-about');
    }
  }
});
starsTimeline
  // ── 1. STARS EXPLODE: burst outward from a single point, overshoot then settle ──
  .fromTo(starsGroup.scale,
    { x: 0.02, y: 0.02, z: 0.02 },
    { x: 1.28, y: 1.28, z: 1.28, duration: 1.1, ease: "expo.out" }, 0)
  .to(starsGroup.scale, { x: 1, y: 1, z: 1, duration: 1.0, ease: "power2.inOut" }, 1.1)
  // ── 2. FLY THROUGH THE STARFIELD: dive forward and spin past the debris ──
  .fromTo(starsGroup.position,
    { z: -48, y: 5 },
    { z: 7, y: 0, duration: 2.1, ease: "power1.in" }, 0)
  .fromTo(starsGroup.rotation,
    { x: 0.4, y: -Math.PI * 1.15 },
    { x: 0, y: 0, duration: 2.1, ease: "power1.inOut" }, 0)
  // ── 3. EARTH ARRIVES FROM DEEP-LEFT SPACE and zooms into frame ──
  .fromTo(earthUniverseGroup.scale,
    { x: 0.001, y: 0.001, z: 0.001 },
    { x: 1, y: 1, z: 1, duration: 1.5, ease: "power3.out" }, 0.7)
  .fromTo(earthUniverseGroup.position,
    { x: -24, y: 2, z: -16 },
    { x: -4.5, y: 0, z: -1, duration: 1.9, ease: "power2.out" }, 0.55)
  .fromTo(earthUniverseGroup.rotation,
    { x: 0.25, y: -2.4 },
    { x: 0.1, y: 0.4, duration: 1.9, ease: "power2.inOut" }, 0.55);

// Earth scale and positioning timeline
let earthTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#competencies",
    start: "top bottom",
    end: "center center",
    scrub: 1.5,
    onEnter: () => {
      document.body.classList.add('section-competencies');
    },
    onLeaveBack: () => {
      document.body.classList.remove('section-competencies');
    }
  }
});
earthTimeline
  // Earth glides to the right side (x = 4.5) to balance competencies layout
  .to(earthUniverseGroup.position, { x: 4.5, y: 0, z: -1, ease: "power2.out" }, 0)
  .to(earthUniverseGroup.rotation, { x: 0.2, y: -0.5, ease: "power2.out" }, 0);

// Discovery/Status timeline (Scale earth away)
let discoveryTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#status",
    start: "top bottom",
    end: "center center",
    scrub: 1.5,
    onEnter: () => {
      document.body.classList.add('colorful-theme');
      document.body.classList.add('section-status');
    },
    onLeaveBack: () => {
      document.body.classList.remove('colorful-theme');
      document.body.classList.remove('section-status');
    }
  }
});
discoveryTimeline
  .to(earthUniverseGroup.scale, { x: 0.001, y: 0.001, z: 0.001, ease: "power2.inOut" }, 0)
  .to(earthUniverseGroup.position, { y: 15, ease: "power2.inOut" }, 0)
  .to(starsGroup.scale, { x: 0.001, y: 0.001, z: 0.001, ease: "power2.inOut" }, 0)
  .to(starsGroup.position, { y: 15, ease: "power2.inOut" }, 0);

// Fade-in cards
gsap.utils.toArray('.fade-in').forEach(el => {
  gsap.fromTo(el, { opacity: 0, y: 40 }, {
    opacity: 1, y: 0, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" }
  });
});

// ========== HERO CINEMATIC REVEAL (يبدأ بعد اكتمال الـ Preloader) ==========
document.addEventListener('geoai:ready', () => {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroLogo = document.querySelector('.hero-big-logo');
  const heroCard = document.querySelector('.hero-content');
  const heroBadge = document.querySelector('.hero-badge');
  const scrollCue = document.querySelector('.scroll-cue');

  if (heroTitle && heroSubtitle && heroLogo && heroCard) {
    const tl = gsap.timeline({ delay: 0.15 });
    tl.fromTo(heroCard,
      { opacity: 0, y: 40, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(heroLogo,
      { opacity: 0, scale: 0.6, y: -20 },
      { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: "elastic.out(1, 0.6)" },
      "-=0.7"
    );

    if (heroBadge) {
      tl.fromTo(heroBadge,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.65"
      );
    }

    tl.fromTo(heroTitle, // Animate as single unit to preserve parent background-clip text gradient opacity
      { opacity: 0, y: 25, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(heroSubtitle,
      { opacity: 0, y: 15 },
      { opacity: 0.85, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

    if (scrollCue) {
      tl.fromTo(scrollCue, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.15");
    }
  }
}, { once: true });

// ========== HERO MOUSE PARALLAX INTERACTION ==========
if (supportsHover && !prefersReducedMotion) {
  const heroCard = document.querySelector('.hero-content');
  const heroLogo = document.querySelector('.hero-big-logo');
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroSec = document.querySelector('.hero-section');
  
  if (heroSec && heroCard) {
    heroSec.addEventListener('mousemove', (e) => {
      const rect = heroSec.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      
      gsap.to(heroCard, {
        x: x * 15,
        y: y * 12,
        rotateX: -y * 3.5,
        rotateY: x * 3.5,
        transformPerspective: 1000,
        duration: 0.7,
        ease: "power2.out",
        overwrite: 'auto'
      });

      if (heroLogo) {
        gsap.to(heroLogo, {
          x: x * 25,
          y: y * 18,
          duration: 0.5,
          ease: "power2.out",
          overwrite: 'auto'
        });
      }
    });
    
    heroSec.addEventListener('mouseleave', () => {
      gsap.to(heroCard, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 1.0,
        ease: "elastic.out(1, 0.4)"
      });
      
      if (heroLogo) {
        gsap.to(heroLogo, {
          x: 0,
          y: 0,
          duration: 1.0,
          ease: "elastic.out(1, 0.4)"
        });
      }
    });
  }
}

// ========== ANIMATION LOOP ==========
let frameCount = 0;

function animate() {
  if (prefersReducedMotion) return; // Completely halts continuous CPU rendering loop for accessibility

  requestAnimationFrame(animate);
  frameCount++;

  const elapsedTime = performance.now() / 1000;

  if (isEarthInitialized) {
    // 1. Update star shader time
    if (starMaterial && starMaterial.uniforms) {
      starMaterial.uniforms.time.value = elapsedTime;
    }

    // 2. Slow orbit sun calculation
    const sunAngle = elapsedTime * 0.02;
    sunDirection.set(
      Math.cos(sunAngle) * 5,
      3,
      Math.sin(sunAngle) * 7
    ).normalize();

    if (directionalLight) {
      directionalLight.position.copy(sunDirection).multiplyScalar(10);
    }

    // 3. Earth shaders time + rotation updates
    if (earthMaterial && earthMaterial.uniforms) {
      earthMaterial.uniforms.time.value = elapsedTime;
    }
    if (earth) earth.rotation.y += 0.00015;
    if (clouds) clouds.rotation.y += 0.00022;

    // 4. Ultra-performance instanced marker pulsing (using cached positions)
    if (frameCount % 3 === 0 && instancedMarkers) {
      const pulse = 1 + Math.sin(elapsedTime * 4) * 0.32;
      for (let i = 0; i < markerCount; i++) {
        const pos = markerPositions[i];
        if (pos) {
          dummy.position.copy(pos);
          dummy.scale.set(pulse, pulse, pulse);
          dummy.updateMatrix();
          instancedMarkers.setMatrixAt(i, dummy.matrix);
        }
      }
      instancedMarkers.instanceMatrix.needsUpdate = true;
    }

    // 5. Data packets animation
    dataPackets.forEach(packetObj => {
      packetObj.progress += packetObj.speed;
      if (packetObj.progress >= 1) packetObj.progress = 0;
      const position = packetObj.curve.getPointAt(packetObj.progress);
      packetObj.mesh.position.copy(position);
    });

    // 6. Accent light updates
    if (pointLight1) {
      pointLight1.position.x = Math.sin(elapsedTime * 0.15) * 5;
      pointLight1.position.z = Math.cos(elapsedTime * 0.25) * 5;
    }
    if (pointLight2) {
      pointLight2.position.y = Math.sin(elapsedTime * 0.2) * 4;
      pointLight2.position.x = Math.cos(elapsedTime * 0.3) * 4;
    }

    // 7. Slow cosmic stars group rotation
    if (starsGroup.visible) {
      starsGroup.rotation.y += 0.00004;
      starsGroup.rotation.x += 0.00002;
    }

    // 8. نبض علامة الرياض
    if (riyadhMarker) {
      const s = 1 + Math.sin(elapsedTime * 3) * 0.35;
      riyadhMarker.scale.set(s, s, s);
    }

    // 9. دوران القمر الصناعي على حلقته
    if (satellite) {
      const a = elapsedTime * 0.35;
      satellite.position.set(Math.cos(a) * 2.627, Math.sin(a) * 2.627, 0);
    }

    // 10. شهاب عابر بين حين وآخر
    if (shooting.line) {
      if (!shooting.active && elapsedTime > shooting.next) {
        shooting.active = true;
        shooting.t0 = elapsedTime;
        shooting.start.set((Math.random() - 0.5) * 70, 15 + Math.random() * 25, -50 - Math.random() * 30);
        shooting.dir.set(-6 - Math.random() * 6, -3 - Math.random() * 3, 0);
      }
      if (shooting.active) {
        const p = (elapsedTime - shooting.t0) / 0.9;
        if (p >= 1) {
          shooting.active = false;
          shooting.next = elapsedTime + 6 + Math.random() * 9;
          shooting.line.material.opacity = 0;
        } else {
          shooting.head.copy(shooting.start).addScaledVector(shooting.dir, p);
          shooting.tail.copy(shooting.start).addScaledVector(shooting.dir, Math.max(0, p - 0.18));
          shooting.line.geometry.setFromPoints([shooting.tail, shooting.head]);
          shooting.line.material.opacity = Math.sin(Math.PI * p) * 0.8;
        }
      }
    }

    // 11. ميل لطيف نحو مؤشر الفأرة (عمق تفاعلي دون مساس بمسارات التمرير)
    if (earthPivot) {
      earthPivot.rotation.y += (mouseX * 0.05 - earthPivot.rotation.y) * 0.02;
      earthPivot.rotation.x += (-mouseY * 0.03 - earthPivot.rotation.x) * 0.02;
    }
  }

  // Camera Mouse Parallax
  const targetX = mouseX * 0.22;
  const targetY = mouseY * 0.12;
  cameraGroup.position.x += (targetX - cameraGroup.position.x) * 0.015;
  cameraGroup.position.y += (targetY - cameraGroup.position.y) * 0.015;

  // RGB shift: chase the scroll-velocity target, decay it, and skip the
  // full-screen pass entirely when idle (saves a whole render pass per frame)
  rgbShiftTarget *= 0.9;
  const rgbUniform = rgbShiftPass.uniforms['amount'];
  rgbUniform.value += (rgbShiftTarget - rgbUniform.value) * 0.2;
  rgbShiftPass.enabled = rgbUniform.value > 0.0004;

  composer.render();
}

// ========== MOTION ACCESSIBILITY RENDER GATING ==========
if (prefersReducedMotion) {
  // Bind simple render call on scrolls/resizes instead of continuous animation loop
  ScrollTrigger.addEventListener("refresh", () => composer.render());
  lenis.on('scroll', () => composer.render());
  
  // Render once initially
  setTimeout(() => {
    triggerLazyLoad();
    composer.render();
  }, 100);
} else {
  // Run continuous high-framerate rendering loop
  animate();
}

// ========== WINDOW RESIZE ==========
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  bloomPass.setSize(window.innerWidth / 2, window.innerHeight / 2); // keep bloom half-res
  composer.render();
}

// ========== CUSTOM CURSOR (magnetic bindings) ==========
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const magneticBtns = document.querySelectorAll('.magnetic-btn');

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (cursorDot && cursorRing && !isTouchDevice && !prefersReducedMotion) {
  // Activate the custom cursor — only now do we hide the native one (see CSS .custom-cursor)
  document.body.classList.add('custom-cursor');
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    gsap.set(cursorDot, { x: mouse.x, y: mouse.y });
  });

  gsap.ticker.add(() => {
    ringPos.x += (mouse.x - ringPos.x) * 0.12;
    ringPos.y += (mouse.y - ringPos.y) * 0.12;
    gsap.set(cursorRing, { x: ringPos.x, y: ringPos.y });
  });
} else {
  // Graceful fallback: hide cursors on touch screens or if reduced motion is active
  if (cursorDot) cursorDot.style.display = 'none';
  if (cursorRing) cursorRing.style.display = 'none';
  document.body.style.cursor = 'auto';
}

// Magnetic Buttons
if (!isTouchDevice && !prefersReducedMotion) {
  magneticBtns.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      if (cursorRing) cursorRing.classList.add('hover-active');

      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });

    btn.addEventListener('mouseleave', () => {
      if (cursorRing) cursorRing.classList.remove('hover-active');

      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
}

// ========== EXPANDABLE CARDS (SECTORS & COMPETITIVE ADVANTAGES) ==========
function setupExpandableGrid(gridId, panelId) {
  const grid = document.getElementById(gridId);
  const panel = document.getElementById(panelId);
  if (!grid || !panel) return;

  const els = {
    icon: panel.querySelector('.sector-detail-icon'),
    title: panel.querySelector('.sector-detail-title'),
    tag: panel.querySelector('.sector-detail-tag'),
    body: panel.querySelector('.sector-detail-body'),
    close: panel.querySelector('.sector-detail-close'),
    cta: panel.querySelector('.detail-cta'),
  };
  const cards = Array.from(grid.querySelectorAll('.sector-card'));
  let activeCard = null;

  function open(card) {
    // Clicking the already-open card collapses it
    if (activeCard === card) { close(); return; }

    cards.forEach(c => c.classList.remove('is-active'));
    card.classList.add('is-active');
    activeCard = card;

    els.icon.innerHTML = card.querySelector('.service-icon').innerHTML;
    els.title.textContent = card.querySelector('h3').textContent;
    els.tag.textContent = card.dataset.tag || '';
    els.body.innerHTML = card.querySelector('.sector-detail-content').innerHTML;

    // "للتفاصيل" link — competitive advantages use data-key, sectors use data-sector
    if (els.cta) {
      const detailKey = card.dataset.key || card.dataset.sector;
      if (detailKey) {
        els.cta.href = `${import.meta.env.BASE_URL}details.html?adv=${detailKey}`;
        els.cta.style.display = '';
      } else {
        els.cta.style.display = 'none';
      }
    }

    panel.hidden = false;
    if (!prefersReducedMotion) {
      gsap.fromTo(panel,
        { opacity: 0, y: -24, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
    // Bring the expanded panel comfortably into view
    requestAnimationFrame(() => {
      lenis.scrollTo(panel, { offset: -110, duration: 1.0 });
    });
  }

  function close() {
    if (activeCard) activeCard.classList.remove('is-active');
    activeCard = null;
    const hide = () => { panel.hidden = true; };
    if (!prefersReducedMotion) {
      gsap.to(panel, { opacity: 0, y: -24, scale: 0.96, duration: 0.35, ease: 'power2.in', onComplete: hide });
    } else {
      hide();
    }
  }

  cards.forEach(card => {
    card.addEventListener('click', () => open(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(card);
      }
    });
  });
  els.close.addEventListener('click', close);
}

setupExpandableGrid('sector-grid', 'sector-detail');
setupExpandableGrid('competency-grid', 'competency-detail');

// ========== CTA PREMIUM CLICK RIPPLE & HAPTICS (all primary buttons) ==========
document.querySelectorAll('.advanced-btn').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    // 1. Ripple generation
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.classList.add('btn-ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = '250px';
    ripple.style.height = '250px';

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 850);

    // 2. GSAP organic pop scale feedback
    gsap.fromTo(this,
      { scale: 1 },
      { scale: 0.95, duration: 0.08, yoyo: true, repeat: 1, ease: "power2.out" }
    );

    // 3. Sovereign device haptics
    if ('vibrate' in navigator) {
      navigator.vibrate(12);
    }
  });
});

// ========== CONTACT REVEAL + SMOOTH-SCROLL NAVIGATION ==========
// قسم "لنبدأ الشراكة" مخفي افتراضياً، ويظهر فقط عند الضغط على زر/رابط تواصل.
const contactSection = document.getElementById('contact');
function showContact() {
  if (!contactSection || contactSection.classList.contains('revealed')) return;
  contactSection.classList.add('revealed');
  ScrollTrigger.refresh();
  const content = contactSection.querySelector('.contact-content');
  if (content && !prefersReducedMotion) {
    gsap.fromTo(content, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.15 });
  }
}

function goTo(target) {
  if (!target) return;
  if (target === '#contact') {
    showContact();
    // ننتظر إطاراً حتى يُحسب موضع القسم بعد إظهاره ثم نمرّر إليه
    requestAnimationFrame(() => lenis.scrollTo(target, { duration: 1.2, offset: -40 }));
  } else {
    lenis.scrollTo(target, { duration: 1.2, offset: -40 });
  }
}

// أزرار CTA (data-scroll-to) وروابط الفوتر
document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
  btn.addEventListener('click', () => goTo(btn.getAttribute('data-scroll-to')));
});
document.querySelectorAll('.footer-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    goTo(link.getAttribute('href'));
  });
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const statusEl = document.getElementById('form-status');
  // NOTE: عند الجاهزية، ضع نقطة استقبال خدمتك هنا (مثل Formspree) لإرسال الطلبات فعلياً.
  // مثال: const ENDPOINT = 'https://formspree.io/f/XXXXXXX';
  const ENDPOINT = '';

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // التحقق من الحقول المطلوبة
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const submitBtn = document.getElementById('contact-submit');
    submitBtn.disabled = true;
    statusEl.classList.remove('error', 'success');

    if (ENDPOINT) {
      // إرسال فعلي عند ضبط نقطة الاستقبال
      try {
        statusEl.textContent = 'جارٍ الإرسال…';
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(contactForm),
        });
        if (!res.ok) throw new Error('network');
        statusEl.textContent = '✅ تم استلام طلبك بنجاح، وسيعاود فريق GeoAI التواصل معك قريباً.';
        statusEl.classList.add('success');
        contactForm.reset();
      } catch (err) {
        statusEl.textContent = '⚠️ تعذّر الإرسال حالياً. الرجاء المحاولة لاحقاً.';
        statusEl.classList.add('error');
      } finally {
        submitBtn.disabled = false;
      }
    } else {
      // وضع العرض التوضيحي قبل ربط خدمة الاستقبال
      statusEl.textContent = '✅ تم استلام طلبك (وضع تجريبي) — سيُفعَّل الإرسال الفعلي فور ربط خدمة الاستقبال.';
      statusEl.classList.add('success');
      contactForm.reset();
      submitBtn.disabled = false;
    }
  });
}

// ========== ANIMATED COUNTERS (ECONOMIC IMPACT) ==========
const toArabicDigits = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
document.querySelectorAll('.counter').forEach((el) => {
  const target = parseFloat(el.dataset.target) || 0;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const render = (val) => { el.textContent = prefix + toArabicDigits(Math.round(val)) + suffix; };

  if (prefersReducedMotion) {
    render(target);
    return;
  }

  const obj = { v: 0 };
  ScrollTrigger.create({
    trigger: el,
    start: 'top 88%',
    once: true,
    onEnter: () => {
      gsap.to(obj, {
        v: target,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => render(obj.v),
      });
    },
  });
});

// ========== 3D TILT SERVICE CARDS (Gated for touch and accessibility) ==========
const tiltCards = document.querySelectorAll('.service-card, .leader-card');

if (!isTouchDevice && !prefersReducedMotion) {
  tiltCards.forEach(card => {
    const glare = document.createElement('div');
    glare.classList.add('tilt-glare');
    card.appendChild(glare);

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xNorm = (x / rect.width - 0.5) * 2;
      const yNorm = (y / rect.height - 0.5) * 2;

      const maxTilt = 8; // Refined corporate tilt limit

      if (cursorRing) cursorRing.classList.add('hover-active');

      gsap.to(card, {
        rotationY: xNorm * maxTilt,
        rotationX: -yNorm * maxTilt,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.5,
        overwrite: 'auto'
      });

      gsap.to(glare, {
        opacity: 0.8,
        x: -xNorm * 12,
        y: -yNorm * 12,
        duration: 0.5,
        overwrite: 'auto'
      });
    });

    card.addEventListener('mouseleave', () => {
      if (cursorRing) cursorRing.classList.remove('hover-active');

      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        ease: 'elastic.out(1, 0.35)',
        duration: 0.8
      });

      gsap.to(glare, {
        opacity: 0,
        x: 0,
        y: 0,
        duration: 0.5
      });
    });
  });
}
