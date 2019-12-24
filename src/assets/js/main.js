var action = false,
    clicked = false;
var Owl = {

    init: function() {
        Owl.carousel();
    },

    carousel: function() {
        var owl;
        $(document).ready(function() {

            owl = $('.owlExample').owlCarousel({
                items: 1,
                center: true,
                nav: false,
                dots: true,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 2000,
                dotsContainer: '.test',
                navText: ['prev', 'next'],
            });

            $('.owl-next').on('click', function() {
                action = 'next';
            });

            $('.owl-prev').on('click', function() {
                action = 'prev';
            });

            $('.bookmarks').on('click', 'li', function(e) {
                owl.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
        });
    }
};

$(document).ready(function() {
    Owl.init();
});

