function login() {
    var form = document.getElementById('loginForm');
    var formData = new FormData(form);
    var encoded = btoa(formData.get('user_id') + ':' + formData.get('password'));
    $.ajax({
        type : 'GET',
        url : '/url?role=admin',
        headers: {
            'Authorization': 'Basic ' + encoded
        },
        success : function(data){
            sessionStorage.setItem('username', data['username']);
            sessionStorage.setItem('admin_id', formData.get('user_id'));
            sessionStorage.setItem('token', data['access_token']);
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


history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});