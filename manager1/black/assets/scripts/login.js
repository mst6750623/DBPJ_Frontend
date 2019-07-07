function login() {
    var form = document.getElementById('loginForm');
    var data = FormData(form);
    $.ajax({
        type : 'POST',
        dataType : 'json',
        url : '#',
        data : data,
        success : function(data){
            sessionStorage.setItem('username', data['username']);
            window.location = '/index.html';
        }
    })
}

window.onload = function checkUser(){
    var username = sessionStorage.getItem('username');
    if(username){
        document.getElementById('adminName').innerHTML=username;
    }
}