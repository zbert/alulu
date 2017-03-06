var brewView = (function(){
	'use strict';

	var initBrewView,
		showBrewDetail,
		closeBrewDetail,
		$brewPage,
		
		isAnimating = false,
		showBrewClass = 'show-brew-overlay',

		brewCompile = require('./brew-compile');


	closeBrewDetail = function(){

		$('body').removeClass(showBrewClass);

		$brewPage.off('click.brewClose');

		isAnimating = true;
					
	};

	showBrewDetail = function($link, brewName){

		$('body').addClass(showBrewClass);

		brewCompile.template(brewName);

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

			var beerId = this.getAttribute('href');
			beerId = beerId.slice(1);

			showBrewDetail($(this), beerId);
		});

		$brewPage = $('#brew');

		brewCompile.init();
		
	};


	return {
		init: initBrewView
	};


})();

module.exports = brewView;