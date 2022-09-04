<!DOCTYPE html>
<!-- 
Template Name: A-Future HTML
Version: 1.0.0
Author: Webstrot
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FeedPlast - Video</title>
    <!-- Place favicon.ico in the root directory -->
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">

    <!-- font-awesome -->
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/fonts.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/owl.carousel.css" />
    <link rel="stylesheet" href="css/owl.theme.default.css" />
    <link rel="stylesheet" href="css/magnific-popup.css" />
    <link href="css/jquery-ui.min.css" rel="stylesheet">
    <!-- Animation Css -->
    <link href="css/animate.css" rel="stylesheet">
    <!-- Style CSS -->
    <link href="css/shop.css" rel="stylesheet">
    <!-- Common Style CSS -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>

 
    <a href="javascript:" id="return-to-top"><i class="fa fa-angle-up"></i></a>

    <!-- Preloader -->
    <div id="preloader">
        <div id="status">
            <div class="status-mes"></div>
        </div>
    </div>

    <?php require('top.php') ?>

    <!-- page_header start -->
    <div class="page_header">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-xs-12 col-sm-6">
                    <h1> Feed Plast Video </h1>
                </div>
                <div class="col-lg-4 col-md-4 col-xs-12 col-sm-6">
                    <div class="sub_title_section">
                        <ul class="sub_title">
                            <li> <a href="#"> Home </a> <i class="fa fa-angle-right" aria-hidden="true"></i> </li>
                            <li> Feed Plast Video </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- page_header end -->
	
    <!-- CC ps top product Wrapper Start -->
    <div class="cc_ps_top_product_main_wrapper">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <article class="port-post-wrapper clearfix">
                        <div class="blog_video_wrapper">
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/ODLKt6Q2o0M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    </div>
    <!-- CC ps top product Wrapper End -->
	
    
  
	
    <?php require('footer.php') ?>
	
	<!-- Bootstrap js -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script src="js/jquery.magnific-popup.js"></script>
    <script src="js/megnify.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/jquery.inview.min.js"></script>
	<script src="js/cloud-zoom.1.0.3.js"></script>
    <!-- Custom js -->
    <script src="js/shop.js"></script>
    <script src="js/custom.js"></script>
    <script>
	
		function changeQty(increase) {
            var qty = parseInt($('.select_number').find("input").val());
            if (!isNaN(qty)) {
                qty = increase ? qty + 1 : (qty > 1 ? qty - 1 : 1);
                $('.select_number').find("input").val(qty);
            } else {
                $('.select_number').find("input").val(1);
            }
        }

        function goToByScroll(id) {
            $('html,body').animate({
                scrollTop: $("#" + id).offset().top
            }, 'slow');
        }

        //------- Progress Bar ---------//

        $('.progress_section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'), function() {
                    $(this).css('width', $(this).attr('aria-valuenow') + '%');
                });
                $(this).off('inview');
            }
        });
    </script>
</body>

</html>