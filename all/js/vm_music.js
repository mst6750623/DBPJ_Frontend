var music_page_data={
user:{
  id:'',
  is_liked:'',
  is_favorite:''
},
music:{
  song_file:'',
  lyric_file:'',
  pic_file:'',
  name:'',
  id:'',
  uploader_id:'',
  uploader_name:'',
  accomp_name:'',
  accomp_musician:'',
  total_likes:''
}
};

window.onload=function(){
axios.get('api/MusicPlayer/init',{
  params:{
    user_id:123456,
    music_id:100001
  }
}
).then(function(response){

ajaxGetHTML(response.music.lyric_file);

music_info.music_name=response.music.name;
music_info.uploader_name=response.music.uploader_name;
music_info.accomp_musician=response.music.accomp_musician;
music_info.total_likes=response.music.total_likes;
music_info.is_liked=response.user.is_liked;
music_info.is_favorite=response.user.is_favorite;
music_info.song_file=response.music.song_file;
music_info.pic_file=response.music.pic_file;


})
.catch(function(error){console.log(error);});


};


var music_info=new Vue({
  el:'#music_info',
  data:{
    music_name:'戒烟',
    uploader_name:'李荣浩的爸爸',
    accomp_musician:'李荣浩',
    total_likes:'1223',
    is_liked:false,
    is_favorite:false,
    song_file:'music/李荣浩 - 戒烟.mp3',
    pic_file:'images/smoke.jpg'
  },
  methods:{
  like:function(){

    if(this.is_liked){
    alert_like_msg('你已经赞过啦！');

  }
    else {
      alert_like_msg('点赞成功！');

      this.is_liked=true;this.total_likes++;
      axios.get('api/MusicPlayer/like',{
        params:{
          user_id:123456,
          music_id:100001
        }
      });
    }
  },

  favorite:function(){
    axios.get('api/MusicPlayer/favorite',{
      params:{
        user_id:this.user_id,
        music_id:this.music_id
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
         user_id:this.user_id,
         music_id:this.music_id,
         uploader_name:this.uploader_name,
         details:report.value
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
  like_msg.css({left:'550px'});
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
  like_msg.css({left:'690px'});
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
