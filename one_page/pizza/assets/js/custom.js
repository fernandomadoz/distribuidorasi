(function($) {

    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");
    });


    // on ready function
    $(document).ready(function() {
		"use strict";

 /*--- Responsive Menu Start ----*/

$("#toggle").on("click", function(){
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

//----------------------- MENU FIXED JS -----------------------//
	
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 500) {
			$('.menu_wrapper').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.menu_wrapper').removeClass('menu_fixed animated fadeInDown');
		}
	});


			
			// Wow js
		$(window).on("load", function() {
				var wow = new WOW({
					boxClass: 'wow',
					animateClass: 'animated',
					offset: 0,
					mobile: true,
					live: true
				});
				wow.init();
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
						//*---------section slider--------*****//
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
	
	
// -------------------------------------------------------------
    // Counter Section(Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart_1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#b31515',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 150,
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
            barColor: '#b31515',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 150,
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
            barColor: '#b31515',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 150,
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
            barColor: '#b31515',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 150,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());
	
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
			
			/*section-1 slider js */
	$(document).ready(function() {
              $('.section1_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
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
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
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
	 
	 //show hide search form js
	
	$('#search_button').on("click", function(e) {
		$('#search_open').slideToggle();
		e.stopPropagation(); 
	});

	$(document).on("click", function(e){
		if(!(e.target.closest('#search_open'))){	
			$("#search_open").slideUp();   		
		}
   });
   
 
$('.zoom_popup').magnificPopup({
			delegate: 'a',
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
			  
    });

})(jQuery);