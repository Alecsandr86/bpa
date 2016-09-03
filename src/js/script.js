$(document).ready(function() {
    /////////////////  desctop  ///////////////////

    $('.tabs-nav_two').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
    });

    //////////////  table  //////////////

    $(window).on("load resize", function() {
        var width = $(this).width();
        $(function() {
        if (width <= 767) {
            $(".tabs-nav_tab").addClass("js-tablet");
            $(".tabs-nav__item").addClass("tabs-nav__item-js");
            $('.js-tablet').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('.tabs').find(".tabs-nav_tab__link").css({
                        "display": "block"
                    });

                });

            $('.js-tablet').on('click', '.tabs-nav__item-js.active', function() {
                //var scrollers = $(".tabs__content").offset();
                $(this)
                    .closest('.tabs').find('.tabs__item').removeClass('active')
                    .eq($(this).index()).addClass('active')
                    .closest('.tabs').find(".tabs-nav_tab__link")
                    .css({
                        "display": "none"
                    });

                $("body").scrollTop($(".tabs__content").offset().top);



                // $("body").animate({
                //     scrollTop: $(".tabs__content").offset().top
                // }, 500);
                // e.preventDefault();
                // return false;
            });

        } else if (width >= 767) {
            $(".tabs-nav_tab").removeClass("js-tablet");
            $(".tabs-nav__item").removeClass("tabs-nav__item-js");

        }
            });


    });


    // $(".tabs-nav_tab__link").on("click", function () {
    //   $(this).css({"display" : "none"})
    //
    //
    // });


    //////////////  mobail  //////////////

    $(window).bind("load resize", function() {
        var width = $(this).width();

        if (width <= 479) {
            $(".tabs-nav_tab").removeClass("js-tablet");
            $(".tabs-nav__item").removeClass("tabs-nav__item-js");

            $('.js-tab').removeClass("tabs-nav_two");
            $('.js-tab').addClass("tabs-nav_one");

            $(".tabs-nav_tab").addClass("tabs-nav__mob");

            $(".tabs-nav__mob").on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('.tabs__nav').find(".tabs-nav_one").find('.tabs-nav__item')
                    .removeClass('active').eq($(this).index()).addClass('active')
                    .closest('.tabs').find('.tabs__item').removeClass('active')
                    .eq($(this).index()).addClass('active');

            });

        } else {
            $('.js-tab').removeClass("tabs-nav_one");
            $('.js-tab').addClass("tabs-nav_two");

            $(".tabs-nav_tab").removeClass(".tabs-nav__mob");
            $(".tabs-nav_tab__link").css({"display" : "none"});

        };


        //  $(".tabs-nav_tab").on('click', 'li.active', function() {
        //       //$(window).unbind("scroll");
        //
        //         $(window).unbind('scroll');
        //   });


    });


    $(".lang-list__item").on("click",function () {
        $(this).addClass("active").siblings().removeClass('active');
    })

    ///////////////   форм стаил   //////////////////////

    $("select").styler();

    // setTimeout(function() {
    //   $('select').styler();
    // }, 100)

    ///////////////////////////////////////////////////////////////////////////////

   // console.log("ok");

});


$(function() {
    $('.loader-box,.loader').fadeIn(10); //показывает фон и индикатор
    $(window).load(function() {
        $('.loader-box,.loader').fadeOut(1000); //скрывает, после загрузки страницы
    });
});
