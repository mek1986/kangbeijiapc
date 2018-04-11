// JavaScript Document
$(function(){
	$('.bobo_top_piaochuang a').animate({'height':'130px'},1000);
	
	$('.p_right .pic a,.p_right .gy_hd_pic').attr('href','/kbj/ycyh.html'); //六大病种封面页中广告位
	
		
	var navH = $(".p_left").offset().top;
	$(window).scroll(function(){
		var scroH = $(this).scrollTop();
		if(scroH>=navH){
			$(".p_left").css({"position":"fixed","top":0});
		}else if(scroH<navH){
			$(".p_left").css({"position":"static"});
		}

		if($("#foot").offset().top - scroH < navH){
			$(".p_left").css({'top':'-300px'});
		}
	})
})




