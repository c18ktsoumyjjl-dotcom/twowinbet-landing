(() => {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.mobile-overlay');
  if (!btn || !menu) return;
  const close = () => {
    btn.classList.remove('open');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    if (overlay) { overlay.classList.remove('show'); overlay.hidden = true; }
  };
  const open = () => {
    btn.classList.add('open');
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    if (overlay) { overlay.hidden = false; overlay.classList.add('show'); }
  };
  btn.addEventListener('click', () => {
    if (menu.classList.contains('open')) close(); else open();
  });
  if (overlay) overlay.addEventListener('click', close);
})();
