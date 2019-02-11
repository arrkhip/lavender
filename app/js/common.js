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


// promotions slider
var swiper = new Swiper('.promotions__slider', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	grabCursor: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
	},
});


// popular slider
var swiper = new Swiper('.popular__slider', {
	slidesPerView: 3,
	spaceBetween: 0,
	grabCursor: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
	},
});


// customers slider
var swiper = new Swiper('.customers__slider', {
	slidesPerView: 4,
	spaceBetween: 30,
	grabCursor: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
	},
});


// reviews slider
var swiper = new Swiper('.reviews__slider', {
	slidesPerView: 4,
	spaceBetween: 30,
	grabCursor: true,
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		600: {
			slidesPerView: 'auto',
			centeredSlides: true,
		}
	}
});


// Yandex map
// if($("#map").length > 0) {
//   ymaps.ready(init);
//   function init () {
//     var myMap = new ymaps.Map('map', {

//       center: [54.707686, 55.999780], 
//       zoom: 16
//     });
//     var myPlacemark = new ymaps.Placemark(
//       [54.707686, 55.999780]        
//       );
//     myMap.geoObjects.add(myPlacemark);
//   }
// }


});
