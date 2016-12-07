var barMax = 200;
var groceryRange = [0,1000,100,25];
var pharmacyRange = [0,1000,100,25];
var gasRange = [0,1000,100,25];
var hardwareRange = [0,1000,100,25];
var liquorRange = [0,1000,100,25];
var otherRange = [0,1000,100,25];
var calculator = new CalculatorDisplay();	
$(document).ready(function() {
	initSliders();
	initCalcDrops();
	calculator.initCalculator();
	updateBar();
});
function initCalcDrops(){
	$("#provdrop").bind("change",function(event){
		var selectedProvince = eval($(this).val());
		calculator.resetDisplay();
		updateBar();
	});
	$("#oftenshop").bind("change",function(event){
		calculator.generateValues();
		updateBar();
	});
	$("#cardSelect").bind("change",function(event){
		calculator.resetDisplay();
		updateBar();
	});
};
function prepValue(sliderVal){
	var retVal ="";
	if(lang=="en"){
	 	retVal = "$"+sliderVal;
		if(retVal.length>4){
			 txt2 = retVal.slice(0, 2) + "," + retVal.slice(2);
			 retVal = txt2;
		};
	}else{
		retVal = sliderVal+" $";
		if(retVal.length>5){
			 txt2 = retVal.slice(0, 1) + " " + retVal.slice(1);
			 retVal = txt2;
		};
	}
	return retVal;
}
function initSliders(){
	$("#grocerySlider").slider({
		animated:true,
		min:groceryRange[0],
		max:groceryRange[1], 
		value:groceryRange[2],
		step:groceryRange[3],
		create:function(event, ui){
			var dispVal = prepValue($("#grocerySlider").slider("value"));
			$("#groceryVal p").html(dispVal);
			var updateVal = String(100*(groceryRange[2]/groceryRange[1]))+"%";
			$("#groceryVal").css("left",updateVal);
		},
		slide:function(event, ui){
			var dispVal = prepValue(String(ui.value));
			$("#groceryVal p").html(dispVal);
			calculator.spend.grocery = ui.value;
			var updateVal = String(100*(ui.value/groceryRange[1]))+"%";
			$("#groceryVal").css("left",updateVal);
			updateBar();
		}
	});
	$("#pharmacySlider").slider({
		animated:true, 
		min:pharmacyRange[0],
		max:pharmacyRange[1], 
		value:pharmacyRange[2],
		step:pharmacyRange[3], 
		create:function(event, ui){
			var dispVal = prepValue($("#pharmacySlider").slider("value"));
			$("#pharmacyVal p").html(dispVal);
			var updateVal = String(100*(pharmacyRange[2]/pharmacyRange[1]))+"%";
			$("#pharmacyVal").css("left",updateVal);
		},
		slide:function(event, ui){
			var dispVal = prepValue(String(ui.value));
			$("#pharmacyVal p").html(dispVal);
			calculator.spend.pharma = ui.value;
			var updateVal = String(100*(ui.value/pharmacyRange[1]))+"%";
			$("#pharmacyVal").css("left",updateVal);
			updateBar();
		}
	});
	$("#gasSlider").slider({
		animated:true,
		min:gasRange[0], 
		max:gasRange[1], 
		value:gasRange[2],
		step:gasRange[3],
		create:function(event,ui){
			//$("#gasVal").html($("#gasSlider").slider("value"));
			var dispVal = prepValue($("#gasSlider").slider("value"));
			$("#gasVal p").html(dispVal);
			var updateVal = String(100*(gasRange[2]/gasRange[1]))+"%";
			$("#gasVal").css("left",updateVal);
		},
		slide:function(event, ui){
			var dispVal = prepValue(String(ui.value));
			$("#gasVal p").html(dispVal);
			calculator.spend.gas = ui.value;
			var updateVal = String(100*(ui.value/gasRange[1]))+"%";
			$("#gasVal").css("left",updateVal);
			updateBar();
		}
	});
	$("#hardwareSlider").slider({
		animated:true,
		min:hardwareRange[0],
		max:hardwareRange[1], 
		value:hardwareRange[2],
		step:hardwareRange[3],
		create:function(event, ui){
			var dispVal = prepValue($("#hardwareSlider").slider("value"));
			$("#hardwareVal p").html(dispVal);
			var updateVal = String(100*(hardwareRange[2]/hardwareRange[1]))+"%";
			$("#hardwareVal").css("left",updateVal);
		},
		slide:function(event, ui){
			var dispVal = prepValue(String(ui.value));
			$("#hardwareVal p").html(dispVal);
			calculator.spend.hardware = ui.value;
			var updateVal = String(100*(ui.value/hardwareRange[1]))+"%";
			$("#hardwareVal").css("left",updateVal);
			updateBar();
		}
	});
	$("#liquorSlider").slider({
		animated:true,
		min:liquorRange[0], 
		max:liquorRange[1], 
		value:liquorRange[2],
		step:liquorRange[3],
		create:function(event, ui){
			var dispVal = prepValue($("#liquorSlider").slider("value"));
			$("#liquorVal p").html(dispVal);
			var updateVal = String(100*(liquorRange[2]/liquorRange[1]))+"%";
			$("#liquorVal").css("left",updateVal);
		},
		slide:function(event, ui){
			var dispVal = prepValue(String(ui.value));
			$("#liquorVal p").html(dispVal);
			calculator.spend.liquor = ui.value;
			var updateVal = String(100*(ui.value/liquorRange[1]))+"%";
			$("#liquorVal").css("left",updateVal);
			updateBar();
		}
	});
	$("#otherSlider").slider({
		animated:true,
		min:otherRange[0], 
		max:otherRange[1], 
		value:otherRange[2],
		step:otherRange[3],
		create:function(event, ui){
			//$("#otherVal").html($("#otherSlider").slider("value"));
			var dispVal = prepValue($("#otherSlider").slider("value"));
			$("#otherVal p").html(dispVal);
			var updateVal = String(100*(otherRange[2]/otherRange[1]))+"%";
			$("#otherVal").css("left",updateVal);
		},
		slide:function(event, ui){
			var dispVal = prepValue(String(ui.value));
			$("#otherVal p").html(dispVal);
			calculator.spend.other = ui.value;
			var updateVal = String(100*(ui.value/otherRange[1]))+"%";
			$("#otherVal").css("left",updateVal);
			updateBar();
		}
	});
};
function getHeight(milesVal,maxVal){
	return barMax*(milesVal/maxVal);
}
function updateBar(){
	var milesVal = calculator.generateValues();
	var barMin = 40;
	//var maxVal = milesVal[0].value;
	var maxVal = 470;
	calculator.updateSponsorLogos();
	bar1Height = getHeight(milesVal[1].value, maxVal);
	bar2Height = getHeight(milesVal[2].value, maxVal) - bar1Height;
	var bar3Height;
	
	if(milesVal.length>3){
		bar3Height = getHeight(milesVal[3].value, maxVal) - bar1Height;
		bar3Height+=barMin;
		/*console.log("bar1Height:"+bar1Height);
		console.log("bar2Height:"+bar2Height);
		console.log("bar3Height:"+bar3Height);*/
	};
	bar1Height += barMin;
	bar2Height += barMin;
	//base card value
	var baseCardValue = milesVal[1].value*12;//bar 2 card value
	var bar2CardValue = (milesVal[2].value*12);
	if(milesVal.length==3){
		$(".bar1").animate({height:bar1Height},1);
		$(".bar1 .bartext p").html(baseCardValue);
		//
		$(".bar2").animate({height:bar2Height},1);
		$(".bar2 .bartext p").html(bar2CardValue - baseCardValue);
		$("#cardBarBase p").html(milesVal[2].value*12);
		//
		$(".bar3").css("visibility","hidden");
	}else{
		var bar3CardValue = (milesVal[3].value*12);
		$(".bar1").animate({height:bar1Height},1);
		$(".bar1 .bartext p").html(baseCardValue);
		//
		$(".bar3").animate({height:bar2Height},1);
		$(".bar3 .bartext p").html(bar2CardValue - baseCardValue);
		//
		//bar3Height = getHeight(milesVal[3].value,maxVal);
			//bar3Height += barMin;
		$(".bar2").animate({height:bar3Height},1);
		$(".bar2 .bartext p").html(bar3CardValue - baseCardValue);
		$("#cardBarBase p").html(bar3CardValue);
		//
		$(".bar3").css("visibility","visible");
	};
	/*var percentHeight = heightVal/maxVal;
	jQuery.fx.off = true;			
	*/
}