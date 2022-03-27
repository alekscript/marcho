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


});