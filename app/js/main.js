$(function(){
  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
    
  })
});

$(function(){
  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 6.75 12.25 C 6.460938 12.25 6.175781 12.164062 5.953125 11.992188 L 0.328125 7.617188 C -0.109375 7.277344 -0.109375 6.722656 0.328125 6.382812 L 5.953125 2.007812 C 6.394531 1.664062 7.105469 1.664062 7.546875 2.007812 C 7.984375 2.347656 7.984375 2.902344 7.546875 3.242188 L 2.714844 7 L 7.546875 10.757812 C 7.984375 11.097656 7.984375 11.652344 7.546875 11.996094 C 7.328125 12.164062 7.039062 12.25 6.75 12.25 Z M 6.75 12.25 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 2.25 12.25 C 1.960938 12.25 1.675781 12.164062 1.453125 11.992188 C 1.015625 11.652344 1.015625 11.097656 1.453125 10.757812 L 6.285156 7 L 1.453125 3.242188 C 1.015625 2.902344 1.015625 2.347656 1.453125 2.003906 C 1.894531 1.664062 2.605469 1.664062 3.046875 2.003906 L 8.671875 6.378906 C 9.109375 6.722656 9.109375 7.277344 8.671875 7.617188 L 3.046875 11.992188 C 2.824219 12.164062 2.539062 12.25 2.25 12.25 Z M 2.25 12.25 "/></g></svg></button>',
    infinite: false
  });

});

$(function (){
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    fade: true
  });
});

$(function (){
  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list');
  });
});

$(function () {
  $('.select-styler, .product-filter__num').styler();
});

$(function(){
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
});

$(function (){
  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:#d8d8d8;fill-opacity:1;" d="M 11.914062 5.285156 L 16.402344 6.03125 C 16.773438 6.089844 17.085938 6.382812 17.207031 6.789062 C 17.324219 7.195312 17.226562 7.640625 16.960938 7.941406 L 13.703125 11.535156 L 14.472656 16.6875 C 14.535156 17.109375 14.382812 17.539062 14.070312 17.789062 C 13.757812 18.039062 13.351562 18.070312 13.015625 17.871094 L 9.003906 15.460938 L 4.992188 17.871094 C 4.65625 18.070312 4.246094 18.039062 3.9375 17.789062 C 3.628906 17.539062 3.472656 17.109375 3.539062 16.6875 L 4.304688 11.535156 L 1.050781 7.941406 C 0.78125 7.640625 0.683594 7.195312 0.804688 6.789062 C 0.921875 6.382812 1.230469 6.089844 1.605469 6.03125 L 6.09375 5.285156 L 8.105469 0.632812 C 8.273438 0.246094 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.246094 9.902344 0.632812 Z M 11.914062 5.285156 "/></g></svg>'
  });
});

$(function (){
  $('.top-slider__inner').slick(
    {
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
});








$(function (){
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.querySelector('.promo-clock');
    var daysSpan = clock.querySelector('.promo__days');
    var hoursSpan = clock.querySelector('.promo__hours');
    var minutesSpan = clock.querySelector('.promo__minutes');
    var secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = $('.promo-clock').attr('data-time'); //for Ukraine
  //   var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('.promo-clock', deadline);
});