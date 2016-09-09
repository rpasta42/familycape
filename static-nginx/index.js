
var vidFixerTimeout = 600;
function vidFixer() {
   var vidWidth = $('#bottom-video').width();
   console.log(vidWidth);
   var vidHeight = Math.round(vidWidth / 1.7);
   $('#bottom-video').css('height', vidHeight);
   $('#vid-n-text-placeholder').css('height', $('#vid-n-text').height() + 'px');
   setTimeout(vidFixer, vidFixerTimeout);
}

$(function() {
   $('#vid-n-text-placeholder').css('height', $('#vid-n-text').height() + 'px');
   vidFixer();
});



