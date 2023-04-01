$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnSpeed: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
    });
});

$(document).ready(function () {
    $('.recomend-slider').slick({
        arrows: true,
        dots: true,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnSpeed: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        slidesToShow: 3,
        touchThreshold: 7,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
        //waitForAnimate: false
    });
});

