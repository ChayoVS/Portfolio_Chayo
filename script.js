window.addEventListener('load', () => {
    const loader = document.querySelector('.load-container');
})

 // Select all links with hashes
 $('a[href*="#"]')
 // Remove links that don't actually link to anything
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function (event) {
     // On-page links
     if (
         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
         &&
         location.hostname == this.hostname
     ) {
         // Figure out element to scroll to
         const target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         // Does a scroll target exist?
         if (target.length) {
             // Only prevent default if animation is actually gonna happen
             event.preventDefault();
             $('html, body').animate({
                 scrollTop: target.offset().top
             }, 1000, function () {
                 // Callback after animation
                 // Must change focus!
                 const $target = $(target);
                 $target.focus();
                 if ($target.is(":focus")) { // Checking if the target was focused
                     return false;
                 } else {
                     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                     $target.focus(); // Set focus again
                 };
             });
         }
     }
 });

//  $(window).on('scroll', () => {
//      if($(window).scrollTop()){
//          $('nav').addClass('black');
//      }
//      else {
//          $('nav').removeClass('black');
//      }
//  })

 $(window).on('scroll', () => {
        $('nav').addClass('black');
})
