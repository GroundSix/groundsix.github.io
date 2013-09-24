define(['jquery'], function($) {
    $(function() {		
		// Add shadow to nav on scroll
    	$(window).scroll(function() {
			$('.contain-to-grid').addClass('shadow');
		});

    	// Top bar scroll to #anchor.
    	$('.top-bar-section ul li a').on('click', function(e) {
			e.preventDefault();
			var offset = ($(window).width() >= 1024) ? $(this).data('scrolloffset') : ($(this).data('scrolloffset') - 46);
			$('html, body').stop(true, false).animate({
            	scrollTop: $('#' + $(this).data('scrollto')).offset().top - offset
            }, 1500);
		});

    });
});