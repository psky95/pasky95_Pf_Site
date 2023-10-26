$(document).ready(function () {
    $('.js-slick').slick({
      autoplay: false,
      autoplaySpeed: 2000,
      dots: true,
      draggable: true,
      fade: true,
      speed: 700,
      swipe: true
    });
    $('.js-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $(slick.$slides).removeClass('is-animating');
    });
    
    $('.js-slick').on('afterChange', function(event, slick, currentSlide, nextSlide) {
      $(slick.$slides.get(currentSlide)).addClass('is-animating');
    });
  });