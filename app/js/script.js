/* Mobile Menu */
const btnHamburger = document.querySelector('#btnHamburger');

// Mobile Menu: click even for hamburger
btnHamburger.addEventListener('click', function(){

   // if btnHamburger contains open
   if (btnHamburger.classList.contains('open')) {
      //remove open
      btnHamburger.classList.remove('open');
   }
   else {
      //else add open
      btnHamburger.classList.add('open');
   }

})
