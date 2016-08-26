window.log = function(param) {
    console.log(param);
};

$(document).ready(function() {

    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('.tabs-nav').on('click', 'li:not(.active)', function() {
         $(this)
             .addClass('active').siblings().removeClass('active')
             .closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
     });







///////////////////////////////////////////////////////////////////////////////






    //var width = $(window).width();

      // if(width > 480){
      //   $('.tabs-nav').on('click', 'li:not(.active)', function() {
      //       $(this)
      //           .addClass('active').siblings().removeClass('active')
      //           .closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
      //   });
      //
      // }else{
      //   $('.tabs-nav').on('click', 'li:not(.active)', function() {
      //       $(this)
      //           .css({
      //             "left":"-100%"
      //           })
      //           .animate({
      //             "left":"0"
      //           },1000)
      //           .addClass('active').siblings().removeClass('active')
      //           .css({
      //             "left":"0"
      //           })
      //   });
      //   $('.tabs-nav').on("click", "li.active", function () {
      //     $(this)
      //       .closest('.tabs').find('.tabs__item')
      //        .removeClass('active').eq($(this).index()).addClass('active');
      //   })
      // };


      // if(window.innerWidth>480) {
      //
      //   $('#tabs-navs').removeClass('mob-tabs');
      //   $('#tabs-navs').on('click', 'li:not(.active)', function() {
      //       $(this)
      //           .addClass('active').siblings().removeClass('active')
      //           .closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
      //   });
      //
      // }
      //
      // $(window).resize(function(){
      //
      //   if(window.innerWidth > 480) {
      //       $('#tabs-navs').removeClass('mob-tabs');
      //       $('#tabs-navs').on('click', 'li:not(.active)', function() {
      //           $(this)
      //               .addClass('active').siblings().removeClass('active')
      //               .closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
      //       });
      //
      //   } else if(window.innerWidth < 480) {
      //     $('#tabs-navs').addClass('mob-tabs');
      //
      //     $('.mob-tabs').on('click', 'li:not(.active)', function() {
      //          $(this)
      //              .css({
      //                "left":"-100%"
      //              })
      //              .animate({
      //                "left":"0"
      //              },1000)
      //              .addClass('active').siblings().removeClass('active')
      //              .css({
      //                "left":"0"
      //              })
      //      });
      //
      //      $('.mob-tabs').on("click", "li.active", function () {
      //        $(this)
      //          .closest('.tabs').find('.tabs__item')
      //           .removeClass('active').eq($(this).index()).addClass('active');
      //      })
      //
      //   }
      // });
      //
      //






});




$(function() {
    $('.loader-box,.loader').fadeIn(10); //показывает фон и индикатор
    $(window).load(function() {
        $('.loader-box,.loader').fadeOut(1000); //скрывает, после загрузки страницы
    });
});
