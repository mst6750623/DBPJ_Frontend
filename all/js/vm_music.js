var music_page_data={

  user_id:'',
  is_liked:'',
  is_favorite:'',


  song_file:'',
  lyric_file:'',
  pic_file:'',
  music_name:'',
  music_id:'',
  uploader_id:'',
  uploader_name:'',
  accomp_name:'',
  accomp_musician:'',
  total_like:''

};

$(document).ready(function(){



  var paras = location.search;
  var result = paras.match(/[^\?&]*=[^&]*/g);
  paras = {};					//让paras变成没有内容的json对象
  for(var i in result){
    var temp = result[i].split('=');	//split()将一个字符串分解成一个数组,两次遍历result中的值分别为['itemId','xx']
    paras[temp[0]] = temp[1];
  }
  var music_id = paras.music_id;     //根据参数名"itemId"，获取参数值



axios.get('api/MusicPlayer/init',{
  params:{
    music_id:music_id
  },
  headers:{
            'Authorization':'Bearer' + sessionStorage.getItem('token')
        }
}
).then(function(response){
response=response.data;
ajaxGetHTML(response.lyric_file);

music_info.user_id=response.user_id;
music_info.is_liked=response.is_liked;
music_info.is_favorite=response.is_favorite;


music_info.music_name=response.music_name;
music_info.uploader_name=response.uploader_name;
music_info.accomp_musician=response.accomp_musician;
music_info.total_like=response.total_like;
music_info.song_file=response.song_file;
music_info.pic_file=response.pic_file;
music_info.music_id=response.music_id;
music_info.uploader_id=response.uploader_id;
music_info.accomp_name=response.accomp_name;


$("#uploader_name").click(function () {
    window.location.href="user_info.html?user_id="+response.music_id;//！！！！！data需添加，此处get上传者的id
});

$("#btn_submit").click(function () {
    window.location.href="fileupload.html?accomp_id="+response.accomp_id+"&accomp_name="+accomp_name;//！！！！！data需添加，此处get伴奏id
});












})
.catch(function(error){console.log(error);});


});


var music_info=new Vue({
  el:'#music_info',
  data:{
    user_id:'123',
    is_liked:false,
    is_favorite:false,

    music_name:'戒烟',
    uploader_name:'李荣浩的爸爸',
    accomp_musician:'李荣浩',
    total_like:'1223',
    song_file:'music/李荣浩 - 戒烟.mp3',
    pic_file:'images/smoke.jpg',
    music_id:'',
    uploader_id:'',
    accomp_name:''
  },
  methods:{
  like:function(){

    if(this.is_liked){
    alert_like_msg('你已经赞过啦！');

  }
    else {
      alert_like_msg('点赞成功！');

      this.is_liked=true;this.total_like++;
      axios.get('api/MusicPlayer/like',{
        params:{
          music_id:this.music_id
        },
        headers:{
                  'Authorization':'Bearer' + sessionStorage.getItem('token')
              }
      });
    }
  },

  favorite:function(){
    axios.get('api/MusicPlayer/favorite',{
      params:{
        music_id:this.music_id
      },
      headers:{
                'Authorization':'Bearer' + sessionStorage.getItem('token')
            }
    });
    if (!this.is_favorite) {
        this.is_favorite=true;
        alert_favorite_msg('收藏成功！');
    }
    else{
      this.is_favorite=false;
      alert_favorite_msg('取消收藏');
    }
  },
  report:function(){
     var report=document.getElementById('report_area');
     axios.get('api/MusicPlayer/favorite',{
       params:{
         music_id:this.music_id,
         uploader_name:this.uploader_name,
         details:report.value
       },
       headers:{
                 'Authorization':'Bearer' + sessionStorage.getItem('token')
             }
     });
  }
}


});


function ajaxGetHTML(webURL) {
    var url = webURL;
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            var s = xmlhttp.responseText;
            $("#lyr_content").text(s);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function alert_like_msg(msg){
  var like_msg=$("<div></div>").text(msg);

  like_msg.addClass('like_alert');
  $('#method').prepend(like_msg);

  like_msg.addClass('like_alert');
  $('#method').prepend(like_msg);
  like_msg.css({left:'740px'});
  like_msg.animate({
    top:'95px',
    opacity:1
  });
  like_msg.animate({
    top:'90px',
    opacity:0
  });
  setTimeout(function(){like_msg.remove();},600);
}


function alert_favorite_msg(msg){
  var like_msg=$("<div></div>").text(msg);

  like_msg.addClass('like_alert');
  $('#method').prepend(like_msg);

  like_msg.addClass('like_alert');
  $('#method').prepend(like_msg);
  like_msg.css({left:'875px'});
  like_msg.animate({
    top:'95px',
    opacity:1
  });
  like_msg.animate({
    top:'90px',
    opacity:0
  });
  setTimeout(function(){like_msg.remove();},600);
}
