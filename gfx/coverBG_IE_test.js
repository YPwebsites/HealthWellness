

$(function() {
	var url = $('.skinBg').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '').replace("'", '').replace('"', '');
    var bgImg = $('<img />');
    bgImg.bind('load', function(){	});
    // inserts the new image tag at the end of div.skinBg
	$('div.skinBg').append(bgImg);
    // adds the necessary id and class to the img tag for resizing script to target
	bgImg.attr('src', url).attr('id', 'coverBGimg').addClass('bgwidth');

	// removes the background-image from div.skinBg
	$('div.skinBg').css("background-image", "none");

});