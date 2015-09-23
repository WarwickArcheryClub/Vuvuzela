$(document).ready(function() {
    $(".carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        arrows: false,
        centerMode: true,
        mobileFirst: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: true,
                    centerMode: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    variableWidth: false,
                    centerMode: true,
                    arrows: false,
                }
            }
        ]
    });
});
