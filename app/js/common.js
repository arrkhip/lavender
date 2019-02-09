$(document).ready(function () {

// accordion
$(function() {
	var caption = $('.js-accordion__header'),
	content = $('.accordion__body');   
	icon    = $('.accordion__icon') 

	caption.click(function(e) {
		content.not($(this).next(content)).slideUp(600);
		$(this).next(content).slideToggle(600);
		icon.not($(this).find('.accordion__icon')).removeClass('accordion__icon--open');
		$(this).find('.accordion__icon').toggleClass('accordion__icon--open');
	});
});


var swiper = new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
	},
});

});
