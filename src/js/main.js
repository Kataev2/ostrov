import 'focus-visible';
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

documentReady(() => {
  lazyImages();
});

$(".product-wrapper").slick({
  prevArrow: '.product-container__btn-prev',
  nextArrow: '.product-container__btn-next',
  dots: true,
  initialSlide: 2
});

$('.popular-wrapper').each(function() {
	let ths = $(this);
	ths.find('.popular-wrapper__tabs').not(':first').hide();
	ths.find('.popular-wrapper__inner-title').click(function() {
		ths.find('.popular-wrapper__inner-title').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.popular-wrapper__tabs').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});

$('.about__contact').each(function() {
	let ths = $(this);
	ths.find('.about__contact-wrapper__slide.slide').not(':first').hide();
	ths.find('.about__contact-container__tab').click(function() {
		ths.find('.about__contact-container__tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.about__contact-wrapper__slide.slide ').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});

$('.tachograph-tabs ').each(function() {
	let ths = $(this);
	ths.find('.popular-wrapper__tabs').not(':first').hide();
	ths.find('.tachograph-tabs__container-title').click(function() {
		ths.find('.tachograph-tabs__container-title').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.popular-wrapper__tabs').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});

$(".license__container-wrapper").slick({
	prevArrow: '.license__container-btnp',
	nextArrow: '.license__container-btnn',
	dots: true,
	initialSlide: 2
  });