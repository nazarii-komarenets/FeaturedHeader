jQuery(window).scroll(function() {    // this will work when your window scrolled.
		var height = jQuery(window).scrollTop();  //getting the scrolling height of window
		if(height  > 600) {
			jQuery("#site-header").css({"position": "fixed"});
			jQuery("#site-header").addClass('stiky-head');
		} else{
			jQuery("#site-header").css({"position": "relative"});
			jQuery("#site-header").removeClass('stiky-head');
		}
	});