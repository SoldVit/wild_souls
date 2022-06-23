$(function () {

  // Закрыть по esc
  $("body").keyup((e) => {
    if (e.keyCode === 27) {
      $('.mobile-menu').removeClass('mobile-menu--active');
      $('.overlay').removeClass('overlay--active');
      $('.burger__line').removeClass('burger__line--active');
    }
  });

  // Слайдер продукт
  $('.catalog__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,

    responsive: [{
      breakpoint: 1150,
      settings: {
        variableWidth: false,
        centerMode: false,
        slidesToShow: 2,
      }
    }],
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  // Слайдер отзывы
  $('.catalog-reviews__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: 'catalog-reviews__slider-dots',

    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  //  Закрыть мобильное меню по клику на якоря
  $('.mobile-menu__link').on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.overlay').removeClass('overlay--active');
  });

  // Скрол для якорей
  $('.menu__link, .mobile-menu__link, .hero__link').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 400,
      easing: "linear"
    });
    return false;
  });

  // Липкое меню
  var header = $('.menu'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50) {
      $('.menu').addClass('menu--scroll');
    } else {
      $('.menu').removeClass('menu--scroll');
    }
    scrollPrev = scrolled;
  });

  // Бургер при скролле
  var header = $('.burger'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50) {
      $('.burger').addClass('burger--scroll');
    } else {
      $('.burger').removeClass('burger--scroll');
    }
    scrollPrev = scrolled;
  });

  // Стили для селекта Язык
  $('.menu__select').styler();

  new WOW().init();

  // Тач для меню
  var menuTouch = $('.mobile-menu');

  $("body").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'right') {
        // $('.mobile-menu').addClass('mobile-menu--active');
        // $('.overlay').addClass('overlay--active');
        // $('#header').addClass('header--active');
        // $('.burger__line').addClass('burger__line--active');
      } 
      else if (direction == 'left') {
        $('.mobile-menu').removeClass('mobile-menu--active');
        $('.overlay').removeClass('overlay--active');
        $('.burger__line').removeClass('burger__line--active');
      }
    }
  });

});