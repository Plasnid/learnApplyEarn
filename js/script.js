/* Author: 

*/

var function_objs = {

	lang: (window.location.href.indexOf('/fr') > -1) ? 'fr' : 'en',
	
	slider_behaviour : function(){
		
		var $scrollable = $('#scrollable'),
			$num = $('#scroll-num').find('a'),
			gotohere = 0,
			brick = {
				from: 1,
				to: 1,
				images: {
					en: [ null,'images/slider1.png','images/slider2.png','images/slider3.png','images/slider4.png','images/slider5.png' ],
					fr: [ null,'../images/fr/slider1.png','../images/fr/slider2.png','../images/fr/slider3.png','../images/fr/slider4.png','../images/fr/slider5.png' ]
				}
			};

		//start auto animation
		var start_animation = setInterval(call_trigger_animation,10000);

		//auto animation function
		function call_trigger_animation(){
			if (brick.from == 5) 
				brick.to = 1;
			else
				brick.to++;
			trigger_animation();
		}
		
		//slider number click function
		$num.click(function(e){
			var $this = $(this);
			e.preventDefault();
			brick.to = parseInt($this.text());
			clearInterval(start_animation); //end the auto animation functionality
			trigger_animation();
		});
		
		//movement and number highlight functions
		function trigger_animation() {
			var $this = $('#slide-num' + brick.to + ' a');
			
			$num.removeClass('slide-on');
			$this.addClass('slide-on');
			
			gotohere = -((brick.to - 1) * 1024);
			
			$scrollable.stop().animate({
				left: gotohere},
				1000,
				function(){
					if (!$('#swf-' + brick.from).hasClass('image-loaded')) {
						
						//var image = $('<img>').attr('src', brick.images[function_objs.lang][brick.from]);
						var useimage = '<img src="' + brick.images[function_objs.lang][brick.from] + '" alt="" />'
						//console.log(useimage);
						$('#swf-' + brick.from)
							.parent()
							.addClass('image-loaded')
							.attr('id','swf-' + brick.from)
							.innerHTML = useimage;
							//.html(useimage);
							
					}
					
					if (!$('#swf-' + brick.to).hasClass('image-loaded')) {
						//call function to start flash animation
						var swf = document.getElementById("swf-" + brick.to);
						swf.replay();				
					}
					brick.from = brick.to;					
				}
			);
		} // END trigger_animation()
	}, //END slider behaviour

	cookie_funcs : function(){
		var cookieval = $.cookie("cookieName"),
		random_num = ((Math.floor(Math.random()*100)) % 2),
		set_cookie_value = null;

		if (cookieval == null) {
			//console.log('no cookie!');
			switch (random_num)
			{
				case 0: 
					set_cookie_value = 'AMEX';
					break;
				case 1:
					set_cookie_value = 'BMO';
					break;
			}
			$.cookie("cookieName",set_cookie_value, { expires: 365, path: "/" });
			//console.log(set_cookie_value +' cookie is set');
			
			// track setting the preferred card @ the google
			GoogleAnalytics.trackPreferredCard(set_cookie_value, true);
		}
		else {
			set_cookie_value = cookieval;
			// track setting the preferred card @ the google
			GoogleAnalytics.trackPreferredCard(set_cookie_value);
			//console.log(cookieval);
		}
		
		$('#box-' + set_cookie_value).addClass('floatitleft');
		if (set_cookie_value == 'AMEX') {
			$('#box-BMO').addClass('floatitright');
			$('#topnav-choose-bmo').addClass('move-bmo-topnav');
			$('#topnav-choose-amex').addClass('move-amex-topnav');
			$('#botnav-choose-bmo').addClass('move-bmo-botnav');
			$('#botnav-choose-amex').addClass('move-amex-botnav');
			$('#section2').addClass('amex-first');
		}
		else
			$('#box-AMEX').addClass('floatitright');
		
		set_cookie_value = set_cookie_value.toLowerCase();
		//console.log(set_cookie_value);

		// DELETE THIS
		$('#test button').click(function(){
			cookieval = $.cookie("cookieName",null, { path: "/" });
			set_cookie_value = cookieval;
			//console.log('cookie deleted: ' + cookieval + ', set_cookie_value = ' + set_cookie_value);
			location.reload();
		});
	},//END cookie_funcs
	
	load_swf : function(){
		var flashvars = {},
			attributes = {},
			params = { wmode:'transparent'};

			
			if (this.lang == 'fr') {
				swfobject.embedSWF('../swf/fr/9639B_Billboard_1_F.swf','swf-1','1024','397','9.0', '', flashvars, params, attributes);
				swfobject.embedSWF('../swf/fr/9639B_Billboard_2_F.swf','swf-2','1024','397','9.0', '', flashvars, params, attributes);
				swfobject.embedSWF('../swf/fr/9639B_Billboard_3_F.swf','swf-3','1024','397','9.0', '', flashvars, params, attributes);
				swfobject.embedSWF('../swf/fr/9639B_Billboard_4_F.swf','swf-4','1024','397','9.0', '', flashvars, params, attributes);
				swfobject.embedSWF('../swf/fr/9639B_Billboard_5_F.swf','swf-5','1024','397','9.0', '', flashvars, params, attributes);
			}
			else {
				swfobject.embedSWF('swf/en/9639B_Billboard_1_E.swf','swf-1','1024','397','9.0', '', flashvars, params, attributes);
				swfobject.embedSWF('swf/en/9639B_Billboard_2_E.swf','swf-2','1024','397','9.0', '', flashvars, params, attributes);
				swfobject.embedSWF('swf/en/9639B_Billboard_3_E.swf','swf-3','1024','397','9.0', '', flashvars, params, attributes);
				swfobject.embedSWF('swf/en/9639B_Billboard_4_E.swf','swf-4','1024','397','9.0', '', flashvars, params, attributes);
				swfobject.embedSWF('swf/en/9639B_Billboard_5_E.swf','swf-5','1024','397','9.0', '', flashvars, params, attributes);
			}
	} //END load_swf
} //END functions_objs


$(function(){
	var currentID = $('body').attr('id');
	
	if (currentID == 'homepage') {
		function_objs.slider_behaviour();
		function_objs.load_swf();
	}
		function_objs.cookie_funcs();
});





















