$(document).ready(function(){
    
})

var register=new Vue({
    el:'#forms',
    data:{
      user_id:'555',
      user_name:'',
      password_1:'',
      password_2:'',
      legacy_check:false,
      is_checked:true,
    },
    methods:{
    confirm:function(){
        if(this.is_checked)
        {
            $(".notion").remove();
            if(this.password_1 != this.password_2)
            {
                var notion=$("<div></div>");
                notion.text("两次密码输入不一致,请重新输入!");
                notion.addClass("notion");
                $("#register_confirm").before(notion);
                this.password_1='';
                this.password_2='';
                return ;
            }
            else if(!this.legacy_check)
            {
                var notion=$("<div></div>");
                notion.text("请先阅读并同意条款！");
                notion.addClass("notion");
                $("#register_confirm").before(notion);
                return ;
            }

            axios.get('api/Register/confirm',{
                params:{
                  user_name:this.user_name,
                  password:this.password_1,
                },
            }).then(function(response){
                this.user_id=response.user_id;

                var id_display=$("<div></div>");
                id_display.html("<h2>请牢记您的账号!</h2><h1>"+this.user_id+"</h1>");
                id_display.addClass("id_display");
                $("#forms").append(id_display);
                
            })
        }    
    },
    }
   
});
  