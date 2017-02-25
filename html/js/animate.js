$(function() {

    var $aboutBox = $('.about__box');
    $(window).scroll(function() {
        var st = $(this).scrollTop();

        if (st > $aboutBox.offset().top - $(window).height()*0.75) {
            $aboutBox.css({
                '-webkit-transform': 'translateY(0)',
                '-moz-transform': 'translateY(0)',
                'transform': 'translateY(0)',
                'opacity': '1'
            });
        }
    });
});
