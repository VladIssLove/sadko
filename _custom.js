document.addEventListener("DOMContentLoaded", function() {

   $(".scrollbar").mCustomScrollbar({
       theme:"dark"
   });


    $("input[type='tel']").mask("+7 (999) 999-99-99");


    /**
     * work-results
     */
    $('.js-work-results').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        dots: true,
    });


    /**
     * options-decoration
     */
    $('.js-options-decoration').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
    });


    /**
     * tabs
     */
    (function tabs() {
        var flag = true;
        $('.options-decoration__category-btn').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var item = $this.closest('.options-decoration__category-item');
            var container = $this.closest('.options-decoration');
            var content = container.find('.options-decoration__content-item');
            var ndx = item.index();
            var regItem = content.eq(ndx);
            var activeItem = content.filter('.active');
            if (flag) {
                flag = false;
                item.addClass('active')
                    .siblings()
                    .removeClass('active');
                activeItem.fadeOut(500, function() {
                    regItem.fadeIn(500, function() {
                        flag = true;
                        $(this).addClass('active')
                            .siblings()
                            .removeClass('active');
                    });
                });
            }
        });
    })();


    /**
     * slider-description js-options-decoration
     */
    $('.js-options-decoration .slider-description__carousel-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.options-decoration .slider-description__carousel-nav'
    });
    $('.js-options-decoration .slider-description__carousel-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.options-decoration .slider-description__carousel-for',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
                    nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
                }
            },
        ]
    });

    /**
     * js-redevelopment
     */
    $('.js-redevelopment').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    });

    /**
     * slider-description js-redevelopment
     */
    $('.js-redevelopment .slider-description__carousel-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-redevelopment .slider-description__carousel-nav'
    });
    $('.js-redevelopment .slider-description__carousel-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.js-redevelopment .slider-description__carousel-for',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
                    nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
                }
            },
        ]
    });


    /**
     * js-modal-photo
     */
    function initModalPhoto() {
        $('.js-modal-photo .slider-description__carousel-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-modal-photo .slider-description__carousel-nav'
        });
        $('.js-modal-photo .slider-description__carousel-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.js-modal-photo .slider-description__carousel-for',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
                        nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
                        nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
                    }
                },
            ]
        });
    }


    /**
     * js-furniture-selection
     */
    $('.js-furniture-selection').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });


    /**
     * js-photo-gallery
     */
    $('.js-photo-gallery').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.js-photo-modal').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom',
        callbacks: {
            open: initModalPhoto
        }
    });



    /**
     * js-reviews
     */
    $('.js-reviews').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        centerMode: true,
        centerPadding: '30px',
    });

    $('.js-reviews .reviews__item').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom',
        callbacks: {
            open: initModalReviews
        }
    });

    function initModalReviews() {
        $('.js-modal-reviews').slick({
            prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
        });
    }



    /* popups */

    /**
     * Magnific
     **/
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    /**
     * js-redevelopment
     */
    $('.js-redevelopment .slider-description__carousel-for-item').magnificPopup({
        type: 'image'
    });


    /**
     * js-thank-slider
     */
    $('.js-thank-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    /**
     * js-modal-office
     */
    $('.js-modal-office').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom',
        callbacks: {
            open: initModalOfficeSlider
        }
    });

    function initModalOfficeSlider() {
        $('.js-modal-office-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        });
    }

});
