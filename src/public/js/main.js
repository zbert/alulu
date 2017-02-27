

(function (window) {
    'use strict';

    require('./app/variables');
    require('./app/util-helper');

    require('./app/site-header');
    require('./app/homepage');

    require('./app/modal-overlay').init();
   
})(window);
