(function(a) {
    a.fn.DB_tabMotionBanner = function(b) {
        var c = {
            key: "",
            autoRollingTime: 3000,
            bgSpeed: 1000,
            motion: ""
        };
        a.extend(c, b);
        return this.each(function() {
            var h = a(this);
            var k = h.find(".DB_imgSet");
            var r = h.find(".DB_imgSet li");
            var i = h.find(".DB_menuSet");
            var m = h.find(".DB_menuSet li");
            var e = h.find(".DB_bgSet li");
            var q = h.find(".DB_next");
            var g = h.find(".DB_prev");
            var f = r.length;
            var p = 0;
            var j = 0;
            s();
            function s() {
                
                l();
                d();
                t();
                o()
            }
            function l() {
                k.css({
                    position: "relative"
                });
                r.css({
                    position: "absolute"
                });
                for (var y = 0; y < f; y++) {
                    if (y == p) {
                        r.eq(y).show()
                    } else {
                        r.eq(y).hide()
                    }
                }
                for (var y = 0; y < r.length; y++) {
                    var x = r.eq(y).find("img");
                    for (var w = 0; w < x.length; w++) {
                        var A = x.eq(w);
                        var v = c.motion[A.attr("class")];
                        if (v != null) {
                            var z = Number(A.css("left").split("px")[0]);
                            var B = Number(A.css("top").split("px")[0]);
                            A.data({
                                x2: z,
                                y2: B,
                                x1: z + v.left,
                                y1: B + v.top,
                                opacity: v.opacity,
                                speed: v.speed,
                                delay: v.delay == null ? 0 : v.delay
                            })
                        }
                    }
                }
            }
            function d() {
                h.bind("mouseenter",
                function() {
                    clearInterval(j);
                    q.show();
                    g.show()
                });
                h.bind("mouseleave",
                function() {
                    t();
                    q.hide();
                    g.hide()
                });
                m.bind("click",
                function() {
                    if (a(this).index() != p) {
                        p = a(this).index();
                        o()
                    }
                });
                m.bind("mouseenter",
                function() {
                    n(a(this).find("img"), "src", "_off", "_on")
                });
                m.bind("mouseleave",
                function() {
                    if (p != a(this).index()) {
                        n(a(this).find("img"), "src", "_on", "_off")
                    }
                });
                q.bind("click",
                function() {
                    u()
                });
                g.bind("click",
                function() {
                    p--;
                    if (p == -1) {
                        p = f - 1
                    }
                    o()
                })
            }
            function u() {
                p = ++p % f;
                o()
            }
            function t() {
                j = setInterval(u, c.autoRollingTime)
            }
            function o() {
                for (var z = 0; z < r.length; z++) {
                    var A = r.eq(z);
                    var y = e.eq(z);
                    if (p == z) {
                        A.show();
                        var x = A.find("img");
                        for (var w = 0; w < x.length; w++) {
                            var A = x.eq(w);
                            var v = c.motion[A.attr("class")];
                            if (v != null) {
                                if (A.attr("src").indexOf(".png") > 0 && a.support.msie && a.support.version < 9) {
                                    A.css({
                                        left: A.data("x1"),
                                        top: A.data("y1"),
                                        opacity: 1,
                                        display: "none"
                                    })
                                } else {
                                    A.css({
                                        left: A.data("x1"),
                                        top: A.data("y1"),
                                        opacity: A.data("opacity")
                                    })
                                }
                                A.stop().delay(A.data("delay")).queue(function() {
                                    a(this).css("display", "block");
                                    a(this).dequeue()
                                }).animate({
                                    left: A.data("x2"),
                                    top: A.data("y2"),
                                    opacity: 1
                                },
                                A.data("speed"))
                            }
                        }
                        n(m.eq(z).find("img"), "src", "_off", "_on");
                        m.eq(z).addClass("select");
                        y.stop(true, true).fadeIn(c.bgSpeed)
                    } else {
                        A.hide();
                        n(m.eq(z).find("img"), "src", "_on", "_off");
                        m.eq(z).removeClass("select");
                        y.stop(true, true).fadeOut(c.bgSpeed)
                    }
                }
            }
            function n(w, z, v, x) {
                var y = w.attr(z);
                if (String(y).search(v) != -1) {
                    w.attr(z, y.replace(v, x))
                }
            }
        })
    }
})(jQuery);



//=================切换代码====================

// JavaScript Document
function linkclick(obj,id,obj2){

	for (var i=1; i<15; i++) {

		objLink = document.getElementById(obj+i.toString());

		objTable = document.getElementById(obj+"_"+i.toString());

		if(obj2){

		objTable2 = document.getElementById(obj2+"_"+i.toString());

		}

		if(objLink && objTable){

			if (id==i){

				objLink.className=obj+"_click";

				objTable.style.display = "";

				if(obj2){

				objTable2.style.display = "";

				}

			}

			else{

				objLink.className=obj+"_normal";

				objTable.style.display = "none";

				if(obj2){

				objTable2.style.display = "none";

				}

			}

		}

		else break;

	}

}

function linkclick2(obj,id){

	for (var i=1; i<11; i++) {

		objTable = document.getElementById(obj+"_"+i.toString());

		if(objTable){

			if (id==i){

				objTable.style.display = "";

			}

			else{

				objTable.style.display = "none";

			}

		}

		else break;

	}

}



function killErrors() {

return true;

}





//=================按钮效果====================
// JavaScript Document
//function MM_swapImgRestore() { //v3.0
//  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
//}
//function MM_preloadImages() { //v3.0
//  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
//    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
//    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
//}
//
//function MM_findObj(n, d) { //v4.01
//  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
//    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
//  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
//  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
//  if(!x && d.getElementById) x=d.getElementById(n); return x;
//}
//
//function MM_swapImage() { //v3.0
//  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
//   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
//}

//=================专家代码====================
$(function(){
	var sWidth = $("#slider_name").width();
	var len = $("#slider_name .silder_panel").length;
	var index = 0;
	var picTimer;
	
	var btn = "<a class='prev'>Prev</a><a class='next'>Next</a>";
	$("#slider_name").append(btn);

	$("#zj_l .silder_nav li").css({"opacity":"1","filter":"alpha(opacity=100)"}).mouseenter(function() {																		
		index = $("#zj_l .silder_nav li").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

	$("#slider_name .prev,#slider_name .next").css({"opacity":"1","filter":"alpha(opacity=100)"}).hover(function(){
		$(this).stop(true,false).animate({"opacity":"1","filter":"alpha(opacity=100)"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"1","filter":"alpha(opacity=100)"},300);
	});


	// Prev
	$("#slider_name .prev").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	// Next
	$("#slider_name .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	// 
	$("#slider_name .silder_con").css("width",sWidth * (len));
	
	// mouse 
	$("#slider_name").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},3000); 
	}).trigger("mouseleave");
	
	// showPics
	function showPics(index) {
		var nowLeft = -index*sWidth; 
		$("#slider_name .silder_con").stop(true,false).animate({"left":nowLeft},300);
		$("#zj_l .silder_nav li").removeClass("current").eq(index).addClass("current"); 
		$("#slider_name .silder_nav li").stop(true,false).animate().eq(index).stop(true,false).animate();
	}
});

//=================悬浮====================
$(function(){
	$(".alb li a").hover(function(){
		$(this).find('.toll_info9').stop().animate({"top":"-164px"}, 200); 	
	},function(){
		$(this).find('.toll_info9').stop().animate({"top":"0"}, 200); 
	});
	
});


//=================下拉====================
$(function() {
	/*banner切换宽度*/

	
	/*通用导航下拉*/
	$(".nav_fldh").hover(function(){
		$(".jx_dh").stop().animate({"height":"430px"},500)
		},
		function(){
			$(".jx_dh").stop().animate({'height':'0px'},500)
			})
			

$(".jx_dh").hover(function(){
		$(".jx_dh").stop().animate({"height":"430px"},500)
		},
		function(){
			$(".jx_dh").stop().animate({'height':'0px'},500)
			})
			
	

})


 $(function() {
			
                $('#accordion > li').hover(
                    function () {
                        var $this = $(this);
							
                        $(this).addClass('active').stop().animate({'width':'477px'},1000).siblings().removeClass('active').stop(true).animate({width:"241px"},500);
				
                        
                    }
                );
            });

/**通用焦点大小图切换构建函数**/
/*
 * 
 * 需要自行设定类/feature_list/feature_tabs/feature_tab/feature_out
 * */
var FeatureList = function(fobj,options) {
  function feature_slide(nr) {
    if (typeof nr == "undefined") {
      nr = visible_idx + 1;
      nr = nr >= total_items ? 0 : nr;
    }

    tabs.removeClass(onclass).addClass(offclass).filter(":eq(" + nr + ")").removeClass(offclass).addClass(onclass);
    output.stop(true, true).filter(":visible").hide();
	    output.filter(":eq(" + nr + ")").fadeIn("slow",function() {
	    visible_idx = nr; 
    });
  }

  fobj = (typeof(fobj) == 'string')?$(fobj):fobj;
  fobj = $(fobj).eq(0);
  if(!fobj || fobj.size() == 0) return;

  //轮询间隔，默认2S
  var options      = options || {};
  var visible_idx  = options.startidx || 0;
  var onclass = options.onclass || "current";
  var offclass = options.offclass || "";
  var speed = options.speed || 10000;
  options.pause_on_act = options.pause_on_act || "click";
  options.interval  = options.interval  || 50000;

  var tabs = fobj.find(".f_tabs .f_tab");
  var output = fobj.find(".f_out");
  var total_items = tabs.length;
 
  //初始设定
  output.hide().eq( visible_idx ).fadeIn("slow");
  tabs.eq( visible_idx ).addClass(onclass);

  if (options.interval > 0) {
    var timer = setInterval(function () {
      feature_slide();
    }, options.interval);
    output.mouseenter(function() {clearInterval( timer );}).mouseleave(function() {clearInterval( timer );timer = setInterval(function () {feature_slide();}, options.interval);});
    if (options.pause_on_act == "mouseover") {
        tabs.mouseenter(function() {
        clearInterval( timer );
        
        var idx = tabs.index($(this));
        feature_slide(idx);
      }).mouseleave(function() {
        clearInterval( timer );
        timer = setInterval(function () {
          feature_slide();
        }, options.interval);
      });
    } else {
        tabs.click(function() {
        clearInterval( timer );
        var idx = tabs.index($(this));
        feature_slide(idx);
      });
    }
  }
}

function showImg(){ 
document.getElementById("wxImg").style.display='block'; 
} 
function hideImg(){ 
document.getElementById("wxImg").style.display='none'; 
}

$(function(){

    $('.bobo_top_piaochuang a').animate({'height':'130px'},1000);

})