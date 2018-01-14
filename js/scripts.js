/**
 * ningbo-gov
 * @author  Rui
 * @version 0.1.0
 * @date    2018-01-14 16:46:15
 */
jQuery(document).ready(function($) {

    // menu
    $("ul.menu").superfish({
        hoverClass: "sfHover",
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: true
    });
    $("ul.menu > li:first").css("background-image", "none");

    // slider
    $("#slider").responsiveSlides({
        manualControls: '#sliderPages',
        namespace: "slider",
        auto: true,
        speed: 800,
        timeout: 5000,
        pager: true,
        nav: false,
        random: false,
        pause: false,
        pauseControls: true,
        maxwidth: ""
    });

    //tabs
    $("#tabs").tabs({
        event: "mouseover"
    });

    $("#linksTab").tabs({
        event: "mouseover"
    });

    $("#tabGroup").each(function () {
        $(".tabGroup").tabs({
            event: "mouseover"
        });
    });

    // images scroll
    $('.imageScrollBox-X').cxScroll({
        direction: 'right',
        step: 1,
        accel: 400,
        speed: 800,
        time: 4000,
        auto: false,
        hoverLock: true,
        prevBtn: true,
        nextBtn: true
    });

    //fancybox
   $("a.fancybox").fancybox({
       'centerOnScroll': true,
       'hideOnOverlayClick': false,
       'showCloseButton': false,
       'overlayOpacity': '.5',
       'overlayColor': '#000',
       'padding': '0'
   });

});

function doZoom(size) {
    var zoom = document.all ? document.all['fontZoom'] : document.getElementById('fontZoom');
    zoom.style.fontSize = size + 'px';
}
