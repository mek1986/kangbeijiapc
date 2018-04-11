$(function(){	
	//获取要定位元素距离浏览器顶部的距离
	var navH = $(".ban_list_ul").offset().top;	
	//滚动条事件
	$(window).scroll(function(){
	    
		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if(scroH>navH){
			$(".ban_list_ul").css({"position":"fixed","top":"98px"});
		}else if(scroH<navH){
			$(".ban_list_ul").css({"position":"static"});
		}
		/*console.log(scroH==navH);*/
	})
})
/*
$(function(){
	$(".xmjs_ts").click(function(){
	$(".xmjs_ts").css({"background":"#ee1275"});
	$(".xmjs_ts a").css({"color":"#fff"});
		});
})*/

document.writeln("<style>.ban_list_ul li.xm{background:#ee1275;color:#fff;}");
document.writeln(".ban_list_top ul li.xm{background:#ee1275;color:#fff;}");
document.writeln(".ban_list_top ul li.xm a{color:#fff;}");
document.writeln(".ban_list_ul li.xm a{color:#fff;}</style>");
$(function(){
		$(".ban_list_ul li").click(function(){
			$('.ban_list_ul li').removeClass("xm");
			$(this).addClass("xm");
			});
		$(".ban_list_top ul li").click(function(){
			$('.ban_list_top li').removeClass("xm");
			$(this).addClass("xm");
			});
});
$(document).ready(function(){
	
$(".xgwz").click(function(){
$("#num1").show();
$("#num2").hide();

});
$(".xmxx").click(function(){
$("#num2").show();
$("#num1").hide();

});
});