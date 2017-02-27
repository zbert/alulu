'use strict';

var modalOverlay = (function(){



	var initModalOverlay,
		handleModalEvent,
		openModal,
		closeModal,
		ctaLabel,
		$activePanel,
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
			
			handleModalEvent(this);

		});

		$panels = null;
	};


	return {
		init: initModalOverlay
	};


})();

module.exports = modalOverlay;