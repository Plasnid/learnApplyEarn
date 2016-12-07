function Province(base, amexfee_sponsor, amexfee_nonsponsor, amexnofee_sponsor, amexnofee_nonsponsor, bmofee_sponsor, bmofee_nonsponsor, bmonofee_sponsor, bmonofee_nonsponsor){
	//initial arrays of values here
	this.base = base;
	//amex specific
	this.amexfee_sponsor = amexfee_sponsor;
	this.amexfee_nonsponsor =  amexfee_nonsponsor;
	this.amexnofee_sponsor = amexnofee_sponsor;
	this.amexnofee_nonsponsor = amexnofee_nonsponsor;
	//bmo specific
	this.bmofee_sponsor = bmofee_sponsor;
	this.bmofee_nonsponsor =  bmofee_nonsponsor;
	this.bmonofee_sponsor = bmonofee_sponsor;
	this.bmonofee_nonsponsor = bmonofee_nonsponsor;
	//important values here
	this.baseMiles;
	this.amexFeeMiles;
	this.amexNoFeeMiles;
	this.bmoFeeMiles;
	this.bmoNoFeeMiles;
	//
	this.maxMiles;
	this.maxcard_sponsor = amexfee_sponsor;
	this.maxcard_nonsponsor = amexfee_nonsponsor;
	//
	this.findBaseGasMiles = function(spend, gasfirst, gasafter){
		var spendVal = spend;
		var numMiles = 0;
		if(spendVal>=gasfirst){
			spendVal-=gasfirst;
			numMiles+=1;
		}
		if(spendVal>=gasafter){
			numMiles+=this.getMiles(spendVal,gasafter);
		}
		return numMiles;
	};
	this.getMiles = function(spendVal,ratio){
		var numMiles = Math.floor(spendVal*(1/ratio));
		if(ratio==null){
			numMiles = 0;
		}
		return numMiles;
	};
	this.findBaseValues = function(){
		var milesReturn = {};
		milesReturn.grocery = this.getMiles(calculator.spend.grocery,this.base.grocery);
		milesReturn.pharma = this.getMiles(calculator.spend.pharma,this.base.pharma);
		milesReturn.hardware = this.getMiles(calculator.spend.hardware,this.base.hardware);
		milesReturn.gas = this.findBaseGasMiles(calculator.spend.gas, this.base.gasfirst,this.base.gasafter);
		milesReturn.liquor = this.getMiles(calculator.spend.liquor,this.base.liquor);
		milesReturn.other = this.getMiles(calculator.spend.other,this.base.other);
		milesReturn.totalMiles = milesReturn.grocery+milesReturn.pharma+milesReturn.hardware+milesReturn.gas+milesReturn.liquor+milesReturn.other;
		this.baseMiles = milesReturn;
		return milesReturn;
	};
	this.findAmexFeeMiles = function(){
		var milesReturn = {};
		milesReturn.sponsor = {};
		milesReturn.sponsor.grocery = this.getMiles(calculator.spend.grocery,this.amexfee_sponsor.grocery);
		milesReturn.sponsor.pharma = this.getMiles(calculator.spend.pharma,this.amexfee_sponsor.pharma);
		milesReturn.sponsor.hardware = this.getMiles(calculator.spend.hardware,this.amexfee_sponsor.hardware);
		milesReturn.sponsor.gas = this.getMiles(calculator.spend.gas,this.amexfee_sponsor.gas);
		milesReturn.sponsor.liquor = this.getMiles(calculator.spend.liquor,this.amexfee_sponsor.liquor);
		milesReturn.sponsor.other = this.getMiles(calculator.spend.other,this.amexfee_sponsor.other);
		milesReturn.sponsor.totalMiles = milesReturn.sponsor.grocery+milesReturn.sponsor.pharma+milesReturn.sponsor.hardware+milesReturn.sponsor.gas+milesReturn.sponsor.liquor+milesReturn.sponsor.other;
		milesReturn.nonsponsor = {};
		milesReturn.nonsponsor.grocery = this.getMiles(calculator.spend.grocery,this.amexfee_nonsponsor.grocery);
		milesReturn.nonsponsor.pharma = this.getMiles(calculator.spend.pharma,this.amexfee_nonsponsor.pharma);
		milesReturn.nonsponsor.hardware = this.getMiles(calculator.spend.hardware,this.amexfee_nonsponsor.hardware);
		milesReturn.nonsponsor.gas = this.getMiles(calculator.spend.gas,this.amexfee_nonsponsor.gas);
		milesReturn.nonsponsor.liquor = this.getMiles(calculator.spend.liquor,this.amexfee_nonsponsor.liquor);
		milesReturn.nonsponsor.other = this.getMiles(calculator.spend.other,this.amexfee_nonsponsor.other);
		milesReturn.nonsponsor.totalMiles = milesReturn.nonsponsor.grocery+milesReturn.nonsponsor.pharma+milesReturn.nonsponsor.hardware+milesReturn.nonsponsor.gas+milesReturn.nonsponsor.liquor+milesReturn.nonsponsor.other;
		this.amexFeeMiles = milesReturn;
		return milesReturn;
	};
	this.findAmexNoFeeMiles = function(){
		var milesReturn = {};
		milesReturn.sponsor = {};
		milesReturn.sponsor.grocery = this.getMiles(calculator.spend.grocery,this.amexnofee_sponsor.grocery);
		milesReturn.sponsor.pharma = this.getMiles(calculator.spend.pharma,this.amexnofee_sponsor.pharma);
		milesReturn.sponsor.hardware = this.getMiles(calculator.spend.hardware,this.amexnofee_sponsor.hardware);
		milesReturn.sponsor.gas = this.getMiles(calculator.spend.gas,this.amexnofee_sponsor.gas);
		milesReturn.sponsor.liquor = this.getMiles(calculator.spend.liquor,this.amexnofee_sponsor.liquor);
		milesReturn.sponsor.other = this.getMiles(calculator.spend.other,this.amexnofee_sponsor.other);
		milesReturn.sponsor.totalMiles = milesReturn.sponsor.grocery+milesReturn.sponsor.pharma+milesReturn.sponsor.hardware+milesReturn.sponsor.gas+milesReturn.sponsor.liquor+milesReturn.sponsor.other;
		milesReturn.nonsponsor = {};
		milesReturn.nonsponsor.grocery = this.getMiles(calculator.spend.grocery,this.amexnofee_nonsponsor.grocery);
		milesReturn.nonsponsor.pharma = this.getMiles(calculator.spend.pharma,this.amexnofee_nonsponsor.pharma);
		milesReturn.nonsponsor.hardware = this.getMiles(calculator.spend.hardware,this.amexnofee_nonsponsor.hardware);
		milesReturn.nonsponsor.gas = this.getMiles(calculator.spend.gas,this.amexnofee_nonsponsor.gas);
		milesReturn.nonsponsor.liquor = this.getMiles(calculator.spend.liquor,this.amexnofee_nonsponsor.liquor);
		milesReturn.nonsponsor.other = this.getMiles(calculator.spend.other,this.amexnofee_nonsponsor.other);
		milesReturn.nonsponsor.totalMiles = milesReturn.nonsponsor.grocery+milesReturn.nonsponsor.pharma+milesReturn.nonsponsor.hardware+milesReturn.nonsponsor.gas+milesReturn.nonsponsor.liquor+milesReturn.nonsponsor.other;
		this.amexNoFeeMiles = milesReturn;
		return milesReturn;
	};
	//now for bmo
	this.findBmoFeeMiles = function(sponsorPercent){
		var milesReturn = {};
		milesReturn.sponsor = {};
		milesReturn.sponsor.grocery = this.getMiles(calculator.spend.grocery,this.bmofee_sponsor.grocery);
		milesReturn.sponsor.pharma = this.getMiles(calculator.spend.pharma,this.bmofee_sponsor.pharma);
		milesReturn.sponsor.hardware = this.getMiles(calculator.spend.hardware,this.bmofee_sponsor.hardware);
		milesReturn.sponsor.gas = this.getMiles(calculator.spend.gas,this.bmofee_sponsor.gas)*1.25;//this.baseMiles.gas*1.25;//
		milesReturn.sponsor.liquor = this.getMiles(calculator.spend.liquor,this.bmofee_sponsor.liquor);
		milesReturn.sponsor.other = this.getMiles(calculator.spend.other,this.bmofee_sponsor.other);
		milesReturn.sponsor.totalMiles = milesReturn.sponsor.grocery+milesReturn.sponsor.pharma+milesReturn.sponsor.hardware+milesReturn.sponsor.gas+milesReturn.sponsor.liquor+milesReturn.sponsor.other;
		milesReturn.nonsponsor = {};
		milesReturn.nonsponsor.grocery = this.getMiles(calculator.spend.grocery,this.bmofee_nonsponsor.grocery);
		milesReturn.nonsponsor.pharma = this.getMiles(calculator.spend.pharma,this.bmofee_nonsponsor.pharma);
		milesReturn.nonsponsor.hardware = this.getMiles(calculator.spend.hardware,this.bmofee_nonsponsor.hardware);
		milesReturn.nonsponsor.gas = this.getMiles(calculator.spend.gas,this.bmofee_nonsponsor.gas);
		milesReturn.nonsponsor.liquor = this.getMiles(calculator.spend.liquor,this.bmofee_nonsponsor.liquor);
		milesReturn.nonsponsor.other = this.getMiles(calculator.spend.other,this.bmofee_nonsponsor.other);
		milesReturn.nonsponsor.totalMiles = milesReturn.nonsponsor.grocery+milesReturn.nonsponsor.pharma+milesReturn.nonsponsor.hardware+milesReturn.nonsponsor.gas+milesReturn.nonsponsor.liquor+milesReturn.nonsponsor.other;
		this.bmoFeeMiles = milesReturn;
		return milesReturn;
	};
	this.findBmoNoFeeMiles = function(sponsorPercent){
		var milesReturn = {};
		milesReturn.sponsor = {};
		milesReturn.sponsor.grocery = this.getMiles(calculator.spend.grocery,this.bmonofee_sponsor.grocery);
		milesReturn.sponsor.pharma = this.getMiles(calculator.spend.pharma,this.bmonofee_sponsor.pharma);
		milesReturn.sponsor.hardware = this.getMiles(calculator.spend.hardware,this.bmonofee_sponsor.hardware);
		milesReturn.sponsor.gas = this.getMiles(calculator.spend.gas,this.bmonofee_sponsor.gas)*1.25;//this.baseMiles.gas*1.25;//
		milesReturn.sponsor.liquor = this.getMiles(calculator.spend.liquor,this.bmonofee_sponsor.liquor);
		milesReturn.sponsor.other = this.getMiles(calculator.spend.other,this.bmonofee_sponsor.other);
		milesReturn.sponsor.totalMiles = milesReturn.sponsor.grocery+milesReturn.sponsor.pharma+milesReturn.sponsor.hardware+milesReturn.sponsor.gas+milesReturn.sponsor.liquor+milesReturn.sponsor.other;
		milesReturn.nonsponsor = {};
		milesReturn.nonsponsor.grocery = this.getMiles(calculator.spend.grocery,this.bmonofee_nonsponsor.grocery);
		milesReturn.nonsponsor.pharma = this.getMiles(calculator.spend.pharma,this.bmonofee_nonsponsor.pharma);
		milesReturn.nonsponsor.hardware = this.getMiles(calculator.spend.hardware,this.bmonofee_nonsponsor.hardware);
		milesReturn.nonsponsor.gas = this.getMiles(calculator.spend.gas,this.bmonofee_nonsponsor.gas);
		milesReturn.nonsponsor.liquor = this.getMiles(calculator.spend.liquor,this.bmonofee_nonsponsor.liquor);
		milesReturn.nonsponsor.other = this.getMiles(calculator.spend.other,this.bmonofee_nonsponsor.other);
		milesReturn.nonsponsor.totalMiles = milesReturn.nonsponsor.grocery+milesReturn.nonsponsor.pharma+milesReturn.nonsponsor.hardware+milesReturn.nonsponsor.gas+milesReturn.nonsponsor.liquor+milesReturn.nonsponsor.other;
		this.bmoNoFeeMiles = milesReturn;
		return milesReturn;
	};
	this.findBaseNumbersByPercentage = function(baseTotal, salesPercent){
		return Math.floor(baseTotal*(salesPercent/100));
	};
	this.findMaxMiles = function(maxSpend){
		var milesReturn = {};
		milesReturn.sponsor = {};
		milesReturn.sponsor.grocery = this.getMiles(maxSpend,this.maxcard_sponsor.grocery);
		milesReturn.sponsor.pharma = this.getMiles(maxSpend,this.maxcard_sponsor.pharma);
		milesReturn.sponsor.hardware = this.getMiles(maxSpend,this.maxcard_sponsor.hardware);
		milesReturn.sponsor.gas = this.getMiles(maxSpend,this.maxcard_sponsor.gas);
		milesReturn.sponsor.liquor = this.getMiles(maxSpend,this.maxcard_sponsor.liquor);
		milesReturn.sponsor.other = this.getMiles(maxSpend,this.maxcard_sponsor.other);
		milesReturn.sponsor.totalMiles = milesReturn.sponsor.grocery+milesReturn.sponsor.pharma+milesReturn.sponsor.hardware+milesReturn.sponsor.gas+milesReturn.sponsor.liquor+milesReturn.sponsor.other;
		milesReturn.nonsponsor = {};
		milesReturn.nonsponsor.grocery = this.getMiles(maxSpend,this.maxcard_nonsponsor.grocery);
		milesReturn.nonsponsor.pharma = this.getMiles(maxSpend,this.maxcard_nonsponsor.pharma);
		milesReturn.nonsponsor.hardware = this.getMiles(maxSpend,this.maxcard_nonsponsor.hardware);
		milesReturn.nonsponsor.gas = this.getMiles(maxSpend,this.maxcard_nonsponsor.gas);
		milesReturn.nonsponsor.liquor = this.getMiles(maxSpend,this.maxcard_nonsponsor.liquor);
		milesReturn.nonsponsor.other = this.getMiles(maxSpend,this.maxcard_nonsponsor.other);
		milesReturn.nonsponsor.totalMiles = milesReturn.nonsponsor.grocery+milesReturn.nonsponsor.pharma+milesReturn.nonsponsor.hardware+milesReturn.nonsponsor.gas+milesReturn.nonsponsor.liquor+milesReturn.nonsponsor.other;
		milesReturn.base = {};
		milesReturn.base.grocery = this.getMiles(maxSpend,this.base.grocery);
		milesReturn.base.pharma = this.getMiles(maxSpend,this.base.pharma);
		milesReturn.base.hardware = this.getMiles(maxSpend,this.base.hardware);
		milesReturn.base.gas = this.getMiles(maxSpend,this.base.gas);
		milesReturn.base.liquor = this.getMiles(maxSpend,this.base.liquor);
		milesReturn.base.other = this.getMiles(maxSpend,this.base.other);
		milesReturn.base.totalMiles = milesReturn.base.grocery+milesReturn.base.pharma+milesReturn.base.hardware+milesReturn.base.gas+milesReturn.base.liquor+milesReturn.base.other;
		this.maxMiles = milesReturn;
		return milesReturn;

	};
	this.findNumbersByPercentage = function(card,salesPercent){
		var sponsorPercent = salesPercent/100;
		var nonsponsorPercent = 1-sponsorPercent;
		/*var sponsorPortion = Math.floor(card.sponsor.totalMiles*sponsorPercent);
		var nonSponsorPortion = Math.floor(card.nonsponsor.totalMiles*nonsponsorPercent);*/
		var sponsorPortion = card.sponsor.totalMiles*sponsorPercent;
		var nonSponsorPortion = card.nonsponsor.totalMiles*nonsponsorPercent;

		var finalValue = Math.floor(this.baseMiles.totalMiles*sponsorPercent)+sponsorPortion+nonSponsorPortion;
		//console.log("base total:"+this.baseMiles.totalMiles);
		//console.log("sponsor total:"+card.sponsor.totalMiles+" adjusted by "+sponsorPercent+": "+sponsorPortion);
		//console.log("nonsponsor total:"+card.nonsponsor.totalMiles+" adjusted by "+nonsponsorPercent+": "+nonSponsorPortion);
		//console.log("final value: "+finalValue);
		return finalValue;
	};
};