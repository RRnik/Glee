$ (function () {
  
	
		$('.footer-top__title-servicer').on('click', function(){
		$(this).next('.footer-top__list').slideToggle();
		$('.footer-top__item-servicer').toggleClass('footer-top__angle--active')
	})

	$('.footer-top__title-account').on('click', function(){
		$(this).next('.footer-top__list').slideToggle();
		$('.footer-top__item-account').toggleClass('footer-top__angle--active')
	})


	$('.user-nav__link-menu').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	});

	$('.filter-price__input').ionRangeSlider({
		type: "double",
		step: 0.01,
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
        },
		onChange: function (data) {
            $('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
        },
	});

	$('.select-style').styler({

	});	

	$('.star').rateYo({
		
	  });

	    $('.details-tabs__top-item').on('click', function(e){
			e.preventDefault();
			$('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
			$(this).addClass('details-tabs__top-item--active');

			$('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
			$($(this).attr('href')).addClass('details-tabs__content-item--active')
		  });

		  $('.addition-slider__inner').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow:'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path fill="#a3bbc8" d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)"/></svg></button>',
			nextArrow:'<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path fill="#a3bbc8" class="cls-1" d="M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z" transform="translate(-1509 -1327)"/></svg></button>',
			infinite: false,
		  });

	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.details-slide__thumb').slick({
		asNavFor: '.details-slide__big',
		focusOnSelect: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,
	  });
	  $('.details-slide__big').slick({
		asNavFor: '.details-slide__thumb',
		draggable: false,
		arrows: false,
		fade: true,
	  });

	var containerEl1 = document.querySelector('[data-ref="container-1"]');
	var containerEl2 = document.querySelector('[data-ref="container-2"]');
	var config = {
	  controls: {
		scope: 'local'
	  },
	};
	var mixer1 = mixitup(containerEl1, config);
	var mixer2 = mixitup(containerEl2, config);

});