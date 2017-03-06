'use strict';

var $siteHeader = $('.js-site-header'),
	$siteNav = $('.js-site-nav'),

	//module imports
	fullpage = require('./fullpage.js');


$siteHeader.on('click.Menu', '.js-menu-toggle', function(ev){
    ev.stopPropagation();
    ev.preventDefault();

    $siteHeader.toggleClass('show-site-menu');
});


$siteNav.on('click.Menu', '.js-nav-link', function(ev){

    $siteHeader.removeClass('show-site-menu');
});