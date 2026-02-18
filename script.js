const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const yearElement = document.querySelector('#year');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}
