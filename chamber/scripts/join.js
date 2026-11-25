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

const timestampField = document.querySelector('#timestamp');
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

const tierButtons = document.querySelectorAll('.tier-btn');
tierButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const dialogId = btn.dataset.dialog;
    const dialog = document.getElementById(dialogId);
    if (dialog) {
      dialog.showModal();
    }
  });
});

const closeButtons = document.querySelectorAll('.dialog-close');
closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const dialog = btn.closest('dialog');
    if (dialog) {
      dialog.close();
    }
  });
});

const dialogs = document.querySelectorAll('.tier-dialog');
dialogs.forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});