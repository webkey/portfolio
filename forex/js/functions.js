/* inputFocus */
var parentArray = ['.input-holder'];
inputFocus = function(parent){
	var parentSize = parent.length;
	var n = 0;
	for ( n; n < parentSize; n++ ) {
		var obj = parent[n];
		var input = $(obj).find(':text, textarea, :password');
		if ( $(input).length ) {
			$(obj).each(function(){
				var el = $(this);
				$(input).on('focus', function(){el.addClass('focus');});
				var inputBlur = function(){
					$(input).on('blur', function(){el.removeClass('focus');});
				}
				inputBlur();
				el.on('click', function(e){
					var thisObj = $(this);
					input = thisObj.find(':text, textarea, :password');
					$(this).addClass('focus');
					$(input).trigger('focus');
					$(input).on('blur', inputBlur);
				});
			});
		}
	}
}
/* inputFocus end */
function vmiddleBottom(obj){
	$(obj).each(function(){
		var bl = $(this);
		var bl_h = bl.height();
		var img_h = bl.find('img').height();
		var marg = bl_h - img_h;
		bl.find('img').css('margin-top', marg);
	});
}
function vmiddle(obj){
	$(obj).each(function(){
		var bl = $(this);
		var bl_h = bl.height();
		var img_h = bl.find('img').height();
		var marg = (bl_h/2) - (img_h/2);
		bl.find('img').css('margin-top', marg);
	});
}
function vmiddleObject(obj, img){
	$(obj).each(function(){
		var bl = $(this);
		var bl_h = bl.height();
		var img_h = bl.find(img).height();
		var marg = (bl_h/2) - (img_h/2);
		bl.find(img).css('margin-top', marg);
	});
}

/* all sliders */
function allSlider(){
	
	// news slider
	$('.news-slider-list').bxSlider({
		mode: 'vertical',
		minSlides: 4,
		maxSlides: 4,
		controls: false,
		slideMargin: 32
	});
	
	// brokers slider
	$('.brokers-slider-list').bxSlider({
		slideWidth: 137,
		minSlides: 6,
		maxSlides: 6,
		slideMargin: 37,
		controls: false,
		infiniteLoop: true
	});
	
	// brokers slider
	$('.press-slider-list').bxSlider({
		adaptiveHeight: true,
		controls: false
	});
	
}
/* all sliders end */

/* addCircle */
function addCircle(){
	$('.bx-pager-link').wrapInner('<span class="circle" />')
}
/* addCircle end */

/* placeholder */
function placeholder(){
	$('input[placeholder], textarea[placeholder]').placeholder();
};
/* placeholder end */

/* custom inputs */
function customInputs(objBlockInput){
	if(objBlockInput.length){
		var inp = ':text, :password, textarea';
		objBlockInput.on('click', function(e){
			var self = $(this);
			self.addClass('focus');
			var objInp = self.find(inp);
			self.find(inp).trigger('focus');
		});
		objBlockInput.on('blur', inp, function(e){
			$(e.delegateTarget).removeClass('focus');
		});
	}
};
/* custom inputs end */

/* modification placeholder */
function placeholderMod() {	
	var UA = window.navigator.userAgent;
	var brIE = /MSIE *\d+\.\w+/i;	/*IE browser*/
	var brSafari = /Version\/\w+\.\w+/i;	/*Safari browser*/
	/*Keeps out IE*/
	var brResult = UA.match(brIE);
	if (! brResult){
		var inp = ':text, :password, textarea';
		/*Keeps out Safari*/
		brResult = UA.match(brSafari);
		if (! brResult){
			$(inp).on('click, focus', function(){
				var self = $(this);
				var plac = self.attr('placeholder');
					self.removeAttr('placeholder');
					self.on('blur', function(){
						$(this).attr('placeholder', plac);
					});
				}
			);
		} else{
			/*fix alignment placeholder safari*/
			$(inp).focus(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					if (this.originalType) {
						this.type = this.originalType;
						delete this.originalType;
					}
					input.val('');
					input.removeClass('placeholder');
				}
			}).blur(function() {
				var input = $(this);
				if (input.val() == '') {
					if (this.type == 'password') {
						this.originalType = this.type;
						this.type = 'text';
					}
					input.addClass('placeholder');
				input.val(input.attr('placeholder'));
				}
			}).blur();
			/*fix alignment placeholder safari end*/
		}
	}
};
/* modification placeholder end */

/* showInput */
function showInput(){
	$('.search-form .btn-search').on('click', function(e){
		if ( $(this).parents('form').find(':text').val().length && $(this).parents('.search-form').find('.input-holder').is(':visible') ){
			$(this).parents('form').submit();
		} else {
		$('.search-form .input-holder')
					.show(0)
						.animate({
							width: 200
						}, 200, function(){
								$('.search-form .input-holder input').val('');
								$('.search-form .input-holder input').trigger('focus');
							});
	var yourClick = true;
	$(document).on('click.EventSearch', function (e) {
		if ( !yourClick && $(e.target).closest($('.input-holder')).length  == 0 ) {
			$('.search-form .input-holder').animate({
				width:0
			}, 200, function(){
				$('.search-form .input-holder').hide(0);
			});
			$(document).unbind('click.EventSearch');
		}
		yourClick = false;
	}); 
		e.preventDefault();
		}	
	});
}
/* showInput end  */

/* vertical align */
function vmiddleObject(obj, img){
	$(obj).each(function(){
		var bl = $(this);
		var bl_h = bl.height();
		var img_h = bl.find(img).height();
		var marg = (bl_h/2) - (img_h/2);
		bl.find(img).css('margin-top', marg);
	});
}
/* vertical align end */

/* has drop menu */
function hasDropMenu(){
	var item = $('.nav-list>li');
	item.find('ul').parents('li').addClass('has-drop');
}
/* has drop menu end */

/* has drop menu */
function itemClass(){
	$('.nav-list>li:last-child').addClass('last-child');
}
/* has drop menu end */

/* footer at bottom */
function footerBottom(){
	var footerBox = $('.footer');
	var footerHeight = $('.footer').height();
	var spacerBox = $('.spacer');
	footerBox.css({
		'height': footerHeight,
		'margin-top': -(footerHeight)
	});
	spacerBox.css({
		'height': footerHeight
	});
}
/* footer at bottom end */

/** ready/load/resize document **/

$(document).ready(function(){
	inputFocus($('.input-holder'));
	allSlider();
	customInputs($('.input-holder'));
	placeholder();
	placeholderMod();
	showInput();
	vmiddleObject($('.broker'), $('.broker-logotype'));
	hasDropMenu();
	itemClass();
});
$(window).load(function(){
	footerBottom();
	addCircle();
});