$(function () {
	$('#fullpage').fullpage({
		autoScrolling: true,
		scrollHorizontally: true,
		sectionSelector: '.page-section',
	});



	$('.header__cart').on('click', function () {
		$('.header__basket').toggleClass('on');
		
	});
	$('.header__basket-close').on('click', function () {
		$('.header__basket').removeClass('on');

	});




	$('.arrow-down1').on('click', function () {
		$('.vegetables').toggleClass('active');
		$('.arrow-down1').toggleClass('up');
	});

	$('.arrow-down2').on('click', function () {
		$('.flowers').toggleClass('active');
		$('.arrow-down2').toggleClass('up');
	});

	$('.arrow-down3').on('click', function () {
		$('.pelargonium').toggleClass('active');
		$('.arrow-down3').toggleClass('up');
	});

	$('.arrow-down4').on('click', function () {
		$('.chrysanthemum').toggleClass('active');
		$('.arrow-down4').toggleClass('up');
	});
	$('.arrow-down5').on('click', function () {
		$('.petunia').toggleClass('active');
		$('.arrow-down5').toggleClass('up');
		
	});

	$('.product__quantity-plus').on('click', function () {
		let num = +$('.product__quantity-number').val();
		$('.product__quantity-number').val(num + 1);
	});
	$('.product__quantity-minus').on('click', function () {
		let num = +$('.product__quantity-number').val();
		if (num > 1) $('.product__quantity-number').val(num - 1);
	});


});
// $('.btn-clients__all').removeClass('btn-clients__show')
// 
// 
// 
// 



