
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ){
		function F(){};
		F.prototype = obj;
		return new F();
	};
};


(function( $, window, document, undefined ){


	$(document).ready(function(){ 

		////////////////////////////////////////////
		// Main slider
		///////////////////////////////////////////


	    if ($('#main-slider').length > 0) {

	        var sliderWidth = $("#main-slider").data("slider-width");
	        var sliderHeigth = $("#main-slider").data("slider-height");
	        var sliderArrows = $("#main-slider").data("slider-arrows");
	        var sliderButtons = $("#main-slider").data("slider-buttons");

	        $( '#main-slider' ).sliderPro({
	            width:  sliderWidth,
	            height: sliderHeigth,
	            arrows: sliderArrows,
	            buttons: sliderButtons,
	            fade: true,
	            fullScreen: true,
	            touchSwipe: false,
	            autoplay: false
	        });
	    }

		/* Typed cursor */
    
    
	    $(".typed-strings").typed({
	            stringsElement: $('.typed-strings ul'),
	            typeSpeed: 30,
	            backDelay: 500,
	            loop: false,
	            contentType: 'html', // or text
	            // defaults to false for infinite loop
	            loopCount: false,
	            resetCallback: function() { newTyped(); }
	        });
	    
	    
	        $(".typed-strings2").typed({
	            stringsElement: $('.typed-strings2 ul'),
	            typeSpeed: 30,
	            backDelay: 500,
	            loop: false,
	            contentType: 'html', // or text
	            // defaults to false for infinite loop
	            loopCount: true,
	            resetCallback: function() { newTyped(); }
	        });

	});


})( jQuery, window, document );







/*


(function($){
	$(document).ready(function(){
		//	Slider
			swipppe();
			
	});


	//	SLIDER: parallax
	//---------------------------------------
	
	function swipppe(){

		var $sw = $('.ts-wrapper');
		var swipeStartPos;
		
		$sw.on('mousedown',function(e){
			swipeStartPos = e.pageX;
			$(this).addClass('swippping');
		}).on('mouseup',function(){
			$(this).removeClass('swippping');
		}).on('mouseleave',function(){
			$(this).removeClass('swippping');
		});
		
		$(document).on('mousemove','.ts-wrapper.swippping',function(e){
			var mousePos =  e.pageX;
			var swipeTravel = Math.abs( swipeStartPos - mousePos );
			if ( swipeTravel > 100 ) {
				if ( swipeStartPos > mousePos ){ 
					// swipe left
					$(this).removeClass('swippping');
				} else {
					// swipe right
					$(this).removeClass('swippping');
				}
			}
		});
		
		

	}


})(jQuery);
*/