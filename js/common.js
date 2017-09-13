$('[data-fancybox]').fancybox({
	buttons : [
		'close'
	]
});

$('.certificates__list').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
		{
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
	]
});

$('.partners__list').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
		{
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
	]
});
