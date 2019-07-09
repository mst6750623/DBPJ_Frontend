$(document).ready(function () {//加载时比对用户id和页面id 如果一样 调用visit_myself函数
    $("#main").click(function () {
        $("#container").load("music.html");
    });
    $("#login").click(login);

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

    $("#search").on('keydown',function (e){
       if(e.keyCode==13){
            if($('#search').val()){
                window.location.href='search.html?search='+$('#search').val();
            }
            return false;
        }
    });

});

function login() {
    $("#container").load("music.html");
};

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

function login() {
    var login_div=document.createElement('iframe');
    var login_close=document.createElement('i');
    var blocker=document.createElement('div');
    login_div.src="page-login.html";
    login_div.classList.add('login','new');
    login_close.classList.add('fa','fa-close','fa-2x','login_close','new');
    blocker.classList.add('box','new');
    var body=document.getElementById('container');
    body.insertBefore(login_div,body.childNodes[0]);
    body.insertBefore(login_close,body.childNodes[0]);
    body.insertBefore(blocker,body.childNodes[0]);
    $('html,body').css('overflow','hidden')
    $(".login_close").click(login_complete);
    
}

function login_complete() {
    $(".new").remove();
    $('html,body').css('overflow', '');
}