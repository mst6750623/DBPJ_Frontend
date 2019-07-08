//scripts needed to operate "search.html"

$(function(){
            
})
$('.breadcrumb-item').click(function(){
    $('.breadcrumb-item').css('font-size','16px');
    $(this).css('font-size','20px');
    update($(this).attr('name'));
})
function update(type){
    $('#presentation').empty();
    dataSet={
        'accompany':[
            {
                'imgSrc':'images/test.jpg',
                'accompanyName':'Save you',
                'composerName':'Simple Plan',
                'number':2,
                'songs':[
                    {
                    'songName':'Save me',
                    'user':'Hard Plan',
                    'playNum':1024,
                    'likeNum':512,
                    },
                    {
                    'songName':'Save us',
                    'user':'Demanding Plan',
                    'playNum':2048,
                    'likeNum':1024,
                    }
                ]
            },
            {
                'imgSrc':'images/test1.jpg',
                'accompanyName':'Fuck you',
                'composerName':'Simple Plan',
                'number':2,
                'songs':[
                    {
                    'songName':'Fuck me',
                    'user':'Hard Plan',
                    'playNum':1024,
                    'likeNum':512,
                    }
                ]
            }
        ],
        'cover':[

        ],
        'user':[

        ]
    }
    if(type==='accompany'){
        if(dataSet['accompany']!==false)  
        $('#presentation').append('<div><h3 class="accompanyItem">封面</h3><h3 class="accompanyItem">伴奏名</h3><h3 class="accompanyItem">作者</h3><h3 class="accompanyItem">相关作品数</h3>'
                +'<HR style="FILTER: progid:DXImageTransform.Microsoft.Shadow(color:#987cb9,direction:145,strength:15)" width="80%" color=#987cb9 SIZE=1></div>');
        for(data of dataSet['accompany']){
            $('#presentation').append('<div class="dropdown"><div><img src="'+data['imgSrc']+'" class="accompanyImage" />'
                +'<h4 class="accompanyInfo">'+data['accompanyName']+'</h4><h4 class="accompanyInfo">'+data['composerName']+'</h4>'
                +'<h4 class="lastAccompanyInfo">'+data['number']+'</h4><a href="#" style="display: none;margin-right: 10px;"><i class="fa fa-play"></i></a></div></div>');
            var dropdown=$('#presentation').children('.dropdown').last();
            if(data['songs']!==false)
                dropdown.append('<div class="dropdown-content"><h4 class="musicItem">翻唱作品</h4><h4 class="musicItem">用户名</h4>'
                    +'<h4 class="musicItem">播放量</h4><h4 class="musicItem">点赞量</h4></div>');
            for(dataSong of data['songs']){
                dropdown.append('<div class="dropdown-content"><h4 class="musicInfo">'+dataSong['songName']+'</h4><h4 class="musicInfo">'+dataSong['user']+'</h4>'
                    +'<h4 class="musicInfo">'+dataSong['playNum']+'</h4><h4 class="lastMusicInfo">'+dataSong['likeNum']+'</h4><a href="#" style="display: none;margin-right: 10px;"><i class="fa fa-play"></i></a></div>')
            }
        }
        $('#presentation').show('slow');
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
            $(this).find('.musicInfo').css('color','#51b180');
            $(this).find('.musicInfo').css('font-weight','bold');
            $(this).find('.musicInfo').css('font-size','22px');
            $(this).find('.lastMusicInfo').css('color','#51b180');
            $(this).find('.lastMusicInfo').css('font-weight','bold');
            $(this).find('.lastMusicInfo').css('font-size','22px');
        },function(){
            $(this).find('a').hide();
            $(this).find('.musicInfo').css('color','#000000');
            $(this).find('.musicInfo').css('font-weight','normal');
            $(this).find('.musicInfo').css('font-size','18px');
            $(this).find('.lastMusicInfo').css('color','#000000');
            $(this).find('.lastMusicInfo').css('font-weight','normal');
            $(this).find('.lastMusicInfo').css('font-size','18px');
        })
    }
    else if(type==='cover'){

    }
    else if(type==='user'){

    }
}