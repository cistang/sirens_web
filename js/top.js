$(function(){
	
	$('html,body').animate({scrollTop:0},1);
	
	$('#content_top').css('height',$(window).height()+'px');
	$('#top_btn_box').css('padding-top',$(window).height()-60+'px');
    var pageH = $('#content').height();
	$('#fade').css({'height':pageH,'min-height':$(window).height()+'px'});
	
	
	
	if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
		$('#top_btn_movie_cm_in').remove();
		$('.top_btn_movie').remove();
	}else{
	
	$('.top_btn_movie').css('display','none');
	$('.top_btn_movie_out').hover(function(){
		$(this).children('.top_btn_movie').css('display','block');
		var video = $(this).children('.top_btn_movie').get(0);
		video.play();
	},function(){
		$(this).children('.top_btn_movie').css('display','none');
		var video = $(this).children('.top_btn_movie').get(0);
		video.pause();
	});
	
	$('#top_btn_movie_cm_in').css('display','none');
	$('#top_btn_movie_cm').hover(function(){
		$(this).children('#top_btn_movie_cm_in').css('display','block');
		var video = $(this).children('#top_btn_movie_cm_in').get(0);
		video.play();
	},function(){
		$(this).children('#top_btn_movie_cm_in').css('display','none');
		var video = $(this).children('#top_btn_movie_cm_in').get(0);
		video.pause();
	});
	
	}
	
	setInterval(function(){
        $('#top_fit_img ul:first-child li:first-child div').fadeOut(800,function(){$(this).delay(3000).fadeIn(800)});
    },6000);
	setInterval(function(){
        $('#top_fit_img ul:first-child li:nth-child(2) div').fadeOut(800,function(){$(this).delay(2800).fadeIn(800)});
    },5400);
	setInterval(function(){
        $('#top_fit_img ul:first-child li:last-child div').fadeOut(800,function(){$(this).delay(4000).fadeIn(800)});
    },8000);
	setInterval(function(){
        $('#top_fit_img ul:last-child li:first-child div').fadeOut(800,function(){$(this).delay(3500).fadeIn(800)});
    },7000);
	setInterval(function(){
        $('#top_fit_img ul:last-child li:nth-child(2) div').fadeOut(800,function(){$(this).delay(4700).fadeIn(800)});
    },9400);
	setInterval(function(){
        $('#top_fit_img ul:last-child li:last-child div').fadeOut(800,function(){$(this).delay(3300).fadeIn(800)});
    },6600);
	
	

	
	
	function top_first(){
		var delayt = 200;
		var fadet = 200;
		$('#bird05').delay(1000).fadeIn(fadet).delay(delayt).fadeOut(fadet, function(){
			$('#bird04').fadeIn(fadet).delay(delayt).fadeOut(fadet, function(){
				$('#bird03').fadeIn(fadet).delay(delayt).fadeOut(fadet, function(){
					$('#bird02').fadeIn(fadet).delay(delayt).fadeOut(fadet, function(){
						$('#bird01').fadeIn(fadet).delay(500).fadeOut(300);
							$('#top_logo').fadeIn(200).delay(500).fadeOut(300, function(){
								top_img_stop();
						});
					});
				});
			});
		});
	}
	
	
	function top_img_stop(){
		$('#top_img01').delay(200).fadeIn(500);
		$('#top_img02').delay(200).fadeIn(500);
		$('#top_img03').delay(200).fadeIn(500,function(){
			$('#top_title').delay(100).fadeIn(200, function(){
				$('#top_title_hukidashi').delay(100).fadeIn(200);
			});
		});
	}
		
		
	
	function movieresize_top_cm(){
		
		var movie_w = 1139;
		var movie_h = 640;
		winw = $(window).width();
		winh = $(window).height();
		if(winw < movie_w){
			$("#top_btn_movie_cm_in").attr({"height":movie_h+"px","width":movie_w+"px"}).css({"left":"-"+(movie_w-winw)/2+"px","top":"0px"});
		}else{
			$("#top_btn_movie_cm_in").attr({"height":winw/movie_w*movie_h+"px","width":winw+"px"}).css({"top":"-"+(winw/movie_w*movie_h-640)/2+"px","left":"0px"});
		}
		
	}
	movieresize_top_cm();
	
	function movieresize_top(){
		
		var movie_w = 1256;
		var movie_h = 520;
		winw = $(window).width();
		winh = $(window).height();
		if(winw < movie_w){
			$(".top_btn_movie").attr({"height":movie_h+"px","width":movie_w+"px"}).css({"left":"-"+(movie_w-winw)/2+"px","top":"0px"});
		}else{
			$(".top_btn_movie").attr({"height":winw/movie_w*movie_h+"px","width":winw+"px"}).css({"top":"-"+(winw/movie_w*movie_h-520)/2+"px","left":"0px"});
		}
		
	}
	movieresize_top();
	
	
	function top_img_stop_height(){
		var winw = $(window).width();
		var winh = $(window).height();
		var $top_img_stop = $('#top_img_stop');
		if(winw > 820){
			if(winh > 570){
				$top_img_stop.css({'width':'100%','padding-top':(winh - 570) / 2 + 'px'});
			}else{
				$top_img_stop.css({'width':winh/57 * 60 + 'px','padding-top':winh / 57 * 10 + 'px'});
				$('#bird_box').addClass('winh_d');
				$('#top_logo').addClass('winh_d');
			}
		}else if(winw > 640){
			if(winh > winw/82*57){
				$top_img_stop.css({'width':'100%','padding-top':(winh - ((winw - 20) / 82 * 57)) / 2 + 'px'});
			}else{
				$top_img_stop.css({'width':winh / 57 * 60 + 'px','padding-top':winh / 57 * 10 + 'px'});
				$('#bird_box').addClass('winh_d');
				$('#top_logo').addClass('winh_d');
			}
		}else{
			if(winh > winw/265*246){
				$top_img_stop.css({'width':'100%','padding-top':(winh - ((winw - 20) / 265 * 246)) / 2 + 'px'});
			}else{
				$top_img_stop.css({'width':winh / 246 * 235 + 'px','padding-top':winh / 246 *15 + 'px'});
			}
		}
	}
	
	
	jQuery.event.add(window,'load',function() {
	  
		$('#fade').delay(400).fadeOut(600);
		$('#loader').delay(600).fadeOut(400);
		$('#content').css('display', 'block');
		top_first();
		top_img_stop_height();
		
	});
	
	$(window).resize(function(){
		$('#content_top').css('height',$(window).height()+'px');
		$('#top_btn_box').css('padding-top',$(window).height()-60+'px');
		movieresize_top_cm();
		movieresize_top();
		top_img_stop_height();
	});
	
});

