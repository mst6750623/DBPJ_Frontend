$(document).ready(function () {
    var uuz = document.getElementById('input-file-to-destroy');  
    
    $("#input-file-to-destroy").bind("input propertychange",function(e){
        var songname=$("#input-file-to-destroy").val().split("\\");
        $("#song_name").val(songname[songname.length-1]);
        /*var upfile = e.dataTransfer.files[0];
        if (upfile.type.substring(0,5) != "audio") {
             alert("您上传的不是音乐！");
             return false;
         } */
         
    })
     uuz.ondrop = function(e){  
        var upfile = e.dataTransfer.files[0];
       if (upfile.type.substring(0,5) != "audio") {
            alert("您上传的不是音乐！");
            return false;
        }
     } 
     
     /*$("#lan li").click(function () {
        this.firstChild
     });
     for (var i=)
     alert($("[name='lan']:eq(0)").prop("checked"));*/
     $("#login").click(login);
     $("#search").on('keydown',function (e){
        if(e.keyCode==13){
             if($('#search').val()){
                 window.location.href='search.html?search='+$('#search').val();
             }
             return false;
         }
     });
});

function radio_change(num,radio_name) {
    for(var i=0;i<num;i++)
    {
        if($("[name=radio_name]:eq(i)").prop("checked"))
        return;
    }
}

function login() {
    var login_div=document.createElement('iframe');
    var login_close=document.createElement('i');
    var blocker=document.createElement('div');
    login_div.src="page-login.html";
    login_div.classList.add('login','new');
    login_close.classList.add('fa','fa-close','fa-2x','login_close','new');
    blocker.classList.add('box','new');
    var body=document.getElementById('whole');
    body.appendChild(login_div);
    body.appendChild(login_close);
    body.appendChild(blocker);
    $('html,body').css('overflow','hidden')
    $(".login_close").click(login_complete);
    
}

function login_complete() {
    $(".new").remove();
    $('html,body').css('overflow', '');
}