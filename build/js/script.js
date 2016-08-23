window.log = function(param){
    console.log(param);
};

$(document).ready(function(){

    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };


    $('.tabs-nav').on('click', 'li:not(.active)', function() {
      console.log("ok");
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        });


});
