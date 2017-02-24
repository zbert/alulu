(function(){

// 'use strict';



//     var customNextSlideLogic,
//         showLogoPieceTransition,
//         resumeFullpage,
//         isTransitioning =  false,
//         forcedTransition = false,
//         overlayTransitionTiming = 1500,
//         fullTrasitionDelay = overlayTransitionTiming + 600,

//         $logoPieceBg = $('.logo-piece-cover > .logo-piece-cover-section-bg');


//     resumeFullpage = function() {
//         $.fn.fullpage.setAllowScrolling(true);
//         $.fn.fullpage.setKeyboardScrolling(true);

//         $('body').removeClass('show-logo');

//         isTransitioning = false;
//     };

//     showLogoPieceTransition = function(nextSlideIndex, $nextSlide) {
//         $('body').addClass('show-logo');

//         var imgUrl = $nextSlide.find('.js-bg').attr('src');


//         $logoPieceBg.attr('src', imgUrl);

//         setTimeout(function(){

//             $.fn.fullpage.silentMoveTo(nextSlideIndex);


//         }, overlayTransitionTiming/2);


//         setTimeout(function(){
//             resumeFullpage();
//         }, fullTrasitionDelay);
//     };

    

//     customNextSlideLogic = function nextSlide(nextSlideIndex, $nextSlide){
//         isTransitioning = true;
        
//         //disable scrolling functionality until we finish transitioning out 
//         $.fn.fullpage.setAllowScrolling(false);
//         $.fn.fullpage.setKeyboardScrolling(false);

//         showLogoPieceTransition(nextSlideIndex, $nextSlide);    
        
//     };
    
//     $('#fullpage').fullpage({
//         verticalCentered: false,
//         scrollingSpeed: 1000,
//         fitToSection: false,
//         fitToSectionDelay: 5000,
//         normalScrollElementTouchThreshold: 10,
//         touchSensitivity: 10,
//         //animateAnchor: false
//         onLeave: function(index, nextIndex, direction){
            

//             if (!isTransitioning) {
//                 customNextSlideLogic(nextIndex, $(this));
//                 return false;
//             }

           
//         }
//     });
    
    
//     $.fn.fullpage.setAllowScrolling(false);
//     $.fn.fullpage.setKeyboardScrolling(false);


    
//     $(function(){
//         $('body').addClass('dom-loaded');


//         setTimeout(function(){
//             $.fn.fullpage.setAllowScrolling(true);
//             $.fn.fullpage.setKeyboardScrolling(true);
//         }, 2000);
//     }); 
    

    
}());