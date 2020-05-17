$.fn.scrollingTo = function(opts) {
    var defaults = {
        animationTime : 1000,
        easing : '',
        callbackBeforeTransition : function() {},
        callbackAfterTransition : function() {}
    };

    var config = $.extend({}, defaults, opts);

    $(this).click(function(e) {
        e.preventDefault();

        var section = $(document).find($(this).data('section'));
        if (section.length < 1)
            return false;

        if ($('html, body').is(':animated'))
            $('html, body').stop(true, true);

        var scrollPos = section.offset().top;

        if ($(window).scrollTop() == scrollPos)
            return false;

        config.callbackBeforeTransition(e, section);

        $('html, body').animate({'scrollTop' : (scrollPos + 'px')}, config.animationTime, config.easing, function() {
            config.callbackAfterTransition(e, section);
        });
    });
};

$(document).ready(function() {
    new WOW().init();

    jQuery('.smooth-scroll').scrollingTo();

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50)
            $('#top-bar').removeClass('animated-header');
        else
            $('#top-bar').addClass('animated-header');
    });

});

$('.fancybox').fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 450,

    closeEffect : 'elastic',
    closeSpeed  : 350,

    closeClick : true,
    helpers : {
        title : {
            type: 'inside'
        },
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.8)'
            }
        }
    }
});
