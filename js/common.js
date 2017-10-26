$(document).ready(function() {

	$('.partners-list').slick({
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

// ПОЧТА
	$(".request-form").submit(function() {
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
	$('.btn-request').click(function() {

		var popup = $('.popup-active-wrap');
		var closePopup = $('.close-popup');
		popup.addClass("active").css('display', 'flex').hide().fadeIn();
		closePopup.click(function() {
			$(popup).removeClass("active").fadeOut();
		});
	});

	$('.btn--office').click(function() {
		var popup = $('.popup-active-wrap');
		popup.find('input[name="form_subject"]').val('Интернет в офис');
	});

	$('.btn--mob-company').click(function() {
		var popup = $('.popup-active-wrap');
		popup.find('input[name="form_subject"]').val('Услуга "Мобильное предприятие"');
	});

	$('.btn--mob-connection').click(function() {
		var popup = $('.popup-active-wrap');
		popup.find('input[name="form_subject"]').val('Корпоративная мобильная связь');
	});

	$('.btn--mob-cloud').click(function() {
		var popup = $('.popup-active-wrap');
		popup.find('input[name="form_subject"]').val('Услуга "Облачная АТС" для бизнеса');
	});

	$('.btn--number8800').click(function() {
		var popup = $('.popup-active-wrap');
		popup.find('input[name="form_subject"]').val('Номер 8-800');
	});


// МЕНЮ
	$('.main-nav-toggle').click(function() {
		var menu = $('.nav-list');

		if($(menu).is(':visible')) {
			$(menu).slideUp(600);
		}
		else {
			$(menu).slideDown(600);
		}
	});

	// СКРОЛЛ
	$("a.scrollTo").click(function(e) {
		e.preventDefault();

		$('.nav-item').removeClass('nav-item--active');
		$(this).parent().addClass('nav-item--active');

		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 100;

		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 1000);
		return false;

	});

	$("a.scrollTo").click(function() {
		if ($(window).width() < '1200') {
				$('.nav-list').slideUp(600);
			}
		else {
			return false;
		}
	});

	$(window).resize(function() {
		if ($(window).width() >= '1200') {
			$('.nav-list-wrap').show();

			$('.nav-list').css('display', 'flex')
		}
	});

	// СТРОКА ПОИСКА ГОРОДА
	$('#search-city-input').hideseek({
		nodata: 'По вашему запросу ничего не найдено',
		highlight: true
	});

	$('#search-city-input').on("keyup input", function() {

		var city = $('.city-item');
		var input = $('#search-city-input').val();

		if($(window).width() <= '1200') {
			$('.region').hide();
		}
});
$('.search-city__link').click(function(e) {
	e.preventDefault();
		$('.regions').slideDown(500);
});

$('.close-regions').click(function() {
		$('.regions').hide();
});

});
