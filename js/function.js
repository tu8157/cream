$(function () {
    // ----ここからjQueryの記述---

    // バーガーメニュー
    $('#btn').on('click', function () {
        $('#btn__top').toggleClass('rotateTop');
        $('#btn__middle').toggleClass('hideMiddle');
        $('#btn__bottom').toggleClass('rotateBottom');
        $('#bnav').toggleClass('translateNav');
        $('#btn__bottom').toggleClass('hover__bottom');
    });
    $('.bnav__link, .bnav__icon').on('click', function(){
        $('#btn__top').removeClass('rotateTop');
        $('#btn__middle').removeClass('hideMiddle');
        $('#btn__bottom').removeClass('rotateBottom');
        $('#bnav').removeClass('translateNav');
        $('#btn__bottom').addClass('hover__bottom');
    });


    // スムーススクロール
    $('.gnav__link, .bnav__link').on('click', function () {
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 400);
        return false;
    });

    // リサイズヘッダー
    let pos = 0
    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();
        if (ST > pos) {
            $('#header__ttl, #gnav').addClass('upMove');
            $('#header__ttl, #gnav').removeClass('downMove');
        } else {
            $('#header__ttl, #gnav').addClass('downMove');
            $('#header__ttl, #gnav').removeClass('upMove');
        }
        pos = ST
    });

    // フェードイン・アップ
    const windowHeight = $(window).height();
    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();
        $('.fadeIn, .fadeUp').each(function () {
            const target = $(this).offset().top;
            if (ST > target - windowHeight / 1.3) {
                $(this).addClass('showElement');
            }
        });
    });

    // モーダル
    $('.sweet__pic').on('click', function () {
        const modal = $(this).attr('data-modal');
        $(modal).fadeIn(function () {
            $(this).on('click', function () {
                $(this).fadeOut();
            });
        });
    });

    // ----ここまで--------------
});