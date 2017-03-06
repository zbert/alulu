var brewView = (function() {
	'use strict';

	var tmpl = require('blueimp-tmpl'),
		view  = $('#brew').find('.brew-body')[0],
		brewJson,
		initialize,
		compile;


	compile =  function(brewName) {

		view.innerHTML = tmpl('tmpl-brew', brewJson[brewName]);

	};

	initialize = function() {
		brewJson = initialJsonData;
	};

	return {
		init: initialize,
		template: compile
	};
})();

module.exports = brewView;