var upload_page_data={
    user_id:'',
    accomp_id:'',
    accomp_name:'',
    music_name:'',
    music_info:'',
    language:'',
    style:'',
    sentiment:'',

}

$(documen).ready(function(){

    var paras = location.search;
  var result = paras.match(/[^\?&]*=[^&]*/g);
  paras = {};					//让paras变成没有内容的json对象
  for(var i in result){
    var temp = result[i].split('=');	//split()将一个字符串分解成一个数组,两次遍历result中的值分别为['itemId','xx']
    paras[temp[0]] = temp[1];
  }
  var accomp_name = paras.accomp_name;     //根据参数名"itemId"，获取参数值

  axios.get('api/FileUploader/init',{
      params:{
        accomp_name:accomp_name
      },
      headers:{
        'Authorization':'Bearer' + sessionStorage.getItem('token')
      }
  }
  ).then(function(response){
      response=response.data;


  })
  .catch(function(error){console.log(errow);});

});

var upload_info=new Vue({
    el:'#container',
    data:{
        music_name:'',
        music_info:'',
        user_id:'',
        language:'',
        style:'',
        sentiment:'',
    },
    methods:{

    }
});