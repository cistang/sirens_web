$(function(){

	var userAgent = window.navigator.userAgent.toLowerCase();
	var appVersion = window.navigator.appVersion.toLowerCase();
	
	var movie_w = 128;
	var movie_h = 53;
	
	if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
		movieresize_sp();
		$('#movie').remove();
		$("#movie_bird").remove();
		$("#logo_box").append('<img src="../images/movie_bird_img.jpg" width="100%" alt="">');
	}else{
		movieresize();
	}
	

$(window).resize(function(){
	if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
		movieresize_sp();
	}else{
		movieresize();
	}
});


function movieresize(){
	
	winw = $(window).width();
	winh = $(window).height();
	if(winw/movie_w > winh/movie_h){
		$("#movie_video , #movie_video_img").css({"width":winw+"px","height":winw/movie_w*movie_h+"px"});
		$("#movie").css({"top":"-"+(winw/movie_w*movie_h-winh)/2+"px","left":"0px","height":winw/movie_w*movie_h+"px"});
	}else{
		$("#movie_video , #movie_video_img").css({"width":winh/movie_h*movie_w+"px","height":winh+"px"});
		$("#movie").css({"left":"-"+($("#movie_video").width()-winw)/2+"px","width":$("#movie").height()/movie_h*movie_w+"px","top":"0px","height":"100%"});
	}
	
	
}


function movieresize_sp(){
	
	winw = $(window).width();
	winh = $(window).height();
	$("#movie_out").css({"width":winw+"px","height":winh+70+"px"});
	
}




});

