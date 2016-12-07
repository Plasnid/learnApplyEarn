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
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="/favicon.ico">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png">

	<link rel="stylesheet" href="css/style.css">
	<script src="js/libs/modernizr-1.6.min.js"></script>
	<script src="js/libs/google-analytics.js"></script>
	<script type="text/javascript">
		lang="en";
	</script>
	<!-- -->
	<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/libs/calculator/Province.js"></script>
	<script type="text/javascript" src="js/libs/calculator/ratedata.js"></script>
	<script type="text/javascript" src="js/libs/calculator/calclogic.js"></script>
	<script type="text/javascript" src="js/libs/calculator/slidercontrol.js"></script>
	<link rel="stylesheet" href="css/calcStyle.css"/>
</head>
<body id="calculator">
	<div id="test">
		<button>delete cookie</button>
	</div>

	<? include("includes/header.html"); ?>

	<div id="container">
		<div id="calculatormain">
			<div id="calcintro">
				<img id="calculatorTitleImage" src="img/calculator/earnMoreTitle_en.png" width="541" height="16" alt="EARN MORE WITH AN AIR&nbsp;MILES&reg; CREDIT CARD"/>
				<p>When you have an AIR&nbsp;MILES Credit Card, not only can you earn on everything you purchase, but you can EARN TWICE at all AIR&nbsp;MILES Sponsors.</p>
			</div>
			<div id="calculator">
				<div id="calculatorFormTop">
					<p id="findout">Find out how much more you would earn with an AIR&nbsp;MILES Credit Card!</p>
				</div>
				<div id="calculatorContent" class="clearfix">
					<div id="calculatorForm">
						<div>
							<div class="qlabel">
								<img src="img/calculator/one.png" alt="1"/><p>Select a Credit Card</p>
							</div>
							<select id="cardSelect" class="styled-select">
								<option value="amexFee">American Express&reg;* AIR&nbsp;MILES Platinum Credit Card</option>
								<option value="amexNoFee">American Express&reg;* AIR&nbsp;MILES Credit Card</option>
								<option value="bmoFee">BMO&reg;&dagger; AIR&nbsp;MILES World Mastercard&reg;*</option>
								<option value="bmoNoFee">BMO&reg;&dagger; AIR&nbsp;MILES Mastercard&reg;*</option>
							</select>
						</div>
						<img class="hr" src="img/calculator/hr.png" width="287" height="2"/>
						<div>
							<div class="qlabel">
								<img src="img/calculator/two.png" alt="2"/><p>Select your region</p>
							</div>
							<select id="provdrop">
								<option value="ab">Alberta</option>
								<option value="bc">BC</option>
								<option value="mb">Manitoba</option>
								<option value="nfld">Newfoundland and Labrador</option>
								<option value="nb">New Brunswick</option>
								<option value="sk">Saskatchewan</option>
								<option value="nwt">Northwest Territories</option>
								<option value="ns">Nova Scotia</option>
								<option value="nu">Nunavut</option>
								<option value="on">Ontario</option>
								<option value="pei">Prince Edward Island</option>
								<option value="qc">Quebec</option>
								<option value="yk">Yukon</option>
							</select>
						</div>
						<img class="hr" src="img/calculator/hr.png" width="287" height="2"/>
						<div id="calculatorSliders">
							<div class="qlabel">
								<img src="img/calculator/three.png" alt="3"/><p>On average, how much do you spend monthly on:</p>
							</div>
							<div id="groceryInput" class="spendSlider">
								<h2 class="sliderlabel">Groceries</h2>
								<div class="slideHolder">
									<div id="groceryVal" class="slideVal"><p></p></div>
									<div class="sliderControl" id="grocerySlider"></div>
									<div class="rangeHolder">
										<p class="numMin rangenums">$0</p><p class="numMax rangenums">$1,000</p>
									</div>
								</div>
							</div>
							<div id="gasInput" class="spendSlider">
								<h2 class="sliderlabel">Gas</h2>
								<div class="slideHolder">
									<div id="gasVal" class="slideVal"><p></p></div>
									<div class="sliderControl" id="gasSlider"></div>
									<div class="rangeHolder">
										<p class="numMin rangenums">$0</p><p class="numMax rangenums">$1,000</p>
									</div>
								</div>
							</div>
							<div id="pharmacyInput" class="spendSlider">
								<h2 class="sliderlabel">Pharmacy</h2>
								<div class="slideHolder">
									<div id="pharmacyVal" class="slideVal"><p></p></div>
									<div class="sliderControl" id="pharmacySlider"></div>
									<div class="rangeHolder">
										<p class="numMin rangenums">$0</p><p class="numMax rangenums">$1,000</p>
									</div>
								</div>
							</div>
							<div id="hardwareInput" class="spendSlider">
								<h2 class="sliderlabel">Hardware</h2>
								<div class="slideHolder">
									<div id="hardwareVal" class="slideVal"><p></p></div>
									<div class="sliderControl" id="hardwareSlider"></div>
									<div class="rangeHolder">
										<p class="numMin rangenums">$0</p><p class="numMax rangenums">$1,000</p>
									</div>
								</div>
							</div>
							<div id="liquorInput" class="spendSlider">
								<h2 class="sliderlabel">Liquor</h2>
								<div class="slideHolder">
									<div id="liquorVal" class="slideVal"><p></p></div>
									<div class="sliderControl" id="liquorSlider"></div>
									<div class="rangeHolder">
										<p class="numMin rangenums">$0</p><p class="numMax rangenums">$1,000</p>
									</div>
								</div>
							</div>
							<div id="otherInput" class="spendSlider">
								<h2 class="sliderlabel">Other Purchases</h2>
								<div class="slideHolder">
									<div id="otherVal" class="slideVal"><p></p></div>
									<div class="sliderControl" id="otherSlider"></div>
									<div class="rangeHolder">
										<p class="numMin rangenums">$0</p><p class="numMax rangenums">$1,000</p>
									</div>
								</div>
							</div>
						</div>
						<img class="hr" src="img/calculator/hr.png" width="287" height="2"/>
						<div class="qlabel">
							<img src="img/calculator/four.png" class="noWrapq4" alt="4"/><p id="spendqblurb">How much of the above spend is at AIR&nbsp;MILES&nbsp;Sponsors?</p>
						</div>
						<select id="oftenshop">
							
							<option value="100">All (100%)</option>
							<option value="75">Most (75%)</option>
							<option value="50">About Half (50%)</option>
							<option value="25">Some (25%)</option>
							<option value="0">None (0%)</option>
						</select>
					</div>
					<div id="barGraph">
						<img  src="img/calculator/bargraphTitle_en.png" id="bargraphTitle" width="260" height="24" alt="YOUR AIR MILES REWARD MILES PER YEAR">
							<div id="barChartHolder" class="barHolder clearfix">
								<div class="barchart bar1">
									<span class="bartext"><p>11</p></span>	
								</div>
								<img class="barchart vrplus" width="3" height="324" src="img/calculator/vr.png"/>
								<div class="barchart bar2">
									<span class="bartext"><p>12</p></span>	
								</div>
								<img class="barchart vr" width="3" height="324" src="img/calculator/vr.png">
								<div class="barchart bar3">
									<span class="bartext"><p>13</p></span>
								</div>
							</div>
							<!--img id="amexNoFeeCards"/>
							<img id="amexFeeCards"/>
							<img id="bmoFeeCards"/>
							<img id="bmoNoFeeCards"/-->
							<div id="cardBarBase"><p>XXX</p></div>
					</div>
					<div class="amex" id="barAds">&nbsp;</div>
				</div>
				<div id="bmoCalcSalesLine" style="display:none;">
					<p>You will earn 25% more AIR MILES reward miles when you use your BMO AIR&nbsp;MILES MasterCard at Shell</p>
				</div>
				<div id="amexNoFeeCalcSalesLine" style="display:none;">
					<p>Earn 1 reward mile for every $15 in card purchases at AIR&nbsp;MILES Sponsors.<p>
				</div>
				<div id="amexFeeCalcSalesLine" style="display:none;">
					<p>Earn 1 reward mile for every $10 in card purchases at other eligible gas, grocery and drugstores.<p>
				</div>
			</div>
			<div id="calcSalesLeadout">
				<p>APPLY FOR THE <span id="cardNameDisplay"></span> AND YOU CAN START TO EARN!</p>
				<a href="#" target="_blank"><img src="img/calculator/learnMore_en.png" alt="learn more"/></a>
			</div>
		</div>

		<? include("includes/footer.html"); ?>
		<div class="centerit bmoLegal legalfooter" style="display: none;">
			<p>
				The reward miles earned on a BMO<sup>&reg;&dagger;</sup> AIR&nbsp;MILES World Mastercard<sup>&reg;*</sup> are at a rate of 1 reward mile for $15 spend in all categories. 1.25X reward miles will also apply on the portion of spend at Shell.  Cardholders will also earn 2X reward miles at National Car Rental and Alamo Rent A Car.
			</p>
			<p>
				The reward miles earned on a BMO<sup>&reg;&dagger;</sup> AIR&nbsp;MILES Mastercard<sup>&reg;*</sup> are at a rate of 1 reward mile for $20 spend in all categories.  1.25X reward miles will also apply on the portion of spend at Shell.  Cardholders will also earn 1.5X reward miles at National Car Rental and Alamo Rent A Car.
			</p>
			<p>
				<sup>&dagger;&dagger;</sup> If you have the BMO World AIR&nbsp;MILES Mastercard, when you redeem AIR&nbsp;MILES reward miles for a flight or AIR&nbsp;MILES My planet Reward, you will receive a 25% discount from the number of AIR&nbsp;MILES reward miles you would ordinarily require.  This benefit does not apply to Cash + Miles Rewards.  For flight redemptions, there are no blackout periods.  This benefit does not apply to the cash portion of the flight redemption (such as fuel surcharges, airport improvement fees and booking fees) or to the flight component of package vacations and cruises.  This benefit cannot be combined with any other offer.
			</p>
		</div>
		<div class="centerit amexFeeLegal legalfooter" style="display: none;">
			<p>
				 Examples are simplified for illustrative purposes. Earn rates and calculation varies by Sponsor and transaction. Visit <a href="http://www.americanexpress.ca/airmilessponsors" target="_blank">www.americanexpress.ca/airmilessponsors</a> to see list of AIR&nbsp;MILES<sup>&reg;</sup> Sponsors. For more information on the AIR&nbsp;MILES Program please visit <a href="http://www.airmiles.ca" target="_blank">www.airmiles.ca</a>.
			</p>
			<p>
				All Rewards offered are subject to the Terms and Conditions of the AIR&nbsp;MILES<sup>&reg;</sup> Reward Program, are subject to change and may be withdrawn without notice. To redeem for Travel and/or Merchandise Rewards, you must have accumulated sufficient AIR&nbsp;MILES reward miles in your Dream Balance. Some restrictions may apply. Quantities may be limited. Collectors must pay taxes, fuel surcharges and other applicable charges and fees on air, hotel and car rental Rewards. Travel Rewards may be subject to a minimum advance booking and availability from participating Suppliers. No cancellations, exchange or refunds for tickets, certificates or merchandise once booked or ordered. For complete details, please visit <a href="http://www.airmiles.ca" target="_blank">www.airmiles.ca</a>.
			</p>
			<p>
				If you spend $100 per month on Groceries and &Prime;Most (75%)&Prime; of your monthly grocery purchases were at AIR MILES Sponsors, we would multiply $100 per month by 12 months by 75% by the Sponsor earn rate in your region to arrive at the annual reward miles on your AIR&nbsp;MILES Collector Card. 
			</p>
			<p>
				If you use your American&nbsp;Express<sup>&reg;*</sup> AIR&nbsp;MILES<sup>&reg;</sup> Platinum Credit Card to make the purchase, we would multiply $100 per month by 12 months by the earn rate on the card (1 reward mile for every $10)
			</p>
			<p>
				e.g. If 75% of a $100 monthly spend on groceries, at Alberta, is at AIR MILES Sponsors, this would translate to:
			</p>
			<p>
				$100 x 12 x 75% x 1/$20 = 45 AIR MILES reward miles
			</p>
			<p>
				$100 x 12 x 1/$10 = 120 AIR MILES reward miles
			</p>
			<p>
				Total = 165 AIR MILES reward miles
			</p>
			<h3>Note:</h3>
			<p>
				Earn rate for &Prime;Pharmacy&Prime; in Ontario is illustrated at 1:15 however earn rates vary by Sponsor (Rexall, Safeway Pharmacy and Jean Coutu).  Earn rate for &Prime;Pharmacy&Prime; in New Brunswick is illustrated at 1:10 however earn rates vary by Sponsor (Jean Coutu, Pharmasave and Lawtons). Please refer to <a href="http://www.airmiles.ca" target="_blank">www.airmiles.ca</a> for full details. 
			</p>
			<p>
				<sup>&reg;</sup>: Used by Amex Bank of Canada under license from American Express.
			</p>
			<p>
				<sup>&reg;*&trade;</sup>: Trademarks of AIR MILES International Trading B.V. Used under license by LoyaltyOne, Inc. and Amex Bank of Canada.
			</p>
			
			<p>
				The reward miles earned on an American Express<sup>&reg;*</sup> AIR&nbsp;MILES Platinum Credit Card on all grocery, gas and pharmacy spend are at a rate of 1 reward mile for every $10 spend.  For all other categories in which AIR&nbsp;MILES Sponsors are present, annual spend will be multiplied by the portion that is spent at AIR&nbsp;MILES Sponsors (i.e. 75% for &Prime;frequently&Prime;)  and that portion of the spend will be based on an earn rate of 1 reward mile for every $10. For the other portion (i.e. 25% of spend not at Sponsors), an earn rate of 1 reward mile for every $15 spend will apply. For categories where no Sponsors are present, an earn rate of 1 reward mile for every $15 will apply.
			</p>
		</div>
		<div class="centerit amexLegal legalfooter" style="display: block;">
			<p>
				Examples are simplified for illustrative purposes.Earn rates and calculation varies by Sponsor and transaction. Visit <a href="http://www.americanexpress.ca/airmilessponsors" target="_blank">www.americanexpress.ca/airmilessponsors</a> to see list of AIR&nbsp;MILES<sup>&reg;</sup> Sponsors. For more information on the AIR&nbsp;MILES Program please visit <a href="http://www.airmiles.ca" target="_blank">www.airmiles.ca</a>.
			</p>
			<p>
				All Rewards offered are subject to the Terms and Conditions of the AIR&nbsp;MILES<sup>&reg;</sup> Reward Program, are subject to change and may be withdrawn without notice. To redeem for Travel and/or Merchandise Rewards, you must have accumulated sufficient AIR&nbsp;MILES reward miles in your Dream Balance. Some restrictions may apply. Quantities may be limited. Collectors must pay taxes, fuel surcharges and other applicable charges and fees on air, hotel and car rental Rewards. Travel Rewards may be subject to a minimum advance booking and availability from participating Suppliers. No cancellations, exchange or refunds for tickets, certificates or merchandise once booked or ordered. For complete details, please visit <a href="http://www.airmiles.ca" target="_blank">www.airmiles.ca</a>.
			</p>
			<p>
				Reward mile calculations are based on a 1:$15 or 1:$20 Earn Rate. Reward miles are only issued in whole numbers and will only be issued when and if an incremental reward mile is earned in accordance with the applicable Earn Rate. Any remaining dollar amount that is less than the applicable Earn Rate for the issuance of one reward miles at the end of the billing period will be disregarded and will not be accumulated or included in the calculation of reward miles for the next billing period.
			</p>
			<p>
				If you spend $100 per month on Groceries and &Prime;Most (75%)&Prime; of your monthly grocery purchases were at AIR&nbsp;MILES Sponsors, we would multiply $100 per month by 12 months by 75% by the Sponsor earn rate in your region to arrive at the annual reward miles on your AIR&nbsp;MILES Collector Card. 
			</p>
			<p>
				If you use your American Express<sup>&reg;*</sup> AIR&nbsp;MILES<sup>&reg;</sup> Credit Card to make the purchase, we would multiply $100 per month by 12 months by the earn rate on the card (1 reward mile for every $15 at Sponsors and 1 reward mile for every $20 everywhere else).
			</p>
			<p>
				e.g. If 75% of a $100 monthly spend on groceries, in Alberta, is at AIR&nbsp;MILES Sponsors, this would translate to:
			</p>
			<p>
				$100 x 12 x 75% x 1/$20 = 45 AIR&nbsp;MILES reward miles
			</p>
			<p>
				$100 x 12 x 75% x 1/$15 + $100 x 12 x 25% x 1/$20 = 70 AIR&nbsp;MILES reward miles

			</p>
			<p>
				Total = 115 AIR&nbsp;MILES reward miles
			</p>
			<h3>
				NOTE:
			</h3>
			<p>
				Earn rate for &Prime;Pharmacy&Prime; in Ontario is illustrated at 1:15 however earn rates vary by Sponsor (Rexall, Safeway Pharmacy and Jean Coutu).Earn rate for &Prime;Pharmacy&Prime; in New Brunswick is illustrated at 1:10 however earn rates vary by Sponsor (Jean Coutu, Pharmasave and Lawtons). Please refer to <a href="http://www.airmiles.ca" target="_blank">www.airmiles.ca</a> for full details.
			</p>
			<p>
				<sup>&reg;</sup>: Used by Amex Bank of Canada under license from American Express.
			</p>
			<p>
				<sup>&reg;*&trade;</sup>: Trademarks of AIR MILES International Trading B.V. Used under license by LoyaltyOne, Inc. and Amex Bank of Canada.
			</p>
			<p>
				Sponsor earn rates are as follows:
			</p>
			<ul class="provinceLegal" id="bc_legalRates">
				<li>Groceries: 1 reward mile for every $20</li>
				<li>Pharmacy: 7 reward miles for every $20</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: 1 reward miles for every $20</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="ab_legalRates">
				<li>Groceries: 1 reward mile for every $20</li>
				<li>Pharmacy: 7 reward miles for every $20</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: no base reward miles</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="sk_legalRates">
				<li>Groceries: 1 reward mile for every $20</li>
				<li>Pharmacy: 7 reward miles for every $20</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: no base reward miles</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="mb_legalRates">
				<li>Groceries: 1 reward mile for every $20</li>
				<li>Pharmacy: 7 reward miles for every $20</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: 1 reward miles for every $25 spent</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="on_legalRates">
				<li>Groceries: 1 reward mile for every $20.</li>
				<li>Pharmacy: 1 reward mile for every $15. Please note that earn rates at our Ontario pharmacy Sponsors (Rexall, Safeway Pharmacy and Jean Coutu) vary</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward mile for every $20</li>
				<li>Liquor: 1 reward miles for every $30 spent</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="qc_legalRates">
				<li>Groceries: 1 reward mile for every $20.</li> 
				<li>Pharmacy: 1 reward mile for every $15</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: no base reward miles</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="nb_legalRates">
				<li>Groceries: 1 reward mile for every $20.</li>
				<li>Pharmacy: 1 reward mile for every $10.  Please note that earn rates at our New Brunswick pharmacy Sponsors (Jean Coutu, Pharmasave and Lawtons) vary</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: no base reward miles</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="ns_legalRates">
				<li>Groceries: 1 reward mile for every $20.</li> 
				<li>Pharmacy: 1 reward mile for every $10.</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: 1 reward miles for every $30 spent</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="pei_legalRates">
				<li>Groceries: 1 reward mile for every $20.</li>
				<li>Pharmacy: 1 reward mile for every $10.</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: no base reward miles</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="nfld_legalRates">
				<li>Groceries: 1 reward mile for every $20.</li>
				<li>Pharmacy: 1 reward mile for every $10.</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: 1 reward miles for every $25</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="nu_legalRates">
				<li>Groceries: 1 reward mile for every $20</li>
				<li>Pharmacy: 7 reward miles for every $20</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: no base reward miles</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="nwt_legalRates">
				<li>Groceries: 1 reward mile for every $20</li>
				<li>Pharmacy: 7 reward miles for every $20</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: no base reward miles</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<ul class="provinceLegal" id="yk_legalRates">
				<li>Groceries: 1 reward mile for every $20</li>
				<li>Pharmacy: 7 reward miles for every $20</li>
				<li>Gas: 1 reward mile for first $20 spent, and 1 reward mile for each additional $30</li>
				<li>Hardware: 1 reward miles for every $20</li>
				<li>Liquor: no base reward miles</li>
				<li>Other Purchases: no base reward miles</li>
			</ul>
			<p>
				For the reward miles earned on an American Express<sup>&reg;*</sup> AIR&nbsp;MILES Credit Card, annual spend in all categories where an AIR&nbsp;MILES Sponsor is present will be multiplied by the portion that is spent at AIR&nbsp;MILES Sponsors (i.e. 75% for &Prime;frequently&Prime;)  and that portion of the spend will be based on a rate of 1 reward mile for every $15. For the other portion (i.e. 25% of spend not at Sponsors), an earn rate of 1 reward mile for every $20 will apply. For categories where no Sponsors are present, an earn rate of 1 reward mile for every $20 will apply.
			</p>
		</div>
	</div>
	 <!--script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js"></script-->
	<script>!window.jQuery && document.write(unescape('%3Cscript src="js/libs/jquery-1.4.2.js"%3E%3C/script%3E'))</script>
    
	<!-- scripts concatenated and minified via ant build script-->
	<script src="js/libs/jquery.cookie.js"></script>
	<script src="js/plugins.js"></script>
	<script src="js/script.js"></script>
	<script src="js/libs/GoogleAnalytics.js"></script>
	<!-- end concatenated and minified scripts-->	
</body>
</html>