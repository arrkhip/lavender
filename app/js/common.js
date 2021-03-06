$(document).ready(function () {

// header
$(document).on("scroll", onScroll);

$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top -170}, 500);
	return false;
});

function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('.header__nav-link').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top - 170 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('.header__nav-link').removeClass("header__nav-link--active");
			currLink.addClass("header__nav-link--active");
		}
		else{
			currLink.removeClass("header__nav-link--active");
		}
	});
}


// accordion
$(function() {
	var caption = $('.js-accordion__header'),
	content = $('.accordion__body');   
	icon    = $('.accordion__icon') 

	caption.click(function(e) {
		content.not($(this).next(content)).slideUp(600);
		$(this).next(content).slideToggle(300);
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
	loop: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
		draggable: true,
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
	loop: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
		draggable: true,
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
	loop: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
		draggable: true,
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
	loop: true,
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
$('.filter__caption').on('click', '.filter__item:not(.filter__item--active)', function() {
	$(this)
	.addClass('filter__item--active').siblings().removeClass('filter__item--active')
	.closest('.filter').find('.filter__content').removeClass('filter__content--active').eq($(this).index()).addClass('filter__content--active');
});

// filter active category
$('.filter__category').click(function() {
	$(this).toggleClass('filter__category--active');
	$(this).parent().find('.filter__category').removeClass('filter__category--active');
  $(this).addClass('filter__category--active');
});


//catalog show more
$('.catalog__more').click(function() {
	$('.catalog__item:hidden:lt(3)').fadeIn();
});


//photo gallery
$('[data-fancybox="popular"]',
 '[data-fancybox="catalog"]',
 '[data-fancybox="customers"]').fancybox();
});


// phone mask 
$('input[type=tel]').inputmask({
  "mask": "+7 (999) 999-99-99"
});


