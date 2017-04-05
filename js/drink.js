$(function(){
	
	
	
	
	
	$('.fade_step01').css('opacity',0);
	$('.fade_step02').css('opacity',0);
	$('.fade_step03').css('opacity',0);
	
	$('#bin2_01,#bin2_02,#bin2_03').css('display','none');
	
	var swich = 0;
	$('#bin01,#bin02,#bin03,#bin04').css('display','none');
function bin01(){
        setTimeout(function(){$('#bin01').fadeIn(300,function(){$(this).delay(200).fadeOut(300)});},0);
        setTimeout(function(){$('#bin02').fadeIn(300,function(){$(this).delay(200).fadeOut(300)});},500);
        setTimeout(function(){$('#bin03').fadeIn(300,function(){$(this).delay(200).fadeOut(300)});},1000);
        setTimeout(function(){$('#bin04').fadeIn(300,function(){$(this).delay(200).fadeOut(300)});},1500);
        setTimeout(function(){$('#bin01').fadeIn(300,function(){$(this).delay(200).fadeOut(300)});},2000);
        setTimeout(function(){$('#bin02').fadeIn(300,function(){$(this).delay(200).fadeOut(300)});},2500);
        setTimeout(function(){$('#bin03').fadeIn(300,function(){$(this).delay(200).fadeOut(300)});},3000);
        setTimeout(function(){$('#bin04').fadeIn(300,function(){$(this).delay(200).fadeOut(300)});},3500);
        setTimeout(function(){$('#bin01').fadeIn(300)},4000);
}


function step(){
	
	$('.fade_step01').animate({'opacity':1},500);
	bin01();
	$('.fade_step02').delay(1200).animate({'opacity':1},500);
	$('.fade_step03').delay(3200).animate({'opacity':1},500);
	

	$('#bin2_01').delay(1800).fadeIn(500);
	$('#bin2_02').delay(2200).fadeIn(500);
	$('#bin2_03').delay(2600).fadeIn(500);

}

$(window).scroll(function(){
	if($(window).scrollTop() > $('#step_txt').offset().top && swich == 0){
		step();
		swich = 1;
	}
});

});


