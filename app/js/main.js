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

		
	$('.recent-products__stars').rateYo({
		starWidth: "11px",
		spacing: "4px"
	  });

	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
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