$(document).ready(function(){

})

var login=new Vue({
    el:'#forms',
    data:{
      user_id:'',
      password:'',
    },
    methods:{
    confirm:function(){
        var encoded = btoa(this.user_id+':'+this.password);
        $.ajax({
            type:'GET',
            url:'/url',
            headers:{
                'Authorization':'Basic'+encoded
            },
            success:function(data){
                sessionStorage.setItem('user_id',this.user_id);
                sessionStorage.setItem('token',data['access_token']);
               // window.location='/index.html'
            }
        })
           
    },
    }
    
});


  