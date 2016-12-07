<!doctype html>  

<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title></title>
  <meta name="description" content="">
  <meta name="author" content="">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <link rel="stylesheet" href="css/style.css">
  <script src="js/libs/modernizr-1.6.min.js"></script>
  <script src="js/libs/swfobject.js"></script>
  <script src="js/libs/google-analytics.js"></script>

</head>

<body id="homepage">

  <div id="container">
	<div id="test">
		<button>delete cookie</button>
	</div>
    
	<header><? include("includes/header.html"); ?></header>
	
    <div id="main">
		<div id="scroller" class="centerit">
			<div id="scrollable">
				<div class="flash-container">
					<div id="swf-1">
						<img src="images/slider1.png" alt="" />
					</div>
				</div>
				<div class="flash-container">
					<div id="swf-2">
						<img src="images/slider2.png" alt="" />
					</div>
				</div>
				<div class="flash-container">
					<div id="swf-3">
						<img src="images/slider3.png" alt="" />
					</div>
				</div>
				<div class="flash-container">
					<div id="swf-4">
						<img src="images/slider4.png" alt="" />
					</div>
				</div>
				<div class="flash-container">
					<div id="swf-5">
						<img src="images/slider5.png" alt="" />
					</div>
				</div>
			</div> <!-- #srollable -->

			<ul id="scroll-num" class="no-style">
					<li id="slide-num1"><a class="slide-on removetext" href="#slide-num1">1</a></li>
					<li id="slide-num2"><a class="removetext" href="#slide-num2">2</a></li>
					<li id="slide-num3"><a class="removetext" href="#slide-num3">3</a></li>
					<li id="slide-num4"><a class="removetext" href="#slide-num4">4</a></li>
					<li id="slide-num5"><a class="removetext" href="#slide-num5">5</a></li>
				</ul>
		</div> <!-- #scroller -->
		<div id="fourcards">
			<div class="title removetext">
				Learn. Apply. Earn. Click on one or all the cards below to find the AIR MILES&reg; Credit Card that's right for you.
			</div>
			<div id="box-container">
				<div id="box-BMO" class="box">
					<div id="BMO-gold">
						<a class="img" target="_blank" href="http://www.bmo.com/home/personal/banking/credit-cards/airmiles/gold"></a>
						<p>
							BMO<sup>&reg;&dagger;</sup> AIR&nbsp;MILES World Mastercard<sup>&reg;</sup>*
							<!-- BMO<sup>&reg;&dagger;</sup> Gold AIR&nbsp;MILES Mastercard<sup>&reg;</sup>* -->
						</p>
						<a class="applynow removetext" target="_blank" href="http://www.bmo.com/home/personal/banking/credit-cards/airmiles/gold-airmiles-mastercard">
							Apply now
						</a>
						<a class="viewdetails removetext" href="chart-BMO.php">
							View details
						</a>
					</div>
					<div id="BMO">
						<a class="img" target="_blank" href="http://www.bmo.com/home/personal/banking/credit-cards/airmiles/nofee"></a>
						<p>
							BMO<sup>&reg;&dagger;</sup> AIR&nbsp;MILES Mastercard<sup>&reg;</sup>*
						</p>
						<a class="applynow removetext" target="_blank" href="http://www.bmo.com/home/personal/banking/credit-cards/airmiles/nofee">
							Apply now
						</a>
						<a class="viewdetails removetext" href="chart-BMO.php">
							View details
						</a>
					</div>
				</div> <!-- #box-BMO / .box -->
				<div id="box-AMEX" class="box">
					<div id="AMEX-platinum">
						<a class="img" target="_blank" href="http://www.americanexpress.com/canada/en/am_dual_RTP_A_en.shtml?CPID=100065129"></a>
						<p>
							American Express<sup>&reg;</sup>* AIR&nbsp;MILES Platinum Credit Card
						</p>
						<a class="applynow removetext" target="_blank" href="http://www.americanexpress.com/canada/en/am_dual_RTP_A_en.shtml?CPID=100065129">
							Apply now
						</a>
						<a class="viewdetails removetext" href="chart-AMEX.php">
							View details
						</a>
					</div>
					<div id="AMEX">
						<a class="img" target="_blank" href="http://www.americanexpress.com/canada/en/am_dual_RTP_A_en.shtml?CPID=100065469"></a>
						<p>
							American Express<sup>&reg;</sup>* AIR&nbsp;MILES Credit Card
						</p>
						<a class="applynow removetext" target="_blank" href="http://www.americanexpress.com/canada/en/am_dual_RTP_A_en.shtml?CPID=100065469">
							Apply now
						</a>
						<a class="viewdetails removetext" href="chart-AMEX.php">
							View details
						</a>
					</div>
				</div> <!-- #box-AMEX / .box -->
			</div> <!-- #box-container -->
		</div> <!-- #fourcards -->

    </div> <!-- #main -->
    
    <footer><? include("includes/footer.html"); ?></footer>
	
  </div> <!-- end of #container -->


  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js"></script>
  <script>!window.jQuery && document.write(unescape('%3Cscript src="js/libs/jquery-1.4.2.js"%3E%3C/script%3E'))</script>
  
  
  <!-- scripts concatenated and minified via ant build script-->
  <script src="js/libs/jquery.cookie.js"></script>
  <script src="js/plugins.js"></script>
  <script src="js/script.js"></script>
  <script src="js/libs/GoogleAnalytics.js"></script>
  <!-- end concatenated and minified scripts-->
  
</body>
</html>