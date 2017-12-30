
$(document).ready(function(){
		
		
		moveNutrition = function(){
		
		  var mybody = $("body");
		  var top = mybody.scrollTop() // Get position of the body
		  var scrollto = $('#content').offset().top;
		//window.alert('calleddddddd');
		
		//$("body").animate({scrollTop:scrollto}, '0');
		
		if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
            window.scrollTo(0,$('#content').offset().top); // first value for left offset, second value for top offset
			}
		else
			{
            mybody.animate({scrollTop:scrollto}, '0');
			}
		}
		
		
		$(".Nutritions").on("click", function() {

			//console.log("Calleednjhuj");
		   moveNutrition();
	     		
	});
	
		jQuery.scrollSpeed(100, 1200);
		
		$('.logo').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s"');
		$('.myNavigation').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s"');
		$('.Social_icons').addClass('wow bounceIn');
		$('#ourrange img').addClass('wow bounceIn');
		$('.product').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		$('#footer div').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		
		
		//$('#footertext').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		$('.productTitle').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		$('.description').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		$('.certificate').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		
		$('.banners').addClass('wow fadeIn');
		
		
		$('#mailform').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		
		$('.map,.address').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		
		$('.events,.award').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		
		$('#p_menu ul li').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		
		$('.big_product,.product_info > h3').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		$('.product_info > h4,.product_info > h5,.product_info > h6').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		$('.product_info > p,.product_info ol li,.product_info > .colours').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s" ');
		
		
		
		$( "#footertext p:last-child a" ).text( "Designed & Developed By Design Group" );
		
		$("#footertext p:last-child a").attr('title', 'Contact : 9811753534');
		
		/*
		var myAudio = new Audio('_audio/Twinkle.ogg');
		myAudio.load();		
		myAudio.play();
		if (typeof myAudio.loop == 'boolean')
		{
			myAudio.loop = true;
		}
		else
		{
			myAudio.addEventListener('ended', function() {
				this.currentTime = 0;
				this.play();
			}, false);
		}
		*/
			
			
		//$('.logo').addClass('wow bounceIn data-wow-duration="2s" data-wow-delay="2s"');
		//$('.logo').addClass('is-showing');
		
		//$('.banners').addClass('is-showing');		
		
		//$('.myNavigation').addClass('is-showing');
		
					

		/*$('.Social_icons').each(function(i){
				
		setTimeout(function(){
		
		$('.Social_icons').eq(i).addClass('is-showing');
		
		}, 550 * (i));*/
		
	//})

      
      
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
$(window).scroll(function(){


var wscroll = $(this).scrollTop();

if($('#bottomtext').length)
{
  var values = $('#bottomtext').offset().top- ($(window).height());	
  $('#bottomtext').css('background-position', "0px -"+ (wscroll - values)/8 + "%");
	
  if(wscroll > $('#bottomtext').offset().top - $(window).height()/3)
  {
	$('#bottomtext h1,#bottomtext h2').addClass('is-showing');
  }
  
  if(wscroll < 100){
	$('#bottomtext h1,#bottomtext h2').removeClass('is-showing');	
  }

  

}












//console.log($('#content').offset().top- ($(window).height()/1.2));

/*if(wscroll > $('#content').offset().top- ($(window).height()/1.2) ){
	

	console.log("caleedd");
	$('.product').each(function(i){
		
		
		setTimeout(function(){
		
		$('.product').eq(i).addClass('is-showing');
		$('.product').eq(i).removeClass('animleft');
		$('.product').eq(i).removeClass('animright');
		}, 300 * (i));
		
	}
	
	)

}*/

	
}

)
	  
	  
	  
	  
	  
	  
	  
	  
	  

    });

