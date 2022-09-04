(function($){
  "use strict";
  
	// Preloader 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});
	
	// on ready function
	jQuery(document).ready(function($) {
	var $this = $(window);
	
		// Menu js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 800) {
			$('.gc_main_menu_wrapper').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.gc_main_menu_wrapper').removeClass('menu_fixed animated fadeInDown');
		}
	});
	
	// Back to Top js
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
	$('#scroll').on("click", function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
	
		//show hide login form js
	$('#search_button').on("click", function(e) {
		$('#search_open').slideToggle();
		e.stopPropagation(); 
	});

	$(document).on("click", function(e){
		if(!(e.target.closest('#search_open'))){	
			$("#search_open").slideUp();   		
		}
   });
   
   
   /*--- Responsive Menu Start ----*/

$("#toggle").on("click", function(){
  var w = $('#sidebar').width();
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});

$("#toggle_close").on("click", function(){
  var w = $('#sidebar').width();
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});

(function($){
$(document).ready(function(){

$('#cssmenu li.active').addClass('open').children('ul').show();
	$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

});
})(jQuery);


/*--- Responsive Menu End ----*/

	$('.btc_services_main_wrapper').parallax({imageSrc: 'images/content/service_bg.jpg'});
	$('.btc_steps_main_wrapper').parallax({imageSrc: 'images/content/service_bg.jpg'});
	$('.btc_team_main_wrapper').parallax({imageSrc: 'images/content/service_bg.jpg'});
	$('.btc_partner_slider_main_wrapper').parallax({imageSrc: 'images/content/service_bg.jpg'});
	$('.btc_services_indx_main_wrapper').parallax({imageSrc: 'images/content/service_bg.jpg'});
	$('.btc_exch_pricing_chart_main_wrapper').parallax({imageSrc: 'images/content/service_bg.jpg'});
	$('.btc_shop_single_product_main_wrapper').parallax({imageSrc: 'images/content/service_bg.jpg'});
	$('.btc_contact_tittle_main_wrapper').parallax({imageSrc: 'images/content/service_bg.jpg'});
	
	
	$(document).ready(function() {
              $('.btc_team_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="flaticon-left-arrow" aria-hidden="true"></i>','<i class="flaticon-right-arrow" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 2,
                    nav: true
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
			
			
			$(document).ready(function() {
              $('.btc_partner_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="flaticon-left-arrow" aria-hidden="true"></i>','<i class="flaticon-right-arrow" aria-hidden="true"></i>'],
                responsive: {
					 100: {
                    items: 1,
                    nav: true
                  },
                  300: {
                    items: 2,
                    nav: true
                  },
                  600: {
                    items: 4,
                    nav: true
                  },
                  1000: {
                    items: 6,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
	
	
		$(document).ready(function() {
              $('.cc_ps_top_slider_section .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:false,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
	
	
	$(document).ready(function() {
              $('.btc_blog_cate_client_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
	
	/*------------------RS MAIN SLIDER-------------------------*/
	
	 var tpj=jQuery;
			var revapi24;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_24_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_24_1");
				}else{
					revapi24 = tpj("#rev_slider_24_1").show().revolution({
						sliderType:"standard",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							bullets: {
								enable:true,
								hide_onmobile:false,
								style:"bullet-bar",
								hide_onleave:false,
								direction:"horizontal",
								h_align:"center",
								v_align:"bottom",
								h_offset:0,
								v_offset:50,
								space:5,
								tmp:''
							}
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "60px",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}

                
			});	/*ready*/
	

	
	//Single page scroll js
	$('.wd_single_index_menu ul li a').on('click' , function(e){
	  $('.wd_single_index_menu ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('80', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.wd_single_index_menu ul li');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 90) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.wd_single_index_menu ul li:first').addClass('active');
	  }

	});

	
	
	//Single page scroll js
	$('#cssmenu ul li a').on('click' , function(e){
	  $('#cssmenu ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('80', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('#cssmenu ul li');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 90) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('#cssmenu ul li:first').addClass('active');
	  }

	});

  
		
	});
})(); 