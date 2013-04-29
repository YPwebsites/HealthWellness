$(function() {
	var url = $('.skinBg').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '').replace("'", '').replace('"', '');
    var bgImg = $('<img />');
    $('div.skinBg').append(bgImg);
    bgImg.attr('id', 'coverBGimg').attr('src', url);
    
    var url2 = $('div#wrapper-cta').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '').replace("'", '').replace('"', '');
    var bgImg2 = $('<img />');
    $('div#wrapper-cta').append(bgImg2);
    bgImg2.attr('id', 'coverBGimg2').attr('src', url2);
    
    var lastSkinBGHeight = $('div.skinBg').height();
   	var lastSkinBGWidth = $('div.skinBg').width();
    var lastSkinBGRadio = lastSkinBGHeight / lastSkinBGWidth;
    var imgRatio = bgImg.height() / bgImg.width();
    
    var lastWrapperHeight = $('div#wrapper-cta').height();
   	var lastWrapperWidth = $('div#wrapper-cta').width();
    var lastWrapperRadio = lastWrapperHeight / lastWrapperWidth;
    var imgRatio2 = bgImg2.height() / bgImg2.width();
   
    function resizeNewBG(){
    	var newSkinBGRatio = $('div.skinBg').height() / $('div.skinBg').width();
        var newWrapperRatio = $('div#wrapper-cta').height() / $('div#wrapper-cta').width();
        if ( newSkinBGRatio < imgRatio ) {
        	bgImg.removeClass().addClass('bgwidth');
        } else {
        	bgImg.removeClass().addClass('bgheight');
        }
        
        if ( newWrapperRatio < imgRatio2 ) {
        	bgImg2.removeClass().addClass('bgwidth');
        } else {
        	bgImg2.removeClass().addClass('bgheight');
        }
    }
    resizeNewBG();
    $(window).resize(function() {
    	if ( $('div.skinBg').height() != lastSkinBGHeight || $('div.skinBg').width() != lastSkinBGWidth ) {
        	resizeNewBG();
        }
    });
	$('div#wrapper-cta').css("background-image", "none");
    $('div.skinBg').css("background-image", "none");
});