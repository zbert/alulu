

(function (window) {
    'use strict';

    require('./app/variables');
    require('./app/util-helper');

    
    require('./app/fullpage').init();

    require('./app/site-header');
    
    require('./app/modal-overlay').init();
    require('./app/brew-view').init();
   
})(window);
