// Add shadow to nav on scroll
$(window).scroll(function() {
    $('.contain-to-grid').addClass('shadow');
});

// Nav scroll to #anchor
$(function() {
    if ($(window).width() >= 1024) {
        $('.nav-home').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-one').offset().top
            }, 1500);
        });
        $('.nav-businesses').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-two').offset().top - 86
            }, 1500);
        });
        $('.nav-ideas-anchor').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-three').offset().top - 86
            }, 1500);
        });
        $('.nav-the-team').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-four').offset().top - 90
            }, 1500);
        });
        $('.nav-g6-life').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-five').offset().top - 86
            }, 1500);
        });
        $('.nav-contact').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-six').offset().top - 90
            }, 1500);
        });
    } else {
        $('.nav-home').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-one').offset().top
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('.nav-businesses').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-two').offset().top - 40
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('.nav-ideas-anchor').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-three').offset().top - 40
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('.nav-the-team').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-four').offset().top - 44
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('.nav-g6-life').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-five').offset().top - 40
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('.nav-contact').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-six').offset().top - 44
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
    }
});
