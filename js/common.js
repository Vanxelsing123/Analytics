$(function() {

	new WOW().init();

	/* burger */

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu__top').slideDown(300);
		}else{
			$('.mnu__top').slideUp(300);
		}
	});

	/* reviews tabs */

	$('.nav__rev > div').click(function() {
		const revId = $(this).data("revid");
	
	$('.nav__rev > div').removeClass("active");
	$(this).addClass("active");

	$('.item__rev').removeClass("active");
	$(revId).addClass("active");
	});

	/* reviews tabs */

	/* yakor */

	$('a.yakor').on('click', function (event) {
		const $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 57
		}, {
			duration: 2500,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	})
});