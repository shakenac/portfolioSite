/* Mobile Menu */
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const mobileNav = document.querySelector('.header__mobileNav');

/// Mobile Menu: click even for hamburger
btnHamburger.addEventListener('click', function(){

   // if header contains open
   if (header.classList.contains('open')) {

      //remove open -- close hamburger menu
      header.classList.remove('open');
      mobileNav.classList.remove('fade-in');
      mobileNav.classList.add('fade-out');
   }
   else {
      //else add open -- open the hamburger menu
      header.classList.add('open');
      mobileNav.classList.remove('fade-out');
      mobileNav.classList.add('fade-in');
   }
})
