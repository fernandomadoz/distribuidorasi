(function($) {

    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");
    });


    // on ready function
    $(document).ready(function() {
		"use strict";

//----------------------- MENU FIXED JS -----------------------//
	
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 50) {
			$('.section1_menu_wrapper').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.section1_menu_wrapper').removeClass('menu_fixed animated fadeInDown');
		}
	});

	
//Single page scroll js for button

	$('.section1_bottom_scroll a').on('click' , function(e){
	  $('.section1_bottom_scroll').removeClass('active');
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
	  var target = $('.section1_bottom_scroll');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 95) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.section1_bottom_scroll').addClass('active');
	  }

	});
	
//Single page scroll js for main menu

	$('.menu_scroll ul li a').on('click' , function(e){
	  $('.menu_scroll ul li').removeClass('active');
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
	   $('.menu_scroll ul li:first').addClass('active');
	  }

	});
	
//Single page scroll js for side menu

	$('.sidenav a').on('click' , function(e){
	  $('.sidenav a').removeClass('active');
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
	  var target = $('.sidenav a');
	  if (windscroll >= 0) {
	   $('[data-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 95) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.sidenav a:first').addClass('active');
	  }

	});

//-----------Search box jquery------------//

			$( "#search_button" ).on( "click", function() {
			  $( ".searchbox" ).addClass( "open", 1000);
			});

			$( ".close" ).on( "click", function() {
			  $( ".searchbox" ).removeClass( "open", 1000);
			});
					
// Parallaxing + add class active on scroll

$(document).scroll(function () {
  var scrollPos = $(document).scrollTop() + 100;
    if (scrollPos > 250) {
      $('.section1_menu_wrapper').addClass('small');
    } else {
      $('.section1_menu_wrapper').removeClass('small');
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
			
// -------------------------------------------------------------
// Progress Bar
// -------------------------------------------------------------
 
    $('.progress_wrapper').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).off('inview');
        }
    });
			
/* section-2 lightbox js */
		
		$('#all').magnificPopup({
			delegate: '.search_link',
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
		
		$('#web').magnificPopup({
			delegate: '.search_link',
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
		
		$('#UI').magnificPopup({
			delegate: '.search_link',
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
		
		$('#creative').magnificPopup({
			delegate: '.search_link',
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
		
		$('#graphics').magnificPopup({
			delegate: '.search_link',
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
		
		$('#mockup').magnificPopup({
			delegate: '.search_link',
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

// -------------------------------------------------------------
// Counter Section(Chart)
// -------------------------------------------------------------

    (function () {

        $('.chart_1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#4285f4',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    (function () {

        $('.chart_2nd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#7197b3',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart_3rd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#73ca8d',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart_4th').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#ea6a38',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());

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
	
// -------------------------------------------------------------
//  client_slider
// -------------------------------------------------------------
   $('.client_slider .owl-carousel').owlCarousel({
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
                    items: 3,
                    nav: true
                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 20
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