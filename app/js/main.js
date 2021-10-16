$ (function () {

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