(() => {
  const cats = document.querySelectorAll('.category-btn');
  const items = document.querySelectorAll('.faq-item');
  cats.forEach(btn => btn.addEventListener('click', () => {
    cats.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    items.forEach(it => { it.style.display = it.dataset.cat === cat ? '' : 'none'; });
  }));
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const ans = q.nextElementSibling;
      const icon = q.querySelector('.question-icon');
      const open = ans.classList.toggle('open');
      q.classList.toggle('active', open);
      if (icon) icon.classList.toggle('open', open);
    });
  });
})();
