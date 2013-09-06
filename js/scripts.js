// Add shadow to nav on scroll
$(window).scroll(function() {
    $('.contain-to-grid').addClass('shadow');
});

// Nav scroll to #anchor
$(function() {
    if ($(window).width() >= 768) {
        $('#home').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-one').offset().top
            }, 1500);
        });
        $('#businesses').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-two').offset().top - 86
            }, 1500);
        });
        $('#ideas-anchor').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-three').offset().top - 86
            }, 1500);
        });
        $('#the-team').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-four').offset().top - 90
            }, 1500);
        });
        $('#g6-life').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-five').offset().top - 86
            }, 1500);
        });
        $('#contact').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-six').offset().top - 90
            }, 1500);
        });
    } else {
        $('#home').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-one').offset().top
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('#businesses').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-two').offset().top - 40
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('#ideas-anchor').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-three').offset().top - 40
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('#the-team').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-four').offset().top - 44
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('#g6-life').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-five').offset().top - 40
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
        $('#contact').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#panel-six').offset().top - 44
            }, 1500);
            $('.top-bar').removeClass('expanded');
        });
    }
});
