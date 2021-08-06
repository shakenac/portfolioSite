/* Mobile Menu */
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const mobileNav = document.querySelector('.header__mobileNav');
const bodyTag = document.querySelector("body");


/// Mobile Menu: click even for hamburger
btnHamburger.addEventListener('click', function(){

   // if header contains open
   if (header.classList.contains('open')) {

      //remove open -- close hamburger menu
      header.classList.remove('open');
      mobileNav.classList.remove('fade-in');
      mobileNav.classList.add('fade-out');
      bodyTag.style.overflow = "visible";
   }
   else {
      //else add open -- open the hamburger menu
      header.classList.add('open');
      mobileNav.classList.remove('fade-out');
      mobileNav.classList.add('fade-in');
      bodyTag.style.overflow = "hidden";
   }
})


//// Filtering Portfolio Items

// Selecting all required elements
//work links ul
const workLinks = document.querySelector('.work__links');
 //portfolio items
const filterItem = document.querySelectorAll(".item");

workLinks.onclick = function(selectedLink) {
   //when user clicks on work__links ul 
   if (selectedLink.target.classList.contains('filter-link')) {
      // remove the active class
      workLinks.querySelector('.work__current').classList.remove('work__current');
   }
}
