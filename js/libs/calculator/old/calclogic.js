
function CalculatorDisplay(){
	this.provinceObject;
	this.displayPercentage;
	this.currentCard;
	this.spend = {};
	this.spend.grocery = groceryRange[2];
	this.spend.gas = gasRange[2];
	this.spend.pharma = pharmacyRange[2];
	this.spend.hardware = hardwareRange[2];
	this.spend.liquor = liquorRange[2];
	this.spend.other = otherRange[2];
	this.cardDisplayList = [];
	this.cardsList = ["amexFee","amexNoFee","bmoFee","bmoNoFee"];
	this.sponsorLogos = {
		nfld:["sobeys.png","lawtons.png","shell.png","rona.png","nlc.png"],
		ns:["rona.png","pharmasave.png","lawtons.png","shell.png","rona.png","nslc.png"],
		nb:["sobeys.png","jeancoutu.png","pharmasave.png","lawtons.png","shell.png","rona.png"],
		pei:["sobeys.png","pharmasave.png","lawtons.png","shell.png","rona.png"],
		qc:["iga.png","pjc.png","shell.png","rona.png"],
		on:["metro.png","rexall.png","shell.png","rona.png","lcbo.png"],
		mb:["safeway.png","shell.png","rona.png","mlcc.png"],
		sk:["safeway.png","shell.png","rona.png"],
		ab:["safeway.png","shell.png","rona.png"],
		bc:["safeway.png","shell.png","rona.png"],
		yk:["safeway.png","shell.png","rona.png"],
		nwt:["safeway.png","shell.png","rona.png"],
		nu:["safeway.png","shell.png","rona.png"]
	};
	//
	this.resetDisplay = function(){
		this.currentCard = $("#cardSelect").val();
		this.updateChartClass();
		this.provinceObject = this.getProvinceObject();
		this.displayPercentage = this.findPercentage();
		this.generateValues();
	};
	this.updateSponsorLogos = function(){
		//console.log("the logos should change now");
		//console.log(this.sponsorLogos[$("#provdrop").val()]);
	}
	this.updateChartClass = function(){
		//console.log("the current card is: "+this.currentCard);
		for(var i=0;i<this.cardsList.length;i++){
			$("div#barChartHolder").removeClass(this.cardsList[i]);
		};
		$("div#barChartHolder").addClass(this.currentCard);
	};
	this.initCalculator = function(){
		this.currentCard = this.determineFirstShowCard();
		this.resetDisplay();
	};
	this.findPercentage = function(){
		return Number($("#oftenshop").val());
	};
	this.getProvinceObject = function(){
		return prov = eval($("#provdrop").val());
	};
	this.determineFirstShowCard = function(){
		var cardListLength = this.cardsList.length;
		var cardSelected = this.cardsList[Math.floor(Math.random()*cardListLength)];
		$("#cardSelect").val(cardSelected);
		return cardSelected;
	};
	this.amexRightColumn = function(){
		$("#barAds").removeClass("bmo");
		$("#barAds").addClass("amex");
	};
	this.bmoRightColumn = function(){
		$("#barAds").removeClass("amex");
		$("#barAds").addClass("bmo");
	};
	this.showAmexNoFeeSalesLine = function(){
		$("#bmoCalcSalesLine").css("display","none");
		$("#amexNoFeeCalcSalesLine").css("display","block");
		$("#amexFeeCalcSalesLine").css("display","none");
	};
	this.showAmexFeeSalesLine = function(){
		$("#bmoCalcSalesLine").css("display","none");
		$("#amexNoFeeCalcSalesLine").css("display","none");
		$("#amexFeeCalcSalesLine").css("display","block");
	};
	this.showBmoSalesLine = function(){
		$("#bmoCalcSalesLine").css("display","block");
		$("#amexNoFeeCalcSalesLine").css("display","none");
		$("#amexFeeCalcSalesLine").css("display","none");
	};
	this.showBmoLegal = function(){
		$(".bmoLegal").css("display","block");
		$(".amexLegal").css("display","none");
		$(".amexFeeLegal").css("display","none");
	};
	this.showAmexFeeLegal = function(){
		$(".bmoLegal").css("display","none");
		$(".amexLegal").css("display","none");
		$(".amexFeeLegal").css("display","block");
	};
	this.showAmexNoFeeLegal = function(){
		$(".bmoLegal").css("display","none");
		$(".amexLegal").css("display","block");
		$(".amexFeeLegal").css("display","none");
	};
	this.generateValues = function(){
		//console.log("is generat values called twice?");
		this.displayPercentage = this.findPercentage();
		var pv = this.provinceObject;
		var pc = this.displayPercentage;
		var baseMiles = pv.findBaseNumbersByPercentage(pv.findBaseValues().totalMiles,this.displayPercentage);
		this.cardDisplayList = [];
		//finding the max
		pv.findMaxMiles(groceryRange[1]);
		var maxAmt = pv.maxMiles.base.totalMiles+pv.maxMiles.sponsor.totalMiles;
		this.cardDisplayList.push({card:"max",value:maxAmt});
		this.cardDisplayList.push({card:"base",value:baseMiles});
		//
		switch (this.currentCard){
			case "amexFee":
				this.amexRightColumn();
				pv.findAmexFeeMiles();
				var amt = pv.findNumbersByPercentage(pv.amexFeeMiles,this.displayPercentage);
				this.cardDisplayList.push({card:"amexFee",value:amt});
				if(lang=="fr"){
					$("#calcSalesLeadout p span#cardNameDisplay").html("Carte de cr&eacute;dit de Platine AIR MILES<sup>md</sup> American Express<sup>MD<sup>*");
					$("#calcSalesLeadout a").attr("href","http://www.americanexpress.com/canada/fr/am_dual_RTP_515_fr.shtml?CPID=100065368");
				}else{
					$("#calcSalesLeadout p span#cardNameDisplay").html("American Express<sup>&reg;</sup>* AIR MILES Platinum Credit Card");
					$("#calcSalesLeadout a").attr("href","http://www.americanexpress.com/canada/en/am_dual_RTP_515_en.shtml?CPID=100065469");
				}
				this.showAmexFeeSalesLine();
				this.showAmexFeeLegal();
				break;
			case "amexNoFee":
				this.amexRightColumn();
				pv.findAmexNoFeeMiles();
				var amt = pv.findNumbersByPercentage(pv.amexNoFeeMiles, this.displayPercentage);
				this.cardDisplayList.push({card:"amexNoFee",value:amt});
				if(lang=="fr"){
					$("#calcSalesLeadout p span#cardNameDisplay").html("Carte de cr&eacute;dit AIR MILES<sup>md</sup> American Express<sup>MD</sup>*");
					$("#calcSalesLeadout a").attr("href","http://www.americanexpress.com/canada/en/am_dual_RTP_515_en.shtml?CPID=100065469");
				}else{
					$("#calcSalesLeadout p span#cardNameDisplay").html("American Express<sup>®*</sup> AIR MILES Credit Card");
					$("#calcSalesLeadout a").attr("href","http://www.americanexpress.com/canada/en/am_dual_RTP_515_en.shtml?CPID=100065469");
				}
				this.showAmexNoFeeSalesLine();
				this.showAmexNoFeeLegal();
				break;
			case "bmoNoFee":
				this.bmoRightColumn();
				pv.findBmoFeeMiles();
				pv.findBmoNoFeeMiles();
				var amt1 = pv.findNumbersByPercentage(pv.bmoFeeMiles,this.displayPercentage);
				this.cardDisplayList.push({card:"bmoFee",value:amt1});
				var amt2 = pv.findNumbersByPercentage(pv.bmoNoFeeMiles,this.displayPercentage);
				this.cardDisplayList.push({card:"bmoNoFee",value:amt2});
				if(lang=="fr"){
					$("#calcSalesLeadout p span#cardNameDisplay").html("Carte MasterCard<sup>MD</sup>* BMO<sup>MD&dagger;</sup> AIR MILES");
					$("#calcSalesLeadout a").attr("href","http://www.bmo.com/accueil/particuliers/services-bancaires/cartes-de-credit/air-miles/carte-mastercard-bmo-airmiles");
				}else{
					$("#calcSalesLeadout p span#cardNameDisplay").html("BMO<sup>&reg;&dagger;</sup> AIR MILES Mastercard<sup>&reg;*</sup>");
					$("#calcSalesLeadout a").attr("href"," http://www.bmo.com/home/personal/banking/credit-cards/airmiles/bmo-airmiles-mastercard");
				}
				this.showBmoSalesLine();
				this.showBmoLegal();
				break;
			case "bmoFee":
				//console.log("how often do I show bmo no fee");
				this.bmoRightColumn();
				pv.findBmoFeeMiles();
				pv.findBmoNoFeeMiles();
				var amt1 = pv.findNumbersByPercentage(pv.bmoNoFeeMiles,this.displayPercentage);
				this.cardDisplayList.push({card:"bmoNoFee",value:amt1});
				var amt2 = pv.findNumbersByPercentage(pv.bmoFeeMiles,this.displayPercentage);
				this.cardDisplayList.push({card:"bmoFee",value:amt2});
				if(lang=="fr"){
					$("#calcSalesLeadout p span#cardNameDisplay").html("Carte MasterCard<sup>MD</sup>* BMO<sup>MD&dagger;</sup> AIR MILES World");
					$("#calcSalesLeadout a").attr("href","http://www.bmo.com/accueil/particuliers/services-bancaires/cartes-de-credit/air-miles/carte-mastercard-bmo-airmiles-world");
				}else{
					$("#calcSalesLeadout p span#cardNameDisplay").html("BMO<sup>&reg;&dagger;</sup> AIR MILES World Mastercard<sup>&reg;*</sup>");
					$("#calcSalesLeadout a").attr("href","http://www.bmo.com/home/personal/banking/credit-cards/airmiles/bmo-world-airmiles-mastercard");
				}
				this.showBmoSalesLine();
				break;
		};
		return this.cardDisplayList;
	};
}