$(document).ready(function() {

	$('.mob-company-services').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 570,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.mob-cloud-advantages').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 570,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.number8800-advantages').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 570,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});


	// СТРОКА ПОИСКА ГОРОДА
// 	$('#search-city-input').hideseek({
// 		nodata: 'По вашему запросу ничего не найдено',
// 		highlight: true
// 	});
//
// 	$('#search-city-input').on("keyup input", function() {
//
// 		var city = $('.city-item');
// 		var input = $('#search-city-input').val();
//
// 		if($(window).width() <= '1200') {
// 			$('.region').hide();
// 		}
// });

	// $('.search-city__link').click(function(e) {
	// 	e.preventDefault();
	// 		$('.regions').slideDown(500);
	// });
	//
	// $('.close-regions').click(function() {
	// 		$('.regions').hide();
	// });

	//
	// $('.message-form-header').click(function() {
	//
	// 	if($('.message-form').is(':visible')) {
	// 		$('.message-form').slideUp(500);
	// 	}
	// 	else {
	// 		$('.message-form').slideDown(500);
	// 	}
	//
	// });

// ПОЧТА
	$(".request-form").submit(function() {
		var popup = $('.popup-active-wrap');
		var success = $(".popup-sucess-wrap");
		var th = $(this);
		var checkbox = $(this).find('.agree-checkbox');
		var confirm = $(this).find('.confirm');

		if($(checkbox).is(':checked')) {

			$(confirm).slideUp(400);
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function() {
				// Сообщение об отправке формы
				popup.removeClass("active").fadeOut(100);
				success.addClass("active").css('display', 'flex').hide().fadeIn();
				setTimeout(function() {
					success.removeClass("active").css('display', 'flex').fadeOut();
					// Done Functions
					th.trigger("reset");
				}, 2000);
			});
				return false;
		}
		else {
			checkbox.click(function() {
				if($(checkbox).is(':checked')) {
					$(confirm).slideUp(400);
				}
			})
			$(confirm).slideDown(400);
			return false;
		}
	});


	$(".request-form--recall").submit(function() {
		var popup = $('.popup-active-wrap');
		var success = $(".popup-sucess-wrap");
		var th = $(this);

			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function() {
				// Сообщение об отправке формы
				popup.removeClass("active").fadeOut(100);
				success.addClass("active").css('display', 'flex').hide().fadeIn();
				setTimeout(function() {
					success.removeClass("active").css('display', 'flex').fadeOut();
					// Done Functions
					th.trigger("reset");
				}, 2000);
			});
				return false;
	});

	$(".message-form").submit(function() {
		var popup = $('.popup-active-wrap');
		var success = $(".popup-sucess-wrap");
		var th = $(this);

			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function() {
				// Сообщение об отправке формы
				popup.removeClass("active").fadeOut(100);
				success.addClass("active").css('display', 'flex').hide().fadeIn();
				setTimeout(function() {
					success.removeClass("active").css('display', 'flex').fadeOut();
					// Done Functions
					th.trigger("reset");
				}, 2000);
			});
				return false;
	});

	// КНОПКА ПОДКЛЮЧИТЬ
	$('.btn-to-connect').click(function() {

		var popup = $('.popup-active-wrap');
		var closePopup = $('.close-popup');
		popup.addClass("active").css('display', 'flex').hide().fadeIn();
		closePopup.click(function() {
			$(popup).removeClass("active").fadeOut();
		});
	});

	$('.nav-item--to-connect').click(function() {

		var popup = $('.popup-active-wrap');
		var closePopup = $('.close-popup');
		popup.addClass("active").css('display', 'flex').hide().fadeIn();
		closePopup.click(function() {
			$(popup).removeClass("active").fadeOut();
		});

	});


// МЕНЮ
	// $('.main-nav-toggle').click(function() {
	// 	var menu = $('.nav-list');
	//
	// 	if($(menu).is(':visible')) {
	// 		$(menu).removeClass(".nav-list--active").slideUp();
	// 	}
	// 	else {
	// 		$(menu).addClass(".nav-list--active").css('display', 'flex').hide().slideDown();
	// 	}
	// });


	// СКРОЛЛ
	$("a.scrollTo").click(function(e) {
		e.preventDefault();

		if ($(window).width() < '1200') {
			$('.nav-list').slideUp();
		}
		else if ($(window).width() >= '1200') {
			$('.nav-list').show();
		}

		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 100;

		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 1000);
		return false;

	});

	$(window).resize(function() {
		if ($(window).width() >= '1200') {
			$('.nav-list').show();
		}
		else if ($(window).width() < '1200') {
			$('.nav-list').hide();
		}
	});

});
