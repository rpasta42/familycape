$(function() {
   function setSlideArrowColor(c) {
      $('.prev, .next').css('background-color', c);

   }
   $('.slideshow-container').hover(function() {
      setSlideArrowColor('rgba(0, 0, 0, 0.8)');
   }, function() {
      setSlideArrowColor('white');
   });

});



