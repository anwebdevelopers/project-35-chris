$(function() {

    'use strict';

    //------------------------------------------------------------
    //fullscreen header
    //------------------------------------------------------------
    var $titleSectionMain = $('.title-section_main')
    $titleSectionMain.css({
        'min-height' : $(window).height() + 'px'
    });
    $(window).resize(function() {
        $titleSectionMain.css({
            'min-height' : $(window).height() + 'px'
        });
    });

    //------------------------------------------------------------
    //stick menu
    //------------------------------------------------------------
    var $nav = $('.nav'),
        $navInner = $('.nav__inner'),
        $navMenu = $('.nav__menu'),
        startPos = $navMenu.offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() - 10 >= startPos) {
            if ($navInner.hasClass('.stick') == false) {
                var navHeight = $navInner.height();
                $nav.css({
                    'min-height' : navHeight + 'px'
                });
                $navInner.addClass('stick');
                setTimeout(function() {
                    $navInner.css({
                        '-webkit-transform': 'translateY(0)',
                        '-moz-transform': 'translateY(0)',
                        'transform': 'translateY(0)',
                        '-webkit-transition': 'all .5s ease',
                        '-moz-transition': 'all .5s ease',
                        'transition':' all .5s ease',
                        'opacity': '1'
                    });
            	}, 100);
            }
        } else {
            $navInner.removeClass('stick').removeAttr('style');
            $nav.removeAttr('style');
        }
    });


    //---------------------------------
    //Адаптивный слайдер
    //---------------------------------
    $(".reviews__slider").owlCarousel({
        nav: false,
        smartSpeed: 800,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },

            480: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });



    $(".blog__slider").owlCarousel({
        nav: true,
        navText: '',
        smartSpeed: 800,
        autoHeight: true,
        items: 1
    });

    //------------------------------------
    //Скролл к началу слайдера
    //------------------------------------
    $(".blog__slider").on('click','.owl-prev, .owl-next', function() {
        $('html, body').animate({scrollTop: $(".blog__slider").offset().top - $nav.height()}, 600, 'linear');
    });

    //------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------

    $(".advantages__item-title h3").equalHeight();
    $(".reviews__item-name span").equalHeight();


    //------------------------------------
    // Рэндж в форме
    //------------------------------------
    $( ".calculation__range-slider" ).slider({
      range: "max",
      min: 1,
      max: 6,
      slide: function( event, ui ) {
        $( "#range" ).val( ui.value );
      }
    });
    $( "#range" ).val( $( ".calculation__range-slider" ).slider( "value" ) );

    //------------------------------------------------
    // Плавный скролл
    //------------------------------------------------

    $('a[href*="#"]').click(function(e) {
       e.preventDefault();
       var thisSect = $($(this).attr('href')).offset().top;
       $('html, body').animate({scrollTop: thisSect - $nav.height()}, (Math.abs(thisSect - $(window).scrollTop())) * 0.5, 'swing');
   });

    //------------------------------------------------
    // Сокрытие контента в футере
    //------------------------------------------------
    var $impressumButton = $('.footer__impressum button'),
        $impressumContainer = $('.footer__impressum-container');
    $impressumButton.click(function() {
        if ($impressumContainer.is(':visible')) {
            $impressumContainer.slideUp();
            $impressumButton.text('impressum');
        } else {
            $impressumContainer.slideDown();
            $impressumButton.text('Impressum schließen');
            $('html, body').animate({scrollTop: $impressumContainer.offset().top - $nav.height()});
        }
    });
    $impressumContainer.hide();

    //------------------------------------------------
    // zoom-gallery картинок
    //------------------------------------------------
    $('.referenzen__box').magnificPopup({
		delegate: '.referenzen__item',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: true,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: false,
            horizontalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});


    //------------------------------------------------
    // Перетаскивание картинок
    //------------------------------------------------
    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

    //------------------------------------------------
    // Прелоадер
    //------------------------------------------------
    $("#preloader__img").fadeOut(600);
    $("#preloader").fadeOut(800);


    //------------------------------------------------
    // 1st screen animate
    //------------------------------------------------
   $('.header__animate').css({
       '-webkit-transform': 'translateY(0)',
       '-moz-transform': 'translateY(0)',
       'transform': 'translateY(0)',
       'opacity': '1'
   });

});
