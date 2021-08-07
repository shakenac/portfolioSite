//once window load
window.onload = function() {
   
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

   // when link in mobile nav is clicked, hide mobile nav
   mobileNav.addEventListener('click', function(selectedLink) {
      if (selectedLink.target.tagName.toLowerCase() == 'a') {
         header.classList.remove('open');
         mobileNav.classList.remove('fade-in');
         mobileNav.classList.add('fade-out');
         bodyTag.style.overflow = "visible";
      }
   })


   //// Filtering Portfolio Items

   // Selecting all required elements
   //work links ul
   const workLinks = document.querySelector('.work__links');
    //portfolio items
   const filterItem = document.querySelectorAll(".item");


   if (workLinks) {

      workLinks.addEventListener('click', function(selectedLink) {
         //when user clicks on work__links ul
         if (selectedLink.target.classList.contains('filter-link')) {

            // remove the work__current class
            workLinks.querySelector('.work__current').classList.remove('work__current');
            //add work__current class to selectedLink (whatever user clicked on)
            selectedLink.target.classList.add('work__current');

            //getting data-type value of selected item and storing in a filtername variable (data-* is considered an attribute)
            let filterType = selectedLink.target.getAttribute('data-type');

            //variable: getting data-type2 value of selected item and storing in a filtername variable
            let filterType2 = selectedLink.target.getAttribute('data-type2');

            //getting image data-name value
               //looping through each (forEach) array item (filterItem) and adding the function to each item
            filterItem.forEach(function(item) {

               let filterItemType = item.getAttribute('data-type');

               //variable: items data-type2 value
               let filterItemType2 = item.getAttribute('data-type2');

               //if user selected item data-type value is eqaul to workLinks data-type
                  // or user selected item data-type value is equal to 'all'
               if ((filterItemType == filterType) ||  filterType == 'all') {
                  // item.classList.add('show');
                  item.classList.add('scale-in');
                  item.classList.remove('hide');
                  // item.classList.remove('scale-out');
               }
               else if ((filterItemType2 == filterType) || filterType == 'all') {
                  // item.classList.add('show');
                  item.classList.add('scale-in');
                  item.classList.remove('hide');
                  // item.classList.remove('scale-out');
               }
               else {
                  item.classList.add('hide');
                  item.classList.add('scale-out');
                  // item.classList.remove('show');
                  // item.classList.remove('scale-in');
               }
            })
         }
      })
   }
}
