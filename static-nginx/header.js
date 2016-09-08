
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
      //var doBigPageScroll = $('body').height() > $(window).height();
      //console.log($('body').height());
      //console.log($(window).height());
      var doBigPageScroll = document.body.scrollHeight > document.body.clientHeight;
      //console.log(doBigPageScroll);
      if (doBigPageScroll) {
         var scrollBottom = $(window).scrollTop() + window.innerHeight;
         var scrollBottomFoot = scrollBottom + $('#footer').height();

         if ($(window).height() < scrollBottomFoot) {
            $('#footer').show();
            var footerBottom = (scrollBottom - $('body').height());
            //footerBottom = $('#footer').height() - footerBottom;
            console.log(footerBottom);
            $('#footer').css('bottom', footerBottom + 'px');
         }
         else
            $('#footer').hide();
      }
   }
   $('body').scroll(onScroll);

   var periodicDelay = 70;
   function periodic() {
      //var pc = $('#page-content');
      //console.log($(window).scrollTop() + window.innerHeight); //$(window).height());
      //console.log('height' + $(window).height()); //$('body').height());
      onScroll();
      setTimeout(periodic, periodicDelay);
   }
   periodic();

});


