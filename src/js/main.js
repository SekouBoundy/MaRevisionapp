// /main.js

// Try to load Alpine. If there's no bundler, fall back to the CDN ESM build.
(async () => {
  let AlpineLib;
  try {
    // This will fail in a plain static setup (no bundler) — that's OK.
    AlpineLib = (await import('alpinejs')).default;
  } catch {
    // Reliable fallback for static hosting (GitHub Pages, Netlify, etc.)
    AlpineLib = (await import('https://unpkg.com/alpinejs@3.14.9/dist/module.esm.js')).default;
  }

  window.Alpine = AlpineLib;
  AlpineLib.start();
})();

// Smooth scroll for in-page anchors with a fixed navbar offset
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const OFFSET = 80; // height of your sticky navbar

  const scrollToTarget = (el) => {
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - OFFSET;
    window.scrollTo({
      top: y,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  };

  // Click on navbar links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      const id = (hash || '').slice(1);
      if (!id) return; // ignore empty "#"
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      // Close a mobile menu if you toggle it via a checkbox/button (optional hook)
      // document.getElementById('mobileMenuCheckbox')?.click();

      scrollToTarget(target);

      // Update URL without jumping
      history.pushState(null, '', hash);
    });
  });

  // If the page loads with a hash, scroll to it with offset
  if (location.hash) {
    const id = location.hash.slice(1);
    const target = document.getElementById(id);
    // Use a tiny delay so layout is stable before scrolling
    setTimeout(() => scrollToTarget(target), 0);
  }
  if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
});
