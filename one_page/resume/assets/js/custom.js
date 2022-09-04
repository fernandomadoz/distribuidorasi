(function($) {

    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");
    });

// -------------------------------------------------------------
// Shuffle
// -------------------------------------------------------------

jQuery(window).on('load', function() {
    /** this is come when complete page is fully loaded, including all frames, objects and images **/

    if ($('#gridWrapper').length > 0) {
     
        /* initialize shuffle plugin */
        var $grid = $('#gridWrapper');

        $grid.shuffle({
            itemSelector: '.portfolio-wrapper' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').on('click', function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });
    }
	
}); 


    // on ready function
    $(document).ready(function() {
		"use strict";
		

//----------------------- MENU FIXED JS -----------------------//
	
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 50) {
			$('.mobail_menu_main').addClass('');
		} else {
			$('.mobail_menu_main').removeClass('');
		}
	});
	
/*--- Responsive Menu Start ----*/

$(".navbar-toggle").on("click", function(){
  var w = $('#sidebar').width();
  var pos = $('#sidebar').offset().left;
 
  if(pos === 0){
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
 
  if(pos === 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});



//Single page scroll js for button

	$('.home_banner_bottom_scroll a').on('click' , function(e){
	  $('.home_banner_bottom_scroll').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[data-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('0');
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.home_banner_bottom_scroll');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 0) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.home_banner_bottom_scroll').addClass('active');
	  }

	});
	
//Single page scroll js for main menu

	$('.menu_scroll ul li a').on('click' , function(e){
	  $('.menu_scroll ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[data-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('0');
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.menu_scroll ul li');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 0) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.menu_scroll ul li:first').addClass('active');
	  }

	});
	
//Single page scroll js for side menu
	
	$('#sidebar ul li a').on('click' , function(e){
	  $('#sidebar ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[data-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('85');
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.menu_scroll ul li');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 95) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('#sidebar ul li:first').addClass('active');
	  }

	});
	
	
// -------------------------------------------------------------
// Progress Bar
// -------------------------------------------------------------
 
    $('.progress_section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).off('inview');
        }
    });



// -------------------------------------------------------------
// lightbox js
// -------------------------------------------------------------

$('.gc_filter_text').magnificPopup({
			delegate: '.zoom_image',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});
		
/* testimonial_slider_wrapper js */

	$(document).ready(function() {
              $('.testimonial_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				navText : ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
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
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })	
			
//Blog Video Play

	$('.play-trigger').magnificPopup({
        type: 'iframe'
      });
      $.extend(true, $.magnificPopup.defaults, {
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            }
          }
        }
      });
	  
/*--------------------------
scrollUp
---------------------------- */	
	// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {       
        $('#return-to-top').fadeIn(200);   
    } else {
        $('#return-to-top').fadeOut(200);  
    }
});
$('#return-to-top').click(function() {     
    $('body,html').animate({
        scrollTop : 0                
    }, 500);
});


    });

})(jQuery);