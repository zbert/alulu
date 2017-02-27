'use strict';

var brewView = (function(){
	var initBrewView,
		showBrewDetail,
		closeBrewDetail,
		$brewPage,
		
		isAnimating = false,
		showBrewClass = 'show-brew-overlay';


		closeBrewDetail = function(){

			$('body').removeClass(showBrewClass);

			$brewPage.off('click.brewClose');

			isAnimating = true;
						
		};

		showBrewDetail = function($link){

			$('body').addClass(showBrewClass);

			$brewPage.on('click.brewClose', '.js-close-brew', function(ev){
				ev.preventDefault;
				ev.stopPropagation;

				closeBrewDetail();
			});
		};

	initBrewView = function() {
		
		$('#beer-grid').on('click', '.js-brew-link', function(ev){
			ev.preventDefault;
			ev.stopPropagation;

			showBrewDetail($(this));
		});

		$brewPage = $('#brew');
		
	};


	return {
		init: initBrewView
	};


})();

module.exports = brewView;