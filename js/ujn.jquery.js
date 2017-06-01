function submit(){
            document.fileForm.submit();
        }

$(document).ready(function () {          //当加载时
    var width=$(window).width();
    if(width<768){
            $("ul.contral").removeAttr("style");
            //如果小于768px自行计算.carousel .item img高度
            var imgHeight = 450 * width / 1100;
            $(".carousel .item img").css("height", imgHeight);
            var divheight=$("#usural a img").css("height");
            $("#spec a img").css("height",divheight);
            $("#me").css("display","none");
    }
    $("#toTop").click(function(event) {
        $("html,body").animate({
            scrollTop:"0px"
        },
            666
        )
    });
    if(width>992){
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });
    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    });
    }
    $(".search-win").mouseenter(function(){
       $(".search-win").animate({left:'0px'});
    });
    $(".search-win").mouseleave(function(){
       $(".search-win").animate({left:'-150px'});
    });
    $(".nav a").click(function(event){
        window.open($(this).attr("href"),"_self");
    });
});

$(window).resize(function () {          //当浏览器大小变化时
    var width=$(window).width();
    if(width<768){
            $("ul.contral").removeAttr("style");
            //如果小于768px自行计算.carousel .item img高度
            var imgHeight = 450 * width / 1100;
            $(".carousel .item img").css("height", imgHeight);
            var divheight=$("#usural a img").css("height");
            $("#spec a img").css("height",divheight);
            $("#me").css("display","none");
    }
    else{
        $(".carousel .item img").removeAttr("style");        
        $("ul.contral").css("display","none");
        $("#spec a img").removeAttr("style");
        $("#me").removeAttr("style");
    }
    if(width>992){
        $(".dropdown").mouseover(function () {
            $(this).addClass("open");
        });
        $(".dropdown").mouseleave(function(){
            $(this).removeClass("open");
        });
        }
});