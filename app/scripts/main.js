'use strict';
var isp = (function($){
	var container = document.querySelector('.isotope-container');
	$(container).hide();
	var iso;
	return {
		run: function() {
			imagesLoaded(container, function(e) {
					$(container).fadeIn();
					iso = new Isotope(container,{
						itemSelector: '.js-isotope-item',
						layoutMode: 'masonry',
						masonry: {
							columnWidth: 300,
							gutter: 10,
							isFitWidth:true
							}
					})
				})
			}
		}
}(jQuery));

isp.run();