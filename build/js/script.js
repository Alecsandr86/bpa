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
/////////////////  desctop  ///////////////////

    $('.tabs-nav_two').on('click', 'li:not(.active)', function() {
         $(this)
             .addClass('active').siblings().removeClass('active')
             .closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
     });

//////////////  table  //////////////

$('.tabs-nav_tab').on('click', 'li:not(.active)', function() {
     $(this)
         .addClass('active').siblings().removeClass('active')
         .closest('.tabs').find(".tabs-nav_tab__link").css({"display" : "block"});

 });

 $('.tabs-nav_tab').on('click', 'li.active', function() {
      $(this)
          .closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active')
          .closest('.tabs').find(".tabs-nav_tab__link").css({"display" : "none"});

      var box = $(".tabs__content").offset().top

      $("body").animate({
            scrollTop: box
          },1000);
        return false;


  });


//////////////  mobail  //////////////

$(window).bind("load resize", function () {
  var width = $(this).width();

  if(width <= 479){
    $('.js-tab').removeClass("tabs-nav_two");
    $('.js-tab').addClass("tabs-nav_one");

    $(".tabs-nav_tab").addClass("tabs-nav__mob");
  }else{
    $('.js-tab').removeClass("tabs-nav_one");
    $('.js-tab').addClass("tabs-nav_two");

    $(".tabs-nav_tab").removeClass(".tabs-nav__mob");

  }

  $(".tabs-nav__mob").on('click', 'li:not(.active)', function() {
       $(this)
         .addClass('active').siblings().removeClass('active')
         .closest('.tabs__nav').find(".tabs-nav_one").find('.tabs-nav__item')
         .removeClass('active').hide().eq($(this).index()).addClass('active').show()
         .closest('.tabs').css({
           "paddingTop" : "55px"
         });

   });

   $(".tabs-nav_one").on('click', 'li.active', function() {
     $(this)
         .addClass('active').hide().siblings().removeClass('active')
         .closest('.tabs').css({
           "paddingTop" : "0"
         })
         .closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');

         var box = $(".tabs__content").offset().top

         $("body").animate({
               scrollTop: box
             },1000);
           return false;  

    });


});


///////////////   форм стаил   //////////////////////

$("select").styler();






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

      //
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








});




$(function() {
    $('.loader-box,.loader').fadeIn(10); //показывает фон и индикатор
    $(window).load(function() {
        $('.loader-box,.loader').fadeOut(1000); //скрывает, после загрузки страницы
    });
});
