window.addEventListener('load', () => {
  fadeIn();
  spMenu();
});

window.addEventListener('scroll', () => {
  fadeIn();
});

let fadeIn = () => {
  let fadeInTargets = document.querySelectorAll('.fade-in');
  fadeInTargets.forEach(fadeInTarget => {
    const rect = fadeInTarget.getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 200) {
      fadeInTarget.classList.add('scroll-in');
    }
  });
};

let spMenu = () => {
  const menuBtn = document.querySelector('.header__menu-btn');
  const headerMenu = document.querySelector('.header__menu');
  const headerMenuItems = document.querySelectorAll('.header__menu-item');
  const logo = document.querySelector('.header__logo')

  menuBtn.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 899px)').matches) {
      if (headerMenu.classList.contains('is-open')) {
        menuBtn.classList.remove('is-open');
        headerMenu.classList.remove('is-open');
        logo.classList.remove('is-open');
        document.body.classList.remove('is-fixed');
      } else {
        menuBtn.classList.add('is-open');
        headerMenu.classList.add('is-open');
        logo.classList.add('is-open');
        document.body.classList.add('is-fixed');
      }
    }
  });

  headerMenuItems.forEach(headerMenuItem => {
    headerMenuItem.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 899px)').matches) {
        if (headerMenu.classList.contains('is-open')) {
          menuBtn.classList.remove('is-open');
          headerMenu.classList.remove('is-open');
          logo.classList.remove('is-open');
          document.body.classList.remove('is-fixed');
        }
      }
    });
  });
};