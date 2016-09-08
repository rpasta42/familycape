$(function() {
   var periodicDelay = 160;

   function onScroll() {
      //console.log(document.body.scrollHeight);
      //console.log(document.body.clientHeight);
      console.log(periodicDelay);
      var doBigPageScroll = document.body.scrollHeight > document.body.clientHeight;
      //console.log(doBigPageScroll);
      if (doBigPageScroll) {
         var scrollBottom = $(window).scrollTop() + window.innerHeight;
         var scrollBottomFoot = scrollBottom + $('#footer').height();

         if ($(window).height() < scrollBottomFoot) {
            periodicDelay = 16;
            $('#footer').show();
            var footerBottom = (scrollBottom - $('body').height());
            //footerBottom = $('#footer').height() - footerBottom;
            //console.log(footerBottom);
            $('#footer').css('bottom', footerBottom + 'px');
         }
         else {
            $('#footer').hide();
            periodicDelay = 100;
         }
      }
      else {
         $('#footer').css('bottom', '0px');
      }
   }
   $('body').scroll(onScroll);

   function periodic() {
      //var pc = $('#page-content');
      //console.log($(window).scrollTop() + window.innerHeight); //$(window).height());
      //console.log('height' + $(window).height()); //$('body').height());
      onScroll();
      setTimeout(periodic, periodicDelay);
   }
   periodic();
});
