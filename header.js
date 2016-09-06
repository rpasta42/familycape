$(function() {
   $('#family-cape-logo').click(function() {
      window.location = 'http://familycape.com/';
   });

   var navWidth = 0;
   $('.nav-item').each(function() {
      var width = $(this).width();//css('width');
      //console.log(width);
      navWidth += width;
   });
   console.log(navWidth);
   $('#top-nav').css('width', navWidth + 'px');
});
