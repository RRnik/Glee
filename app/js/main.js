$ (function () {
	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
	})

	var Mixer = mixitup('.galery__content',{
		animation: {
		enable: false
    }
	});
	
});