function initSlick(){
	$('.slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		focusOnSelect: false,
		accessibility: false,
		//adaptiveHeight: true,
		lazyLoad: 'ondemand'
	});
	/*$('.slide').each(function () {
		var hrefContent = $(this).find('a').attr('href');
		$(this).find('a').prepend('<span class="title" />');
		$(this).find('.title').text(hrefContent);
	})*/
	$('.projects-list li').each(function () {
		var slideCount = $(this).find('.slide').length;
		$(this).find('span', 'h4').text(slideCount);
	});
}
$(document).ready(function () {
	initSlick();
});