$(window).on('load', function () {
    $("body").removeClass("overflow");
});
$(document).ready(function () {
    $(".header-message span.msg-close").click(function () {
        $(".header-message").slideUp()
    });
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    //////////** product slider **//////////
    sliderinit('.special_pro')
    sliderinit('.lattest_pro')
    sliderinit('.bestseller_pro')
    //////////** contacts slider **//////////
    var contactswiper = new Swiper('.home-contacts .swiper-container', {
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            0: {
                simulateTouch: true,
                slidesPerView: 2,
                autoplay: {
                    delay: 4000,
                },
            },
            767: {
                slidesPerView: 3,
                simulateTouch: true,
                autoplay: false,
            },
            992: {
                slidesPerView: 3,
                simulateTouch: false,
                autoplay: false,
            },
        },
    });
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-head").addClass("mo-accordion");
        $(".foot-nav").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **menu** /////////
    if ($(window).width() < 992) {
        $('.menu-icon').click(function () {
            menu()
        });
        $('.overlay,.close-menu').click(function () {
            menu()
        });
        $(".header-setting").click(function () {
            $(this).addClass("active");
            $(".opts-overlay").show();
        });
        $(".opts-overlay").click(function () {
            $(".header-setting").removeClass("active");
            $(".opts-overlay").hide();
        });
    }
});
sliderinit = function (section_name) {
    var productswiper = new Swiper(section_name + ' .swiper-container', {
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: section_name + ' .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: section_name + ' .swiper-button-next',
            prevEl: section_name + ' .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 6,

            },
        },
    });
}
menu = function () {
    $("nav").toggleClass("active");
    $("body").toggleClass("overflow");
    $(".overlay").fadeToggle(400);
}