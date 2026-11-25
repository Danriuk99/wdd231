const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    const expanded = navMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', expanded);
  });
}

const currentYear = document.querySelector('#currentyear');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector('#lastModified');
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

const params = new URLSearchParams(window.location.search);

const requiredFields = [
  'firstName',
  'lastName',
  'email',
  'phone',
  'organization',
  'timestamp'
];

requiredFields.forEach((key) => {
  const element = document.querySelector(`#display-${key}`);
  if (element) {
    const rawValue = params.get(key);
    if (key === 'timestamp' && rawValue) {
      const dateObj = new Date(rawValue);
      element.textContent = Number.isNaN(dateObj.getTime())
        ? rawValue
        : dateObj.toLocaleString();
    } else {
      element.textContent = rawValue || 'Not provided';
    }
  }
});