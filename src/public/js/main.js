

(function (window) {
    'use strict';

    require('./app/variables');
    require('./app/util-helper');

    
    require('./app/fullpage').init();

    require('./app/site-header');
    
    
    require('./app/brew-view').init();

    window.modalOverlay = require('./app/modal-overlay');

    window.modalOverlay.init();
   
})(window);
