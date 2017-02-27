'use strict';

var modalOverlay = (function(){



	var initModalOverlay,
		handleModalEvent,
		openModal,
		closeModal,
		ctaLabel,
		$activePanel,
		isAnimating = false,
		showModalClass = 'show-modal-overlay';


		closeModal = function($button){

			if( $activePanel.length) {
				$activePanel.removeClass(showModalClass);
			} else {
				$('#fullpage')
					.find(showModalClass)
					.removeClass(showModalClass);
			}

			$button.text(ctaLabel)
				.data('modal-open', false);

			$activePanel = null;

			isAnimating = true;


			//delay inline with transition
			setTimeout(function(){
				isAnimating = false;

				//resume fulpage functionality
				$.fn.fullpage.setAllowScrolling(true);
    			$.fn.fullpage.setKeyboardScrolling(true);
			}, 1300);

						
		};

		openModal = function($button){
			$activePanel = $button.closest('.panel');

			$activePanel.addClass(showModalClass);

			ctaLabel = $button.text();

			$button.text('close')
				.data('modal-open', true);

			//stop fullpage from working
			$.fn.fullpage.setAllowScrolling(false);
    		$.fn.fullpage.setKeyboardScrolling(false);

    		$activePanel.find('.modal-overlay-content').scrollTop(0);
		};


		handleModalEvent = function (button) {
			var $button = $(button);

			($button.data('modal-open')) ? closeModal($button) : openModal($button);
		};

	initModalOverlay = function() {
		
		var $panels = $('#fullpage').find('.panel');

		$panels.on('click', '.js-modal-open', function(ev){
			ev.stopPropogation;
			ev.preventDefault;
			
			if(isAnimating) {
				return;
			}

			handleModalEvent(this);

		});

		$panels = null;
	};


	return {
		init: initModalOverlay
	};


})();

module.exports = modalOverlay;