
function fixNavWidth() {
   var navWidth = 0;
   $('.nav-item').each(function() {
      //css('width');
      var width = $(this).outerWidth(true);
      //console.log(typeof width);
      navWidth += width;
   });

   //console.log(navWidth);
   navWidth += 1;
   $('#top-nav').css('width', navWidth + 'px');
}

$(document).ready(function() {
   $('#family-cape-logo').click(function() {
      window.location = 'http://familycape.com/';
   });

   //TODO: fixme and use static width
   setTimeout(fixNavWidth, 50);

   $('.nav-item').each(function() {
      if ($(this).text().trim() == 'Home')
         $(this).addClass('nav-item-active');
   });
});
