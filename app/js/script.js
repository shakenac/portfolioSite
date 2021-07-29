/* Mobile Menu */
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const mobileNav = document.querySelector('.header__mobileNav');

// Mobile Menu: click even for hamburger
btnHamburger.addEventListener('click', function(){

   // if header contains open
   if (header.classList.contains('open')) {
      //remove open
      header.classList.remove('open');
      mobileNav.classList.remove('open');
   }
   else {
      //else add open
      header.classList.add('open');
      mobileNav.classList.add('open');
   }

})

//adjust js so we are adding the header class in the header element
