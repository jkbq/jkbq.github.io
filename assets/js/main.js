;(function ($, w, d, h, b) {
    w.siteHelper = {
        debounce: function (func, timeout = 300) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, timeout);
            };
        },
        getScrollBarWidth: function () {
            var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body');
            var widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();

            $outer.remove();
            return 100 - widthWithScroll;
        },
        splide: []
    };
    
    var app = {
        navigation: function () {
            var $navigation = $('.site-navigation');

            $navigation.find('a').on('click', function (e) {
                e.preventDefault();
                var href = $(this).attr('href');

                $('html, body').animate({
                    scrollTop: $(href).offset().top - 100
                }, 500);
            });
        },
        init: function () {
            this.navigation();
        }
    }

    $(document).ready(function () {
        app.init();
    });

})(jQuery, window, document, 'html', 'body');