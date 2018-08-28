const header = (() => {
  
  // change nav btn img on click
  const navBtn = document.querySelector('#nav-btn');
  const navBtnIcon = document.querySelector('#nav-btn-icon');

  navBtn.addEventListener('click', () => {
    if (navBtnIcon.src.indexOf('menu.svg') !== -1) {
      navBtnIcon.src = 'assets/cross.svg';
    } else {
      navBtnIcon.src = 'assets/menu.svg';
    }
  });

})();