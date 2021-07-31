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


//// Filter portfolio items

/*
When ALL is clicked
   if All (link) doesnt have .work__current class {
      add .work__current class
   }
      //if all is clicked and already has .work__current class, dont do anything

   //may have to use loop to loop through all links and check if they have the .work__current class

   if Email, Landing Pages, or Websites have .work_current class {
      remove .work_current class
   }
}

When Emails is clicked
   if


*/
