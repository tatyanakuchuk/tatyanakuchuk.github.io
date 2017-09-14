$(document).ready(function() {

	$("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
		var form_data = $(this).serialize(); //собераем все данные из формы
		$.ajax({
		type: "POST", //Метод отправки
		url: "mail.php", //путь до php фаила отправителя
		data: form_data,
		success: function() {
					//код в этом блоке выполняется при успешной отправке сообщения
					$(th).find(".success").addClass("active").css('display', 'flex').hide().fadeIn();
					setTimeout(function() {
						$(th).find(".success").removeClass("active").fadeOut();
						// Done Functions
						th.trigger("reset");
					}, 2000);
		return false;
		});

	//E-mail Ajax Send
	// $(".contact-form--contacts").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "./mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		$(th).find(".success").addClass("active").css('display', 'flex').hide().fadeIn();
	// 		setTimeout(function() {
	// 			$(th).find(".success").removeClass("active").fadeOut();
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 2000);
	// 	});
	// 	return false;
	// });


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

});
