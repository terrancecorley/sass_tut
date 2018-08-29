const header = (() => {
  
  // change nav btn img on click
  const navBtn = document.querySelector('#nav-btn');
  const navBtnIcon = document.querySelector('#nav-btn-icon');
  const mobileNav = document.querySelector('#site-nav--sm');

  navBtn.addEventListener('click', () => {
    if (navBtnIcon.src.indexOf('menu.svg') !== -1) {
      navBtnIcon.src = 'assets/cross.svg';
    } else {
      navBtnIcon.src = 'assets/menu.svg';
    }

    // may need to add z-index to current nav btn
    mobileNav.classList.toggle('hidden');
    
  });

})();