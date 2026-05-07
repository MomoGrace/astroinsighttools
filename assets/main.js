
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (navToggle && nav) navToggle.addEventListener('click', () => nav.classList.toggle('open'));

  const searchInput = document.querySelector('[data-search]');
  if (searchInput) {
    const cards = Array.from(document.querySelectorAll('[data-card]'));
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const value = btn.dataset.filter;
      document.querySelectorAll('[data-card]').forEach(card => {
        card.style.display = (value === 'all' || card.dataset.category === value) ? '' : 'none';
      });
    });
  });
});
