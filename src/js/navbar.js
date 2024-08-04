import { navbarEl } from '..';

import navbar from '../static-html-components/navbar.html';

let navbarNav;
let navbarToggler;

const loadNavbar = () => {
  navbarEl.innerHTML = navbar;

  // Variables
  navbarNav = navbarEl.querySelector('.navbar-collapse');
  navbarToggler = navbarEl.querySelector('.navbar-toggler');

  // fold navbar after nav link click -------
  const navItems = Array.from(navbarNav.querySelectorAll('.nav-item'));
  for (const navItem of navItems) {
    navItem.addEventListener('click', () => {
      navbarNav.classList.contains('show') &&
        navbarNav.classList.remove('show');

      window.matchMedia('(orientation: landscape) and (max-height: 600px)')
        .matches && navbarEl.classList.remove('bg-dark', 'opacity-95');
    });
  }

  // Add background in landscape mode
  navbarToggler.addEventListener('click', () => {
    if (
      window.matchMedia('(orientation: landscape) and (max-height: 600px)')
        .matches
    ) {
      !navbarNav.classList.contains('show') &&
        navbarEl.classList.add('bg-dark', 'opacity-95');

      navbarToggler.classList.contains('collapsed') &&
        navbarEl.classList.remove('bg-dark', 'opacity-95');
    } else if (scrollY < 200) {
      !navbarNav.classList.contains('show') &&
        navbarEl.classList.add('bg-dark', 'opacity-95');

      navbarToggler.classList.contains('collapsed') &&
        navbarEl.classList.remove('bg-dark', 'opacity-95');
    }
  });
};

export { loadNavbar, navbarNav, navbarToggler };
