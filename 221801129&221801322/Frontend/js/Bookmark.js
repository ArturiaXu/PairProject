$(function () {
    $("#mark").css("display","block");
    $("#status").text(localStorage.getItem("username"));
    $("#status").css("pointer-events","none");
    $("#status").css("cursor","none");
    $("#searchBox input").removeAttr("disabled");

    var urlStr = "/Bookmark";
    var uid = {
        uid:localStorage.getItem("uid")
    };
    PostHandle(urlStr, JSON.stringify(uid), function(data){
        //收藏夹结果接收与展示
    });
    
    $(".markedSvg").click(function(){
        alert("取消收藏！");
        $(this).attr("src","../img/Bookmark/mark.svg");
        $(this).attr("title","未收藏");
        $(this).css("cursor","default");
        $(this).css("pointer-events","none");
    });
})