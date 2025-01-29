(function($) {
    "use strict";
    // Hide Loading Box (Preloader)
    function handlePreloader() {
        if($('.loader-wrap').length) {
            setTimeout(function() {
                $('body').addClass('loaded'); // Add the 'loaded' class to body
            }, 3000); // Keep loader visible for 3 seconds
        }
    }
    // When document is loaded, do
    $(window).on('load', function() {
        handlePreloader();
    });
    $('.nav_link').on('click', function() {
        alert('hi');
        $('body').removeClass('mobile-menu-visible');
    });
    // Scroll to a Specific Div
    var $scrollToTarget = $('.scroll-to-target');
    if($scrollToTarget.length) {
        $scrollToTarget.on('click', function() {
            var target = $(this).attr('data-target');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
    }
    // Elements Animation (WOW)
    if($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }
    // Banner Carousel
    if($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: 6000,
            navText: ['<span class="far fa-long-arrow-left"></span>', '<span class="far fa-long-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }
    // Other Carousels (two-column, three-item, etc.)
    function createCarousel(className, items, navText) {
        if($(className).length) {
            $(className).owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                smartSpeed: 1000,
                autoplay: 1000,
                navText: navText,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: items
                    },
                    1024: {
                        items: items
                    }
                }
            });
        }
    }
    createCarousel('.two-column-carousel', 2, ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>']);
    createCarousel('.three-item-carousel', 3, ['<span class="far fa-long-arrow-alt-left"></span>', '<span class="far fa-long-arrow-alt-right"></span>']);
    createCarousel('.four-item-carousel', 4, ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>']);
    createCarousel('.single-item-carousel', 1, ['<span class="icon-Left-Arrow"></span>', '<span class="icon-Right-Arrow"></span>']);
    createCarousel('.clients-carousel', 5, ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>']);
    // One Page Navigation
    if($('.scroll-nav').length) {
        $('.scroll-nav').onePageNav();
    }
    /* ========================================================================== 
    When document is loaded, do
    ========================================================================== */
    $(window).on('load', function() {
        handlePreloader();
    });
})(window.jQuery);