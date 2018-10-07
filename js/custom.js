(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        
   //mix it up
         var mixer = mixitup('.mixitup');
    //owl carousel
        
   $(".owl-carousel").owlCarousel({
       items: 1,
       autoplay: true,
       autoplayTimeout:4000,
       autoplayHoverPause: true,
     animateIn: 'slideInLeft', // add this
  animateOut: 'slideOutRight',
        loop: true
    
   });
        
        
        //back tot top
        window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         $(".back-to-top").css({  
             "display": "block"
         });
        
    }
    else {
        $(".back-to-top").css({  
             "display": "none"
         });
    }
}

        
         });
    
    jQuery(window).load(function(){
        
    });
    
}(jQuery));	










