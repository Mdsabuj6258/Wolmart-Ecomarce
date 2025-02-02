$(function () {

    "use strict";

    // nice select js
    $('.select_js').niceSelect();



    //======BANNER SLIDER====== 
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //======frreshoping SLIDER====== 
    $('.frreshoping_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    //======top munth cetagor SLIDER====== 
    $('.top_munth_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //======top munth cetagor SLIDER====== 
    $('.apprel_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //======top munth cetagor SLIDER====== 
    $('.blog_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //======Recent view SLIDER====== 
    $('.recent_view_slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });










    /*==============ZOOM==================*/
    $(".zoom").elevateZoom({
        zoomType: "lens",
    });

























});
