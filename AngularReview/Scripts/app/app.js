(function () {
    'use strict'
    var initCount = 0;

    var carousel = $(".jcarousel");
    

    $("#start").click(function () {
        if (initCount == 0) {
            carousel.jcarousel({ wrap: 'last' });
            carousel.jcarouselAutoscroll({
                        interval: 1000,
                        target: '+=1',
                        autostart: false
                    });
            initCount += 1;
        }
        carousel.jcarouselAutoscroll('start', "+=1");
    });

    $("#stop").click(function () {
        carousel.jcarouselAutoscroll('stop');
    });
}());
