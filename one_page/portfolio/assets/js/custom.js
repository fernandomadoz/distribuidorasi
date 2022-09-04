(function($) {

    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");
    });


    // on ready function
    $(document).ready(function() {
		"use strict";


//Side Menu js
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}	

//----------------------- MENU FIXED JS -----------------------//
	
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 500) {
			$('.menu_wrapper').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.menu_wrapper').removeClass('menu_fixed animated fadeInDown');
		}
	});

//Single page scroll js for main menu

	$('.menu_scroll ul li a').on('click' , function(e){
	  $('.menu_scroll ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[data-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('60');
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.menu_scroll ul li');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 70) {
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

	$('.sidenav a').on('click' , function(e){
	  $('.sidenav a').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[data-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('60');
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.sidenav a');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 70) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.sidenav a:first').addClass('active');
	  }

	});
	
	$(document).ready(function (){
	var owl = $('.section4_slider_wrapper .owl-carousel');
		owl.owlCarousel({
		loop:true,
		margin:0,
		autoplay:false,
		navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		items:1
				  
});

function setAnimation ( _elem, _InOut ) {
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each ( function () {
				  var $elem = $(this);
				  var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

				  $elem.addClass($animationType).one(animationEndEvent, function () {
					$elem.removeClass($animationType);
				  });
				});
			  }

			  owl.on('change.owl.carousel', function(event) {
				  var $currentItem = $('.owl-item', owl).eq(event.item.index);
				  var $elemsToanim = $currentItem.find("[data-animation-out]");
				  setAnimation ($elemsToanim, 'out');
			  });

			  owl.on('changed.owl.carousel', function(event) {

				  var $currentItem = $('.owl-item', owl).eq(event.item.index);
				  var $elemsToanim = $currentItem.find("[data-animation-in]");
				  setAnimation ($elemsToanim, 'in');
			  })

});
			
/* portfolio_section lightbox js */
		$('.portfolio_img_text').magnificPopup({
			delegate: '.search',
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
		})		
	
//Video Play
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
	  
/* team_slider js */

	$(document).ready(function() {
              $('.team_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:false,
                responsiveClass: true,
				navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
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
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })	
			
/*testimonial_slider js */

	$(document).ready(function() {
              $('.testimonial_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:false,
                responsiveClass: true,
				navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
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
// -------------------------------------------------------------
// Counter One (Chart)
// -------------------------------------------------------------

    $(document).ready(function() {

        $('.chart_one').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#34c176',
            trackColor: '#f7f7f7',
            scaleColor: false,
            lineWidth: 8,
            size: 150,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());
	
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