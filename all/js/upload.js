$(document).ready(function () {
    var uuz = document.getElementById('input-file-to-destroy');  
    
    $("#input-file-to-destroy").bind("input propertychange",function(e){
        var songname=$("#input-file-to-destroy").val().split("\\");
        $("#song_name").val(songname[songname.length-1]);
        /*var upfile = e.dataTransfer.files[0];
        if (upfile.type.substring(0,5) != "audio") {
             alert("您上传的不是音乐！");
             return false;
         } */
         
    })
     uuz.ondrop = function(e){  
        var upfile = e.dataTransfer.files[0];
       if (upfile.type.substring(0,5) != "audio") {
            alert("您上传的不是音乐！");
            return false;
        }
     } 
     
     /*$("#lan li").click(function () {
        this.firstChild
     });
     for (var i=)
     alert($("[name='lan']:eq(0)").prop("checked"));*/
     
});

function radio_change(num,radio_name) {
    for(var i=0;i<num;i++)
    {
        if($("[name=radio_name]:eq(i)").prop("checked"))
        return;
    }
}
