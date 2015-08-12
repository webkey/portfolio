function initSlick(){
	$('.slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		focusOnSelect: false,
		accessibility: false,
		//adaptiveHeight: true,
		lazyLoad: 'ondemand'
	}).on('afterChange', function(slick, currentSlide, nextSlide){
		$(this).closest('li').find('h4 > span').text(nextSlide + 1);
	});
	$('.projects-list li').each(function () {
		var slideCount = $(this).find('.slide').length;
		$(this).find('h4 > strong').text(slideCount);
	});
}
$(document).ready(function () {
	initSlick();
});