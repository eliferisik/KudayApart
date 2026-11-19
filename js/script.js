const year = document.querySelector('[data-current-year]');
if (year) year.textContent = new Date().getFullYear();

const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach((link) => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  } else {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  }
});
