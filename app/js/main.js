$(function(){
   $('.top-slider__inner').slick(
       {
        dots: true,
        arrows:false,
        fade:true,
        autoplay:true,
        autoplaySpeed:5000
       }
   );

   $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

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
  
  var deadline= $('.promo-clock').attr('data-time'); //for Ukraine
//   var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('.promo-clock', deadline);
});