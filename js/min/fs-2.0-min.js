function navigateto(e,t,n){var a=$(".context_map"),i=n,c=e,o=t,s=c*i,d=o*i,l=1600*i,f=900*i,h=s-200,_=d-270;a.animate({left:"-"+h,top:"-"+_,width:l,height:f},3e3,"easeInOutCubic",function(){$(".content_section.active .expanded.active .label_bar .checkbox").hasClass("checked")&&$(".content_section.active .expanded.active .labels.non_full_map").fadeIn(250)})}function attract_loop(e){if($(e).is(":last-of-type"))var t=$(".attract_item:first-of-type");else var t=$(e).next(".attract_item");var n=$(".attract_loop_map"),a=8,i=$(e).find(".x_cord").text(),c=$(e).find(".y_cord").text(),o=i*a,s=c*a,d=1600*a,l=900*a,f=o-200,h=s-455;n.animate({left:"-"+f,top:"-"+h,width:d,height:l},3e3,"easeInOutCubic",function(){setTimeout(function(){$(t).css("z-index",20).addClass("active"),$(e).css("z-index",100),$(t).show(),$(e).removeClass("active").fadeOut(1e3),$(".attract_loop").hasClass("active")&&attract_loop(t)},6e3)})}$(function(){$(".attract_loop").hasClass("active")&&(attract_loop($(".attract_item.active")),$(".context_nav").css("opacity",0)),$(".call_to").click(function(){$(".intro_screen").fadeIn(1e3),$(".intro_screen").addClass("active"),$(".attract_loop").removeClass("active"),$(".attract_loop").fadeOut(1e3),$(".attract_loop_map").fadeOut(1e3),$(".context_nav").animate({opacity:1},1e3)}),$(".info_nav").click(function(){var e=$(".container");if($(this).hasClass("active"));else if($(e).hasClass("stuff_moving"));else{var t=$(".content_section.active"),n=$(".navigation .context_nav.active"),a=$(t).find(".single_icon.active"),i=$(a).find("div").attr("class"),c=$(this),o=$(".intro_screen"),s=$(t).find(".expanded.active").find(".checkbox");$(t).find(".context_icon").trigger("click"),$(n).removeClass("active"),$(c).addClass("active"),$(o).addClass("active"),$(t).find(".beacons").fadeOut(500),$(t).find(".labels").fadeOut(500),$(o).fadeIn(500),$(t).removeClass("active").fadeOut(500,function(){$(".intro_screen .intro_content").animate({width:"31.25%",right:"0%"},1e3,function(){$(".intro_content h1").fadeIn(1e3),$(".intro_content p").fadeIn(1e3)})}),$(".intro_map").animate({width:1100,height:852,top:"48px",left:"0",opacity:1},3e3,"easeInOutCubic"),$(s).hasClass("checked")&&$(".checkbox").trigger("click")}}),$(".context_nav").click(function(){var e=$(".container");if($(".attract_loop").hasClass("active"));else if($(e).hasClass("stuff_moving"));else{var t=$(".content_section.active"),n=$(".navigation .context_nav.active"),a=$(t).find(".single_icon.active"),i=$(a).find("div").attr("class"),c=$(this),o=$(".navigation .context_nav").index(c),s=$(".content_section").eq(o),d=$(s).find(".expanded.active").find(".checkbox");if($(".intro_screen").hasClass("active"))$(".intro_screen").removeClass("active"),$(".info_nav").removeClass("active"),$(s).addClass("active"),$(c).addClass("active"),$(".intro_content h1").fadeOut(1e3),$(".intro_content p").fadeOut(1e3,function(){$(".intro_screen .intro_content").animate({width:"31.25%",right:"6.25%"},1e3,function(){$(s).fadeIn(1e3,function(){$(s).find(".beacons").fadeIn(1e3,function(){$(s).find(".object_icon").each(function(){var e=$(this).css("borderColor");$(this).animate({boxShadow:"0px 0px 15px 3px "+e},1e3,function(){$(this).animate({boxShadow:"none"},1e3)})})}),$(d).hasClass("checked")&&$(s).find(".expanded.active").find(".labels.non_full_map").fadeIn(250)}),$(".intro_screen").fadeOut(1e3)})}),$(".intro_content h1").fadeOut(1500),$(".intro_content p").fadeOut(1500),$(".intro_map").animate({width:3052.15625,height:2340,top:"-98%",left:"-75%",opacity:0},3e3,"easeInOutCubic");else if($(c).hasClass("active"));else if($(t).find(".context_icon").trigger("click"),$(n).removeClass("active"),$(c).addClass("active"),$(s).addClass("active"),$(t).find(".beacons").fadeOut(500),$(t).find(".labels").fadeOut(500),$(s).find(".beacons").hide(),$(t).removeClass("active").fadeOut(500,function(){$(s).fadeIn(500,function(){"context_icon"===i?$(s).find(".beacons").fadeIn(1e3,function(){$(s).find(".object_icon").each(function(){var e=$(this).css("borderColor");$(this).animate({boxShadow:"0px 0px 15px 3px "+e},1e3,function(){$(this).animate({boxShadow:"none"},1e3)}),$(d).hasClass("checked")&&$(s).find(".expanded.active").find(".labels.non_full_map").fadeIn(250)})}):setTimeout(function(){$(s).find(".beacons").fadeIn(1e3),$(d).hasClass("checked")&&$(s).find(".expanded.active").find(".labels.non_full_map").fadeIn(250),$(s).find(".object_icon").each(function(){var e=$(this).css("borderColor");$(this).animate({boxShadow:"0px 0px 15px 3px "+e},1e3,function(){$(this).animate({boxShadow:"none"},1e3)})})},2e3)})}),"context_icon"===i);else{var l=$(".context_map");l.animate({left:0,top:0,width:1600,height:900},3e3,"easeInOutCubic",function(){})}}}),$(".context_map.big").removeClass("big"),$(".single_icon").click(function(){var e=$(".container");if($(e).hasClass("stuff_moving"));else{var t=$(".content_section.active .single_icon.active"),n=$(this),a=$(".content_section.active .icons .single_icon").index(n),i=$(n).find("div").attr("class"),c=$(t).find("div").attr("class"),o=$(".content_section.active .expanded.active"),s=$(".content_section.active .expanded").eq(a);if($(e).addClass("stuff_moving"),$(n).hasClass("active"));else if($(o).find(".collapse_map").trigger("click"),$(t).removeClass("active"),$(n).addClass("active"),$(o).removeClass("active"),$(s).addClass("active"),$(t).animate({"background-color":"rgb(182,175,166)"},700,function(){}),$(n).animate({"background-color":"rgb(225,219,206)"},700,function(){}),"object_icon"===i){$(o).find("h1").fadeOut(500),$(o).find("h2").fadeOut(500),$(o).find(".images").fadeOut(500),$(o).find(".content").fadeOut(500,function(){$(o).css("z-index",20).fadeOut(700),$(s).css("z-index",30).fadeIn(300,function(){"context_icon"===c?$(s).find(".object_content").animate({width:"68.75%"},500,function(){$(".object_content").css("width","68.75%"),$(s).find("h1").fadeIn(500),$(s).find("h2").fadeIn(500),$(s).find(".images").fadeIn(500),$(s).find(".triangle").fadeIn(500,function(){$(".triangle").show()}),$(s).find(".content").fadeIn(500,function(){setTimeout(function(){},1925),$(s).find(".locator").show().animate({left:"0"},2e3,function(){$(".locator").css("left","0").show(),$(".context_map").addClass("big");var e=$(s).find(".map_button").css("borderColor");$(s).find(".map_button").animate({boxShadow:"0px 0px 15px 3px "+e},250,function(){$(s).find(".map_button").animate({boxShadow:"none"},250)})}),$(o).css("z-index",""),$(s).css("z-index","")})}):($(".object_content").css("width","68.75%"),$(s).find("h1").fadeIn(500),$(s).find("h2").fadeIn(500),$(s).find(".images").fadeIn(500),$(s).find(".content").fadeIn(500,function(){setTimeout(function(){},1925),$(".locator").css("left","0");var e=$(s).find(".map_button").css("borderColor")}),$(o).css("z-index",""),$(s).css("z-index",""))})});var d=$(n).find(".x_cord").text(),l=$(n).find(".y_cord").text();$(".content_section.active .expanded.active .label_bar .checkbox").hasClass("checked")&&$(o).find(".labels.non_full_map").fadeOut(250),"context_icon"===c?$(o).find(".beacons").fadeOut(250,function(){navigateto(d,l,8)}):navigateto(d,l,8)}else if("context_icon"===i){$(".context_map").removeClass("big"),$(o).find(".locator").animate({left:"62.5%"},1e3,function(){$(".locator").css("left","62.5%").hide(),$(o).find("h1").fadeOut(500),$(o).find("h2").fadeOut(500),$(o).find(".images").fadeOut(500),$(o).find(".triangle").fadeOut(500,function(){$(".triangle").hide()}),$(o).find(".content").fadeOut(500,function(){$(o).find(".object_content").animate({width:"31.25%"},500,function(){$(".object_content").css("width","31.25%"),$(o).css("z-index",20).fadeOut(700),$(s).css("z-index",30).fadeIn(300,function(){$(s).find("h1").fadeIn(500),$(s).find("h2").fadeIn(500),$(s).find(".images").fadeIn(500),$(s).find(".content").fadeIn(500,function(){$(o).css("z-index",""),$(s).css("z-index","")})})})})});var f=$(".context_map");$(o).find(".labels.non_full_map").fadeOut(250,function(){f.animate({left:0,top:0,width:1600,height:900},3e3,"easeInOutCubic",function(){$(s).find(".beacons").fadeIn(250),$(".label_bar .checkbox").hasClass("checked")&&$(s).find(".labels.non_full_map").fadeIn(250)})})}setTimeout(function(){$(e).removeClass("stuff_moving")},3e3)}}),$(".beacon").click(function(){var e=$(this),t=$(".content_section.active .beacons .beacon").index(e),n=$(".content_section.active .icons .single_icon").eq(t+1);$(n).trigger("click")}),$(".label_bar .checkbox").click(function(){$(this).hasClass("checked")?($(".label_bar .checkbox").removeClass("checked").addClass("unchecked"),$(".labels").hide()):$(this).hasClass("unchecked")&&($(".label_bar .checkbox").removeClass("unchecked").addClass("checked"),$(".content_section.active .expanded.active").find(".labels").show(),$(".content_section.active .expanded.active .condensed .labels").hide())}),$(".german_checkbox").click(function(){$(this).hasClass("checked")?($(this).removeClass("checked").addClass("unchecked"),$(".german_map").hide()):($(this).removeClass("unchecked").addClass("checked"),$(".german_map").show())}),$(".expand_map").click(function(){$(this).next(".full_map").removeClass("condensed"),$(".content_section.active .expanded.active .small_map .full_map").css("z-index",30).css("border-right","1px solid #e1dbce").animate({width:1499,height:852,"background-color":"rgb(182, 175, 166)"},500,function(){$(".label_bar .checkbox").hasClass("checked")&&$(".content_section.active .expanded.active .small_map .full_map .labels").fadeIn(500)}),$(".content_section.active .expanded.active .small_map .full_map img").animate({opacity:1},500),$(".content_section.active .expanded.active .small_map .full_map .collapse_map").fadeIn(500),$(".content_section.active .expanded.active .small_map .full_map .label_bar").fadeIn(500)}),$(".collapse_map").click(function(){$(this).parent(".full_map").addClass("condensed");var e=$(".content_section.active .expanded.active");$(e).find(".small_map .full_map .labels").fadeOut(500,function(){$(e).find(".small_map .full_map .label_bar").fadeOut(500),$(e).find(".small_map .full_map").css("border-right","none").animate({width:200,height:113,"background-color":"rgb(146, 140, 133)"},500,function(){$(this).css("z-index","")}),$(e).find(".small_map .full_map img").animate({opacity:.8},500),$(e).find(".small_map .full_map .collapse_map").fadeOut(500)})}),$(".lightbox_trigger").click(function(){var e=$(this).parent().find(".lightbox_trigger").index(this),t=$(this).parent().find(".lightbox_content").eq(e),n=$(t).html();if($(".the_lightbox .content").html(n),$(t).hasClass("image_content")){var a=$(t).find("img").width(),i=$(t).find("img").height();$(".the_lightbox .content").width(a),$(".the_lightbox").fadeIn(500);var c=$(".the_lightbox .content .image_caption").height()+20,o=i+c;$(".the_lightbox .content").height(o)}else if($(t).hasClass("text_content")){var s=$(t).find(".content").width()+30,o=$(t).find(".content").height()+30;$(".the_lightbox .content").width(s).height(o),$(".the_lightbox").fadeIn(500),$(".the_lightbox .content_column").columnize({width:512.25,accuracy:1})}}),$(".the_lightbox .close").click(function(){$(".the_lightbox").fadeOut(500,function(){$(".the_lightbox .content").html("")})})});