var slideIndex = 1;

$(function() {
   showSlides(slideIndex);
   $('.mySlides').hide();
   $('.captionText').hide();

   function setSlideArrowColor(c) {
      $('.prev-slide, .next-slide').css('background-color', c);
   }
   setSlideArrowColor('rgba(0, 0, 0, 0.8)');

   function setSlideArrowOpacity(n) {
      $('.prev-slide, .next-slide').css('opacity', n);
   }
   $('.slideshow-container').hover(function() {
      setSlideArrowOpacity(1);
   }, function() {
      //setSlideArrowColor('white');
      setSlideArrowOpacity(0);
   });

});

function plusSlides(n) {
   showSlides(slideIndex += n);
}
function currentSlide(n) {
   showSlides(slideIndex = n);
}

function autoRotate(time) {
   function rotator() {
      plusSlides(1);
      console.log('time:' + time);
      console.log(time);
      setTimeout(rotator, time);
   }
   setTimeout(rotator, time);
}

function showSlide(n) {
   var slides = $('.mySlides');
   var dots = $('.dot');

   if (n >= slides.length)
      n = 0;
   if (n < 0)
      n = slides.length - 1;
}

//var active = false;
function showSlides(n) {
   /*if (active)
      return;
   active = true;*/
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length)
      slideIndex = 1;
   if (n < 1)
      slideIndex = slides.length;

   for (var i = 0; i < slides.length; i++) {
      //slides[i].style.display = "none";
      //$(slides[i]).hide();
      /*var cssV = {
         opacity:       0,
         transition:    'opacity 1s'
      };
      $('.active-slide').css(cssV).slideUp(1000);*/
      //$('.active-slide').fadeOut('slow').slideUp('slow');
      $('.active-slide').fadeOut(500);
      $('.active-slide').removeClass('active-slide');
   }
   for (var i = 0; i < dots.length; i++)
      dots[i].className = dots[i].className.replace(" active", "");
   var slide = slides[slideIndex-1];
   //$(slide).slideDown();
   /*var cssV = {
      opacity:    1,
      transition: 'opacity 1s'
   };*/
   //$(slide).fadeIn('slow').slideDown('slow');
   /*setTimeout(function() {
      $(slide).css(cssV).slideDown(1000);
      $(slide).addClass('active-slide');
   }, 500);*/
   $(slide).addClass('active-slide');
   setTimeout(function() {
      $(slide).fadeIn(500);
      //active = false;
   }, 600);
   //slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
}



