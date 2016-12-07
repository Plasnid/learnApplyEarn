/** 
 * this file contains all functions related to the page hit/bounc/etc tracking
 * as well as specialized custom event tracking throughout the site.
 *
 * include this .js file on every page throughout the site in order to
 * get all of the event tracking functionality.
 **/
 
$(function(){
	// click event tracking setup
	$("a.applynow").click(function(){ GoogleAnalytics.trackApplyClick($(this).parent().attr("id")); });
	$("a.viewdetails").click(function(){ GoogleAnalytics.trackBrickClick($(this).parent().attr("id")); });
	$("#topnav-choose-amex").find("a").click(function(){ GoogleAnalytics.trackMenuClick("AMEX", "top"); });
	$("#botnav-choose-amex").find("a").click(function(){ GoogleAnalytics.trackMenuClick("AMEX", "bottom"); });
	$("#topnav-choose-bmo").find("a").click(function(){ GoogleAnalytics.trackMenuClick("BMO", "top"); });
	$("#botnav-choose-bmo").find("a").click(function(){ GoogleAnalytics.trackMenuClick("BMO", "bottom"); });
	$("#topnav-why-airmiles").find("a").click(function(){ GoogleAnalytics.trackMenuClick("WHY-AIRMILES", "top"); });
	$("#botnav-why-airmiles").find("a").click(function(){ GoogleAnalytics.trackMenuClick("WHY-AIRMILES", "bottom"); });
	$("a.back-btn").click(function(){ GoogleAnalytics.trackBack($(this).closest(".details-wrapper").attr("id")); });
	$("a.apply-btn").click(function(){ GoogleAnalytics.trackLearnMore($(this).closest(".details-wrapper").attr("id")); });
	
	// make sure we track the last click event that happened
	GoogleAnalytics.trackLastEvent();
});

// our custom google analytics class
var GoogleAnalytics = {

	cookie : {
		data : $.cookie(this.name),
		name : "AmexBmoEventTracking",
		expires : 365,
		path : "/"
	},

	// this function will add event data (array) to a tracking cookie.
	// this will allow us to track a click between pages without having
	// to a) use google analytics synchronously, or b) interrupt the page flow
	// while we access and store data.
	// the cookie data will be read on page load by the "trackLastEvent" function
	addEventTracking : function() {
		var event_data = (arguments[0]) ? arguments[0] : null;
		if( !event_data ) { return; }
		
		var cookie = GoogleAnalytics.cookie;
		(cookie.data) ? $.cookie(cookie.name, cookie.data.push(event_data), {expires:cookie.expires, path:cookie.path})
					  : $.cookie(cookie.name, [event_data], {expires:cookie.expires, path:cookie.path});
	},

	// this function reads the event tracking cookie data and adds any events in
	// the data array to the _gaq google analytics handler.  the _gaq handler will
	// push these tracking events to google analytics as the service becomes available
	// on the page.
	trackLastEvent : function() {
		var cookie = GoogleAnalytics.cookie;
		if( !cookie.data ) { return; }
		
		var data;
		while( data = cookie.data.shift() ) { _gaq.push(data); }
	},

	// ---- event tracking example ----
	//_gaq.push(["_trackEvent", category, action, opt_label, opt_value, opt_noninteraction]);
	// --------------------------------

	// track which card was shown first in the display
	// track if this is a new or returning visitor
	trackPreferredCard : function() {
		var card	= (arguments[0]) ? arguments[0].toUpperCase : "AMEX";
		var visit	= (arguments[1]) ? "FIRST VISIT" : "RETURN VISIT";
		
		// NOTE:
		// this happens when the page loads so we do NOT have to add this to
		// the event tracking
		_gaq.push(["_trackEvent", function_objs.lang, "Preferred Card", card, null, true]);
		_gaq.push(["_trackEvent", function_objs.lang, "Visitor", visit, null, true]);
	},
	
	// track which region/s was/were chosen
	trackRegion : function() {
		var region = (arguments[0]) ? arguments[0] : null;
		if( !region ) { return; }
		
		GoogleAnalytics.addEventTracking(["_trackEvent", function_objs.lang, "Region", region, null, true]);
	},
	
	// track menu button clicks
	trackMenuClick : function() {
		var card = (arguments[0]) ? arguments[0] : null;
		var nav  = (arguments[1]) ? arguments[1] : "top";
		if( !card ) { return; }
		
		GoogleAnalytics.addEventTracking(["_trackEvent", function_objs.lang, nav, card]);
	},
	
	// track which brick/s was/were clicked on
/*
	trackBrickClick : function() {
		var card = (arguments[0]) ? arguments[0] : null;
		if( !card ) { return; }
		
		GoogleAnalytics.addEventTracking(["_trackEvent", "Brick", card]);
	},
*/
	
	// track "apply now" button clicks
	trackApplyClick : function() {
		var card = (arguments[0]) ? arguments[0] : null;
		if( !card ) { return; }
		
		GoogleAnalytics.addEventTracking(["_trackEvent", function_objs.lang, "Apply Now", card]);
	},
	
	// track a sponsor image click
	trackSponsorClick : function() {
		var sponsor = (arguments[0]) ? arguments[0] : null;
		if( !sponsor ) { return; }
		
		GoogleAnalytics.addEventTracking(["_trackEvent", function_obj.lang, "Sponsor", sponsor]);
	},
	
	// track "back" button (page 8)
	trackBack : function() {
		var wrapid	= (arguments[0]) ? arguments[0] : null;
		if( !wrapid ) { return; }
		var card	= wrapid.replace(/details\-/,"");
		
		GoogleAnalytics.addEventTracking(["_trackEvent", function_objs.lang, "Back Button", card]);
	},
	
	// track "learn more" button click (page 8)
	trackLearnMore : function() {
		var wrapid	= (arguments[0]) ? arguments[0] : null;
		if( !wrapid ) { return; }
		var card	= wrapid.replace(/details\-/,"");
		
		GoogleAnalytics.addEventTracking(["_trackEvent", function_objs.lang, "Learn More Button", card]);
	},
	
	// track calculator values
	trackCalculator : function() {
		var calculator = (arguments[0]) ? arguments[0] : null;
		if( !calculator ) { return; }
		// ???????
		GoogleAnalytics.addEventTracking(["_trackEvent", function_objs.lang, "Calculator"]);
	}
};