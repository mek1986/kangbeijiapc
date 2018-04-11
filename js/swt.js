var hours="";
mydate=new Date();
hours= mydate.getHours(); 
if(hours>24 || hours<8){
	//window.location.href="/guahao/?backurl="+window.location.href; 	
}

document.writeln("<script language=\"javascript\" src=\"http://lvy.zoosnet.net/JS/LsJS.aspx?siteid=LVY72240144&float=1&lng=cn\"></script>");

//css 样式
document.writeln("<style type=\"text/css\">");
document.writeln("#LRdiv0{ display:none !important;}");
document.writeln("#LRdiv1{ display:none !important;}");
document.writeln("#LRfloater1{ display:none !important;}");
document.writeln("</style>");
document.write('<link rel="stylesheet" type="text/css" href="style/swt2.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="style/swt.css"/>');


/*中间弹窗*/
document.writeln("<div class=\"swt_cen\">");
document.writeln("	<a class=\"swt_close_n\" title=\"关闭\"></a>");
document.writeln("	<div class=\"swt_banner swt_ie\">");
document.writeln("		<div class=\"slider_common\">");
document.writeln("        	<div onclick='openZoosUrl();LR_HideInvite();return false;' href='javascript:void(0)'><img src=\"images/haibo_swt_02.jpg\"/></div>");
document.writeln("        	<div onclick='openZoosUrl();LR_HideInvite();return false;' href='javascript:void(0)'><img src=\"images/haibo_swt_11.jpg\"/></div>");
document.writeln("        	<div onclick='openZoosUrl();LR_HideInvite();return false;' href='javascript:void(0)'><img src=\"images/haibo_swt_00.jpg\"/></div>");
document.writeln("		</div>");
document.writeln("  </div>");
document.writeln("	<div class=\"swt_anniu\"><dl><dt><input id='telInput' value=\"请输入手机号码\" onfocus=\"if(this.value=='请输入手机号码'){this.value='';}\" onblur=\"if(this.value==''){this.value='请输入手机号码';}\" type='text'/><input id='callBtnn' value='免费电话' type='button'/></dt><dd><a onclick='openZoosUrl();LR_HideInvite();return false;' href='javascript:void(0)'>在线咨询</a></dd></dl></div>");
document.writeln("</div>");
document.write('<script type="text/javascript"  data-lxb-uid="1973460" data-lxb-gid="169938"  src="http://lxbjs.baidu.com/api/asset/api.js?t=' + new Date().getTime() + '" charset="utf-8"></scr' + 'ipt>' );


document.writeln('<div class="public_footer">');
document.writeln('<div class="public_f_box">');
	document.writeln('<dl class="d1">');
    	document.writeln('<dt>活动优惠</dt>');
        document.writeln('<dd><a href="/kbj/qmay.html">点击进入</a></dd>');
    document.writeln('</dl>');
    document.writeln('<dl class="d2">');
    	document.writeln('<dt>在线咨询</dt>');
        document.writeln('<dd><a onclick="openZoosUrl();LR_HideInvite();return false;" href="javascript:void(0)">点击进入</a></dd>');
    document.writeln('</dl>');
    document.writeln('<div class="public_f_zx"><span>美牙热线：</span>400-025-0505</div>');
    document.writeln('<div class="public_f_huidian">');
    	document.writeln("<input id='telInputnnn' value=\"请输入手机号码\" onfocus=\"if(this.value=='请输入手机号码'){this.value='';}\" onblur=\"if(this.value==''){this.value='请输入手机号码';}\" type='text'>");
        document.writeln('<input id="callBtnnn" value="免费电话" type="button">');
    document.writeln('</div>');
document.writeln('</div>');	
document.writeln('</div>');



var k=1;
setTimeout("$('.swt_cen').show().animate({'top':'50%','opacity':'1'})",3000);
$(function(){

	$('#callBtn').click(function(){
		lxb.call(document.getElementById("telInput"));
	})
	
	$('#callBtnn').click(function(){
		lxb.call(document.getElementById("telInput"));
	})
	
	$('#callBtnnn').click(function(){
		lxb.call(document.getElementById("telInputnnn"));
	})
	
	$(".swt_close_n").click(function(){
		$('.swt_cen').animate({'top':'45%','opacity':'0'}).hide()
		k=k+1;
		if(k>1){
			setTimeout("$('.swt_cen').show().animate({'top':'50%','opacity':'1'})",15000)
		}
	});
	
	$(".slider_common").slideshow({
		width: 560,
		height: 288,
		speed: 50,
		timeout: 15000,
		delay:3000,
		transition:'Rain'
	});	
});

document.write("<div style='position:fixed; top:50%; margin-top:-250px; left:0; z-index:100;'><a onclick='openZoosUrl();LR_HideInvite();return false;' href='javascript:void(0)'><img src='images/swtleft.png'></a></div>");

document.write("<script type='text/javascript' src='js/jquery_swt.js'></script>");

document.write('<script>var _hmt = _hmt || [];(function(){var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?649bce3f83b1148da79a0750a5c21b51";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>');
document.write('<script>var _hmt = _hmt || [];(function(){var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?52fb8931cb74679a406e49250acbe497";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>');


document.writeln("<div style='display:none;'><script type=\"text/javascript\">var cnzz_protocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");document.write(unescape(\"%3Cspan id='cnzz_stat_icon_1260585359'%3E%3C/span%3E%3Cscript src='\" + cnzz_protocol + \"s11.cnzz.com/stat.php%3Fid%3D1260585359%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E\"));</script></div>");