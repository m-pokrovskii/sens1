'use strict';
var isp = (function($){
	var container = document.querySelector('.isotope-container');
	var iso;
	return {
		run: function() {
			imagesLoaded(container, function() {
					$(container).fadeIn();
					iso = new Isotope(container,{
						itemSelector: '.js-isotope-item',
						layoutMode: 'masonry',
						masonry: {
							columnWidth: 300,
							gutter: 15,
							}
					})
				})
			}
		}
}(jQuery));

isp.run();