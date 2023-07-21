
const MainSlide = new Swiper('.MainSlide', {
    loop: true,
    effect: 'fade',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    }
});

const MediSlide = new Swiper('.MediSlide', {
    loop: true,
    effect: 'fade',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

$(function () {
    $('.gnb>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        };
        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.sub').stop().slideUp();
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });
})

