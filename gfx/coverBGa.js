/* ----- This script is used to take the .skinBg background-image (definable by user at a site level) and generates an <img> to be resized as a "cover" background. This method is used for compatibility with IE. */

$(function(){
    // only runs if .skinBg is defined as background-size: cover;
	if ( $('.skinBg').css("background-size") == "cover" ) {
        // uses the background-image url and scrubs it for an img src
		var url = $('.skinBg').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '').replace("'", '').replace('"', '');
    	var bgImg = $('<img />');
    	bgImg.bind('load', function(){	});
        // inserts the new image tag at the end of div.skinBg
    	$('div.skinBg').append(bgImg);
        // adds the necessary id and class to the img tag for resizing script to target
    	bgImg.attr('src', url).attr('id', 'coverBGimg').addClass('bgwidth');


        // removes the background-image from div.skinBg
		$('div.skinBg').css("background-image", "none");
	    
        function resizeBg(){
            if ( $('#coverBGimg').height() < $('div.skinBg').height() ) {
                $('#coverBGimg').removeClass().addClass('bgheight');
            } 
			 if ( $('#coverBGimg').width() < $('div.skinBg').width() ) {
                $('#coverBGimg').removeClass().addClass('bgwidth');
            }
        }
         resizeBg();
       $(window).resize(resizeBg).trigger("resize");
	}
   
    // only runs if there is a #wrapper-cta element with background-size: cover; 
    if ( $('#wrapper-cta').css("background-size") == "cover" ) {
        // uses the background-image url and scrubs it for an img src
        var url2 = $('#wrapper-cta').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '').replace("'", '').replace('"', '');
        var bgImg2 = $('<img />');
        bgImg2.bind('load', function(){  });
        // inserts the new image tag at the end of div.#wrapper-cta
        $('#wrapper-cta').append(bgImg2);
        // adds the necessary id and class to the img tag for resizing script to target
        bgImg2.attr('src', url2).attr('id', 'coverBGimg2').addClass('bgwidth');
        // removes the background-image from #wrapper-cta
        $('#wrapper-cta').css("background-image", "none");

        
        function resizeBg2() {
            
            if ( $('#coverBGimg2').height() < $('#wrapper-cta').height() ) {
                $('#coverBGimg2').removeClass().addClass('bgheight');
				//console.log('now bgheight')
            } 
			if ( $('#coverBGimg2').width() < $('#wrapper-cta').width() ) {
                $('#coverBGimg2').removeClass().addClass('bgwidth');
				//console.log('now bgwidth')
            }
        }
        $(window).resize(resizeBg2).trigger("resize");
    }
    resizeBg2();
});

