
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

   function onScroll() {
      if (!($('#page-content').height() > window.innerWidth)) {
         $('#footer').css('position', 'absolute');
         $('#footer').css('bottom', '0px');
         $('#footer').show();
      }
      else
         $('#footer').hide();
   }
   $('body').scroll(onScroll);

   var periodicDelay = 1000;
   function periodic() {
      //console.log('scrollTop' + ($('body').scrollTop() + $('body').height()));
      var pc = $('#page-content');
      //console.log('scroll' + ($(pc).scrollTop() + $(pc).height()));
      //console.log('scroll' + ($('body').scrollTop() + $(window).height()));
      //console.log('scroll' + ($(document).height() - $(pc).scrollTop() - $(pc).height()));
      console.log($(window).scrollTop() + window.innerHeight); //$(window).height());
      console.log('height' + $(window).height()); //$('body').height());
      setTimeout(periodic, periodicDelay);
      onScroll();
   }
   periodic();

});


