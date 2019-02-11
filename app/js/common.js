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
	centeredSlides: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		1200: {
			slidesPerView: 2
		},
		600: {
			slidesPerView: 'auto',
			spaceBetween: 10,
		}
	}
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
	breakpoints: {
		1200: {
			slidesPerView: 2
		},
		600: {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 10,
		}
	}
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
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			spaceBetween: 20,
		}
	}
});


// reviews slider
var swiper = new Swiper('.reviews__slider', {
	slidesPerView: 4,
	spaceBetween: 30,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
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
if($("#map").length > 0) {
  ymaps.ready(init);
  function init () {
    var myMap = new ymaps.Map('map', {

      center: [54.707686, 55.999780], 
      zoom: 16
    });
    var myPlacemark = new ymaps.Placemark(
      [54.707686, 55.999780]        
      );
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('drag');
  }
}


// filter
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	$(this)
	.addClass('active').siblings().removeClass('active')
	.closest('.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});



});
