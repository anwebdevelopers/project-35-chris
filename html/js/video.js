$(function() {
    //---------------------------------
    //Видео
    //---------------------------------
    var videoItem = document.querySelector('.video__item'),
        videoButton = document.querySelector('.video__button');

    videoButton.addEventListener('click', function(e) {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            videoItem.pause();

        } else {

            this.classList.add('active');
            videoItem.volume = 0.3;
            videoItem.play();
        }
    }, false);

    //-------------------------------------------------------------
    //Parallax
    //-------------------------------------------------------------
    var $video = $('.video');
    $(window).scroll(function() {
        var st = $(this).scrollTop();

        if (st > $video.offset().top - $(window).height() && st < ($video.offset().top) + $video.height()) {
            $video.css({
                'background-position': '50% ' +  (140 - (st  / 30)) + '%'
            });
        }
    });
});
