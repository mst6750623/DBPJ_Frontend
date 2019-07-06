var t1=null;
var mousex;//鼠标的x坐标
var medisArray = new Array();   // 定义一个新的数组
$(document).ready(function() {
    var music=document.getElementById('music'); 
    
    $("#btn_play").click(function(){
        music.currentTime=0;
        play();
    });
    $("#btn_good").click(function(){
        $("#btn_good i").css("color","red");
    });
    $("#btn_collect").click(function(){
        $("#btn_collect i").css("color","red");
    });
    $("#btn_download").click(function(){

    });
    $("#btn_submit").click(function(){

    });

    $("#bar_report").hover (function() {

    });
    //下方音乐播放栏按钮控制
    $("#bar_play").on ('click',function() {   
           
        if($(this).hasClass("fa-play-circle") && music.paused)
            {
               play();
            }
        else if($(this).hasClass("fa-pause-circle") && !music.paused)
            {
                pause();
            }
            
    });

    function play(){
        $("#bar_play").removeClass("fa-play-circle").addClass("fa-pause-circle");
        music.play();
    }
    function pause() {
        $("#bar_play").removeClass("fa-pause-circle").addClass("fa-play-circle");
        music.pause();
        
    }
    //底端控制条的点击控制音乐进度
    $("#bar_bg").click(function (e) {
        mousex=e.pageX-$(this).offset().left;
        var place = mousex/parseInt($("#bar_bg").css('width'))*music.duration;
        var place_i=parseInt(place); 
        music.currentTime=place_i;
    });
    $("#bar").click(function (e) {
        mousex=e.pageX-$(this).offset().left;
        var place = mousex/parseInt($("#bar_bg").css('width'))*music.duration;
        var place_i=parseInt(place); 
        music.currentTime=place_i;
    });
    
    createLrc();

    music.ontimeupdate = function () {
        process();
        for (var i=0;i<medisArray.length;i++)
        {
            if(parseFloat(medisArray[medisArray.length-1].t) <= music.currentTime.toFixed(3))
            {
                lineHeight(i);
                break;
            }
            if(parseFloat(medisArray[i].t) <= music.currentTime.toFixed(3) &&
             music.currentTime.toFixed(3) <= parseFloat(medisArray[i+ 1].t))
             {
                 lineHeight(i);
             }

        }
    };
});

//进度条主函数
function process(){ 
    var total_width=parseInt($("#bar_bg").css('width'));
    var widthchange=(music.currentTime/music.duration)*total_width+"px";//将Process_Now转换为整数并给它加一个px单位
    $("#bar").css('width',widthchange);
    //document.getElementById("processnow").style.width=widthchange;//改变进度条的width
    var current_Time = timeFormat(music.currentTime);//获取音频的已经播放的时间并将它转换成mm:ss的格式
    var time_All = timeFormat(music.duration);//获取音频的总时间并将它转换成mm:ss的格式
    var time=current_Time+" / "+time_All;
    $("#time").html(time);//将时间显示为“已播放时间 | 总时长”的形式
}
//将单位为秒的的时间转换成mm:ss的形式
function timeFormat(number) {
    var minute = parseInt(number / 60);
    var second = parseInt(number % 60);
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second : "0" + second;
    return minute + ":" + second;
} 


function createLrc () {
  var medis =$("#lyr_content").val();
  var medises = medis.split("\n");    // 用换行符拆分获取到的歌词

  $.each(medises, function (i, item) {    // 遍历medises，并且将时间和文字拆分开，并push进自己定义的数组，形成一个对象数组
    var t = item.substring(item.indexOf("[") + 1, item.indexOf("]"));
    medisArray.push({

      t: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
      c: item.substring(item.indexOf("]") + 1, item.length)
    });
  });
  var ul = $("#text");
  // 遍历medisArray，并且生成li标签，将数组内的文字放入li标签
  $.each(medisArray, function (i, item) {
    var li = $("<li style='list-style: none;'>");
    li.html(item.c);
    ul.append(li);
  });
}

   
var fraction = 0.5;
var topNum = 0;
function lineHeight(lineno){
  var ul = $("#text");
  var $ul = document.getElementById('text');
  ul.find("li").each(function () {
      if(this.className="lineheight")
        this.classList.remove("lineheight");
  });
  var nowline = ul.find("li").get(topNum + lineno);//令正在唱的歌词高亮
  $(nowline).attr("class","lineheight");

    // 实现文字滚动
  var offset=$(nowline).offset().top-($("#lyrics").offset().top+200);//计算当前歌词与框中线的距离
  var new_margin=parseInt($("#text").css("margin-top"))-offset + "px";//计算新位置
  $("#text").animate({marginTop:new_margin},"fast"); 

}

