'use strict';
// Navigation remains available when JavaScript is disabled.
const header = document.querySelector('header');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
if (header && toggle && navigation) {
  header.classList.add('js-menu');
  toggle.hidden = false;
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  };
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.textContent = expanded ? 'Close' : 'Menu';
  });
  navigation.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    closeMenu();
    const destination = document.querySelector(link.hash);
    if (destination) {
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
    }
  });
  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);
}
