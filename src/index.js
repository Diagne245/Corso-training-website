import './js/bootstrap.bundle.min.js';
import './scss/fontawesome.scss';
import './scss/bootstrap.scss';
import './scss/style.scss';

// Import HTML Components
import { loadNavbar, navbarNav, navbarToggler } from './js/navbar.js';
import heroContent from './static-html-components/hero_content.html';
import register from './static-html-components/register.html';
import discover1 from './static-html-components/discover_1.html';
import points from './static-html-components/points.html';
import summary from './static-html-components/summary.html';
import discover2 from './static-html-components/discover_2.html';
import invitation from './static-html-components/invitation.html';
import takeaways from './static-html-components/takeaways.html';
import subscribe from './static-html-components/subscribe.html';
import footer from './static-html-components/footer.html';

// Variables-----------
const mediaObj = window.matchMedia(
  '(orientation: landscape) and (max-height: 600px)'
);
const navbarEl = document.getElementById('navbar');

// Loading Home Page -----------------------
const loadHomePage = () => {
  loadNavbar();
  document.getElementById('hero-content').innerHTML = heroContent;
  document.getElementById('register').innerHTML = register;
  document.getElementById('discover-1').innerHTML = discover1;
  document.getElementById('points').innerHTML = points;
  document.getElementById('summary').innerHTML = summary;
  document.getElementById('discover-2').innerHTML = discover2;
  document.getElementById('invitation').innerHTML = invitation;
  document.getElementById('takeaways').innerHTML = takeaways;
  document.getElementById('subscribe').innerHTML = subscribe;
  document.getElementById('footer').innerHTML = footer;
};

// Handle Scroll -----------------
const handleScroll = () => {
  if (
    !window.matchMedia('(orientation: landscape) and (max-height: 600px)')
      .matches
  ) {
    scrollY > 200
      ? navbarEl.classList.add('fixed-top', 'bg-dark', 'opacity-95')
      : !navbarNav.classList.contains('show') &&
        navbarEl.classList.contains('bg-dark') &&
        navbarEl.classList.remove('fixed-top', 'bg-dark', 'opacity-95');
  }
};

//  Initialize event listeners
const init = () => {
  document.addEventListener('DOMContentLoaded', loadHomePage);
  document.addEventListener('scroll', handleScroll);

  // Remove navbar when switching from portrait to landscape mode
  mediaObj.addEventListener('change', (e) => {
    e.matches &&
      navbarEl.classList.contains('bg-dark') &&
      navbarEl.classList.remove('bg-dark', 'opacity-95', 'fixed-top');

    navbarNav.classList.contains('show') && navbarNav.classList.remove('show');
    navbarEl.classList.remove('bg-dark', 'opacity-95');
  });
};

init();

export { navbarEl };
