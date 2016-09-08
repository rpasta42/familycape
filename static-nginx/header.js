
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

function selectPage(name) {
   $('.nav-item').each(function() {
      if ($(this).text().trim() == name)
         $(this).addClass('nav-item-active');
   });
}

$(document).ready(function() {
   $('#family-cape-logo').click(function() {
      window.location = 'http://familycape.com/';
   });

   //TODO: fixme and use static width
   setTimeout(fixNavWidth, 50);
   setTimeout(fixNavWidth, 20);
   setTimeout(fixNavWidth, 100);
   setTimeout(fixNavWidth, 200);
   setTimeout(fixNavWidth, 500);
   setTimeout(fixNavWidth, 1000);

});


