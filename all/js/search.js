//scripts needed to operate "search.html"

$('.breadcrumb-item').click(function(){
    $('.breadcrumb-item').css('font-size','16px');
    $(this).css('font-size','20px');
    update($(this).attr('name'));
})

function update(type){
    $('#presentation').empty();
    $('#presentation').hide();
    dataSet={
        'accompany':[
            {
                'id':1,
                'imgSrc':'images/test.jpg',
                'accompanyName':'Save you',
                'composerName':'Simple Plan',
                'number':2,
                'songs':[
                    {
                    'id':1,
                    'songName':'Save me',
                    'user':'Hard Plan',
                    'playNum':1024,
                    'likeNum':512,
                    },
                    {
                    'id':2,
                    'songName':'Save us',
                    'user':'Demanding Plan',
                    'playNum':2048,
                    'likeNum':1024,
                    }
                ]
            },
            {
                'id':2,
                'imgSrc':'images/test1.jpg',
                'accompanyName':'Fuck you',
                'composerName':'Simple Plan',
                'number':2,
                'songs':[
                    {
                    'id':3,
                    'songName':'Fuck me',
                    'user':'Hard Plan',
                    'playNum':1024,
                    'likeNum':512,
                    }
                ]
            }
        ],
        'cover':[{
            'id':1,
            'imgSrc': 'images/test.jpg',
            'songName': 'Save me',
            'user': 'Hard Plan',
            'playNum': 1024,
            'likeNum': 512,
          },
          {
            'id':2,
            'imgSrc': 'images/test1.jpg',
            'songName': 'Save us',
            'user': 'Demanding Plan',
            'playNum': 2048,
            'likeNum': 1024,
          },
          {
            'id':3,
            'imgSrc': 'images/test2.jpg',
            'songName': 'Fuck me',
            'user': 'Hard Plan',
            'playNum': 512,
            'likeNum': 256,
          }
        ],
        'user':[{
            'id':1,
            'imgSrc': 'images/test.jpg',
            'user': 'Hard Plan',
            'fanNum': 1024,
          },
          {
            'id':2,
            'imgSrc': 'images/test1.jpg',
            'user': 'Demanding Plan',
            'fanNum': 2048,
          },
          {
            'id':3,
            'imgSrc': 'images/test2.jpg',
            'user': 'Hard Plan',
            'fanNum': 512,
          }
        ]
    }
    if(type==='accompany'){
        if(dataSet['accompany']!==false)  
        $('#presentation').append('<div><h3 class="accompanyItem">封面</h3><h3 class="accompanyItem">伴奏名</h3><h3 class="accompanyItem">原作者</h3><h3 class="accompanyItem">相关作品数</h3>'
                +'<HR style="FILTER: progid:DXImageTransform.Microsoft.Shadow(color:#987cb9,direction:145,strength:15)" width="84%" color=#987cb9 SIZE=1></div>');
        for(data of dataSet['accompany']){
            $('#presentation').append('<div class="dropdown"><div><img src="'+data['imgSrc']+'" class="accompanyImage" />'
                +'<h4 class="accompanyInfo">'+data['accompanyName']+'</h4><h4 class="accompanyInfo">'+data['composerName']+'</h4>'
                +'<h4 class="lastAccompanyInfo">'+data['number']+'</h4><a href="music.html?music_id='+data['id']+'" style="display: none;margin-right: 10px;"><i class="fa fa-play"></i></a></div></div>');
            var dropdown=$('#presentation').children('.dropdown').last();
            if(data['songs']!==false)
                dropdown.append('<div class="dropdown-content"><h4 class="musicItem">翻唱作品</h4><h4 class="musicItem">创作者</h4>'
                    +'<h4 class="musicItem">播放量</h4><h4 class="musicItem">点赞量</h4></div>');
            for(dataSong of data['songs']){
                dropdown.append('<div class="dropdown-content"><h4 class="musicInfo">'+dataSong['songName']+'</h4><h4 class="musicInfo">'+dataSong['user']+'</h4>'
                    +'<h4 class="musicInfo">'+dataSong['playNum']+'</h4><h4 class="lastMusicInfo">'+dataSong['likeNum']+'</h4><a href="music.html?music_id='+dataSong['id']+'" style="display: none;margin-right: 10px;"><i class="fa fa-play"></i></a></div>')
            }
        }
        $('.dropdown').hover(function(){
            $(this).children('.dropdown-content').slideDown(300);
            $(this).find('.accompanyInfo').css('font-weight','bold');
            $(this).find('.lastAccompanyInfo').css('font-weight','bold');
            $(this).find('a').first().fadeIn(300);
        },function(){
            $(this).children('.dropdown-content').slideUp(300);
            $(this).find('.accompanyInfo').css('font-weight','normal');
            $(this).find('.lastAccompanyInfo').css('font-weight','normal');
            $(this).find('a').first().fadeOut(300);
        })
        $('.dropdown-content').hover(function(){
            $(this).find('a').show()
            $(this).children('.musicInfo').addClass('hoveron');
            $(this).children('.lastMusicInfo').addClass('hoveron');
        },function(){
            $(this).find('a').hide();
            $(this).children('.musicInfo').removeClass('hoveron');
            $(this).children('.lastMusicInfo').removeClass('hoveron');
        })
        $('#presentation').children().css('margin-left','50px');
    }
    else if(type==='cover'){
        if(dataSet['cover']!==false)  
        $('#presentation').append('<br><br><div><h3 class="musicItem">封面</h3><h3 class="musicItem">作品名</h3>'
                +'<h3 class="musicItem">创作者</h3><h3 class="musicItem">播放量</h3><h3 class="musicItem">点赞量</h3></div>'
                +'<HR style="FILTER: progid:DXImageTransform.Microsoft.Shadow(color:#987cb9,direction:145,strength:15)" width="100%" color=#987cb9 SIZE=1></div>');
        for(data of dataSet['cover']){
            $('#presentation').append('<div class="musicEntry"><img src="' + data['imgSrc'] + '" class="accompanyImage" />' +
            '<h4 class="accompanyInfo">' + data['songName'] + '</h4><h4 class="accompanyInfo">' + data['user'] + '</h4><h4 class="accompanyInfo">' + data['playNum'] + '</h4>' +
            '<h4 class="lastAccompanyInfo">' + data['likeNum'] + '</h4><a href="music.html?music_id='+data['id']+'" style="display: none;margin-right: 10px;"><i class="fa fa-play"></i></a></div>');
        }
        $('.musicItem').first().css('margin-left','26px');
        $('.musicEntry').hover(function() {
            $(this).find('a').show();
            $(this).children('.accompanyInfo').addClass('hoveron');
            $(this).children('.lastAccompanyInfo').addClass('hoveron');
          }, function() {
            $(this).find('a').hide();
            $(this).children('.accompanyInfo').removeClass('hoveron');
            $(this).children('.lastAccompanyInfo').removeClass('hoveron');
          });
    }
    else if(type==='user'){
        if(dataSet['user']!==false)  
        $('#presentation').append('<br><br><div><h3 class="musicItem">头像</h3><h3 class="musicItem">用户名</h3></h3><h3 class="musicItem">粉丝数</h3>'
                +'<HR style="FILTER: progid:DXImageTransform.Microsoft.Shadow(color:#987cb9,direction:145,strength:15)" width="73%" color=#987cb9 SIZE=1></div>');
        for(data of dataSet['user']){
            $('#presentation').append('<div class="musicEntry"><img src="' + data['imgSrc'] + '" class="search-icon" />' +
            '<h4 class="accompanyInfo">' + data['user']+'</h4><h4 class="lastAccompanyInfo">' + data['fanNum'] + 
            '</h4><a href="user_info.html?user_id='+data['id']+'" style="display: none;margin-right: 10px;"><i class="fa fa-user-circle"></i></a></div>');
        }
        $('.musicEntry').css('width','60%');
        $('.musicItem').first().css('margin-left','26px');
        $('#presentation').children().css('margin-left','210px');
        $('.musicEntry').hover(function() {
            $(this).find('a').show();
            $(this).children('.accompanyInfo').addClass('hoveron');
            $(this).children('.lastAccompanyInfo').addClass('hoveron');
          }, function() {
            $(this).find('a').hide();
            $(this).children('.accompanyInfo').removeClass('hoveron');
            $(this).children('.lastAccompanyInfo').removeClass('hoveron');
          });
    }
    $('#presentation').show('slow');
}
