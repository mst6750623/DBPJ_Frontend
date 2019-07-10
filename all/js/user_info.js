$(document).ready(function () {//加载时比对用户id和页面id 如果一样 调用visit_myself函数
    "use strict";
        var $main_window = $(window);
        /*====================================
            preloader js
          ======================================*/
        $main_window.on('load', function () {
            $('#preloader').fadeOut('slow');
        });
        /*====================================
            sticky menu js
          ======================================*/
        var windows = $(window);
        var sticky = $('.header-fixed');
        windows.on('scroll', function () {
            var scroll = windows.scrollTop();
            if (scroll < 50) {
                sticky.removeClass('stick');
            } else {
                sticky.addClass('stick');
            }
        });
        /*====================================
            slick nav
        ======================================*/
        var logo_path = $('.mobile-menu').data('logo');
        $('.navbar-nav').slicknav({
            appendTo: '.mobile-menu',
            removeClasses: true,
            label: '',
            closedSymbol: '<i class="fa fa-angle-right"><i/>',
            openedSymbol: '<i class="fa fa-angle-down"><i/>',
            brand: '<img src="' + logo_path + '" class="img-fluid" alt="logo">'
        });

    $('.breadcrumb-item').click(function() {
        update($(this).attr('name'));    
    });

    $("#follow li").click (function () {
        update($(this).attr('name'));
    });
    var is_follow_status=false;
    $("#is_follow").click(function () {
        var followed="<i class=\"fa fa-check\"></i>  已关注";
        var unfollowed="<i class=\"fa fa-plus\"></i>  关注";
        if(!is_follow_status)
            {
                $(this).html(followed);
                is_follow_status=true;
                $("#fans_num").text(parseInt($("#fans_num").text())+1);
            }
        else
            {
                $(this).html(unfollowed);
                is_follow_status=false;
                $("#fans_num").text(parseInt($("#fans_num").text())-1);
            }
    });
    $(window).bind('beforeunload',function() {
        //这里向服务器发送 is_follow_status 的值
    });


});


function update(type) {
    console.log(type);
    $('.breadcrumb-item').each(function () {
        if($(this).attr('name')==type)
            $(this).css('font-size','24px');
        else
            $(this).css('font-size','20px');
    });
    $(".pre").each(function () {
            if($(this).attr('id')==type)
                $(this).css('display','inline');
            else
                $(this).css('display','none');
    });
}

function visit_myself() {
    $("#report").css('display','none');
    $("#is_follow").css('display','none');
}
