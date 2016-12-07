// JavaScript Document
/*
Stuart Sacklers Common LIbs

This is a collection of form validation calls I find myself using all the time.

Heres a little overview of what this does:

validatePhone: validates the field to say whether its contents are a phone number.
returns true or false
var isPhone = $("#phone").commonLibs("validatePhone");

validatePostal: validates the field to say whether its contents are a postal code.
returns true or false
var isPostal = $("#postal").commonLibs("validatePostal");

validateEmail: validates the field to say whether its contents are an email.
returns true or false
var isEmail = $("#email").commonLibs("validateEmail");

exactLength: checks to see if the value of an input is equal to the length requested
returns true or false
var isExact = $("#exacto").commonLibs("exactLength",length);

inRange: checks to see if the value of an input is equal within the minimum and maximum values
returns true or false
var isExact = $("#rango").commonLibs("inRange",min,max);

limitInput: will make a box only able to accept a certain number of characters
returns nothing
$("#limo").commonLibs("limitINput",limit);

numbericOnly: makes the field only accept numeric input
returns nothing
$("#nummy").commonLibs("numericOnly");

isChecked: checks if a checkbox has been checked
returns true or false
var checkVal = $("#checko").commonLibs("isChecked");

sameAs: compares the field the command is connected to with a second field
returns true or false
var isSame = $("#same1").commonLIbs("sameAs",$("#same2"));

startPointerActions: adds the rollover rollout pointer icons to a specified element
returns nothing
$("#submitImage").commonLibs("startPointerActions");

endPointerActions: removes the rollover rollout pointer icons to a specified element
returns nothing
$("#submitImage").commonLibs("endPointerActions");
*/
;(function($){
	var methods = {
		validatePhone : function(){
			var reg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/;
			if (reg.test(this.val())==false) {
				return false;// string looks like a good (US) phone number with optional area code, space or dash in the middle
			}
			return true;
		},
		validatePostal : function(){
			var reg = /^[A-Za-z]{1}\d{1}[A-Za-z]{1}\d{1}[A-Za-z]{1}\d{1}$/;
			if(reg.test(this.val()) == false) {
			return false;
			}
			return true;
		},
		validateEmail : function(){
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if(reg.test(this.val()) == false) {
				return false;
			}
			return true;
		},
		exactLength : function(lengVal){
			if(this.val().length==lengVal){
				return true;
			}
			return false;
		},
		inRange : function(minLeng, maxLeng){
			if(this.val().length>=minLeng && this.val().length<=maxLeng){
				return true;
			}
			return false;
		},
		limitInput : function(limit){
			this.keyup(function(){
				var $this = $(this);
				if($this.val().length>limit){
					$this.val($this.val().substr(0,limit));
				}
			});
		},
		numericOnly : function(){
			$(this).keydown(function(e){
				var key = e.charCode || e.keyCode || 0;
				// allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
				return (
				key == 8 || 
				key == 9 ||
				key == 46 ||
				(key >= 37 && key <= 40) ||
				(key >= 48 && key <= 57) ||
				(key >= 96 && key <= 105));
			});
		},
		isChecked : function(){
			if(this.prop("checked")==true){
				return true;
			}
			return false;
		},
		sameAs : function(dup){
			if(this.val()==dup.val()){
				return true;
			}
			return false;
		},
		showPointer : function(){
			$(this).css("cursor","pointer");
		},
		hidePointer : function(){
			$(this).css("cursor","default");
		},
		startPointerActions : function(){
			$(this).bind('mouseenter', methods.showPointer);
			$(this).bind('mouseleave', methods.hidePointer);
		},
		endPointerActions : function(){
			$(this).unbind('mouseenter', methods.showPointer);
			$(this).unbind('mouseleave', methods.hidePointer);
		}
	};
	$.fn.commonLibs = function( method ) {
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.commonLibs' );
		}
	};
	$.extend({
		isSame : function(field1, field2){
			if(field1.val()==field2.val()){
				return true;
			}
			return false;
		}
	})
})(jQuery);