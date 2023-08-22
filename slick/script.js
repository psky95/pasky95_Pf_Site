$(document).ready(function () {
    $('.js-slick').slick({
      autoplay: true,
      autoplaySpeed: 500000,
      dots: true,
      draggable: false,
      fade: true,
      speed: 800
    });
    
    $('.js-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $(slick.$slides).removeClass('is-animating');
    });
    
    $('.js-slick').on('afterChange', function(event, slick, currentSlide, nextSlide) {
      $(slick.$slides.get(currentSlide)).addClass('is-animating');
    });
  });