(function(){

'use strict';



    var customNextSlideLogic,
        showLogoPieceTransition,
        resumeFullpage,

        overlayClass = 'show-logo-overlay',
        isTransitioning =  false,
        forcedTransition = false,
        overlayTransitionTiming = 1500,
        fullTrasitionDelay = overlayTransitionTiming + 600,

        $logoOverlayBg = $('#logo-overlay-bg');


    resumeFullpage = function() {
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);

        $('body').removeClass(overlayClass);

        isTransitioning = false;
    };

    showLogoPieceTransition = function(nextSlideIndex, $nextSlide) {
        $('body').addClass(overlayClass);

        var imgUrl = $nextSlide.find('.js-panel-bg').css('background-image');

        console.log(imgUrl);

        $logoOverlayBg.css('background-image', imgUrl);

        setTimeout(function(){

            $.fn.fullpage.silentMoveTo(nextSlideIndex);


        }, overlayTransitionTiming/2);


        setTimeout(function(){
            resumeFullpage();
        }, fullTrasitionDelay);
    };

    

    customNextSlideLogic = function nextSlide(nextSlideIndex, $nextSlide){
        isTransitioning = true;
        
        //disable scrolling functionality until we finish transitioning out 
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);

        showLogoPieceTransition(nextSlideIndex, $nextSlide);    
        
    };
    
    $('#fullpage').fullpage({
        verticalCentered: false,
        sectionSelector: '.panel',
        scrollingSpeed: 1000,
        fitToSection: false,
        fitToSectionDelay: 5000,
        normalScrollElementTouchThreshold: 10,
        touchSensitivity: 10,
        //animateAnchor: false
        onLeave: function(index, nextIndex, direction){
            

            if (!isTransitioning) {
                customNextSlideLogic(nextIndex, $(this));
                return false;
            }

           
        }
    });
    
    
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);


    
    $(function(){
        $('body').addClass('dom-loaded');


        setTimeout(function(){
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        }, 2000);
    }); 
    

    
}());