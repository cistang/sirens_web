$(function(){
	
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');
	
	
	var ua = window.navigator.userAgent.toLowerCase();
	var ver = window.navigator.appVersion.toLowerCase();
	
	

	if (ua.indexOf("msie") != -1 && ver.indexOf("msie 8.") != -1){
		$('#g_nav').addClass('ie8').css({'min-height':$window.height()+'px'});
		$body.addClass('ie8');
		
		if(ua.indexOf("msie 7.") != -1 || ua.indexOf("msie 8.") != -1){
			$('img').each(function(){
				var src = $(this).attr('src');
				if(src.indexOf('.png') != -1){
					$(this).css({
						'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+src+'", sizingMethod="scale");'
					});
				}
			});
		}
		
	}else{
		$('#g_nav').css({'min-height':($window.height()+100)+'px'});
		
	}

	
	
	$window.resize(function(){
		if (ua.indexOf("msie") != -1 && ver.indexOf("msie 8.") != -1){
			$('#g_nav').css({'min-height':$window.height()+'px'});
		}else{
			$('#g_nav').css({'min-height':($window.height()+100)+'px'});
		}
	});
	
	
	
	$('#menu_btn').click(function(){
		$('#g_nav').animate({'right':0},300,'swing');
	});
	$('#nav_close img').click(function(){
		$('#g_nav').animate({'right':'-298px'},300,'swing');
	});
	
	$('.fade_img01').css('opacity',0);
	$('.fade_img02').css('opacity',0);
	$('.fade_img03').css('opacity',0);
	$('.fade_img04').css('opacity',0);
	
	
});


jQuery.event.add(window,'load',function() {
	
	$('.fade_img01').delay(200).animate({'opacity':1},500);
	$('.fade_img02').delay(600).animate({'opacity':1},500);
	$('.fade_img03').delay(1000).animate({'opacity':1},500);
	$('.fade_img04').delay(1400).animate({'opacity':1},500);
	
});





