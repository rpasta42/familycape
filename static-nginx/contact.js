
function is_phone_ok(val) {
   for (var i in val) {
      //if (val[i] != '
   }
}

$(function() {
   function fixFooter() {
      var height = $('#contact-content').height()+50;
      $('#placeholder').css('height', height + 'px');
   }
   fixFooter();
   setTimeout(fixFooter, 100);
   setTimeout(fixFooter, 500);

   $('#form-err').hide();
   $('#bullet-points>div>a').addClass('fa fa-chevron-right');

   function onSubmitBtn() {
      var first = $('#form-first-name');
      var last = $('#form-last-name');
      var email = $('#form-email');
      var phone = $('#form-phone');
      var msg = $('#form-msg');

      var first_val = $('#form-first-name').val();
      var last_val = $('#form-last-name').val();
      var email_val = $('#form-email').val();
      var phone_val = $('#form-phone').val();
      var msg_val = $('#form-msg').val();

      $('.form-control').removeClass('bad-field');
      $('#form-err').hide();

      var bad = false;

      if (!first_val.length || !last_val.length || !email_val.length || !msg_val.length)
         bad = true;

      if (first_val.length == 0) {
         //$('#form-name-group').addClass('bad-field');
         first.addClass('bad-field');
      }
      if (last_val.length == 0)
         last.addClass('bad-field');
      if (email_val.length == 0)
         email.addClass('bad-field');
      if (msg_val.length == 0)
         msg.addClass('bad-field');

      if (bad)
         $('#form-err').show();
      else {
         first.val(''); last.val(''); email.val(''); phone.val(''); msg.val('');

      }

   }

   $('#form-submit-btn').click(onSubmitBtn);
   /*$("#feedback-form").keyup(function(event){
      if (event.keyCode == 13) {
         onSubmitBtn();
      }
   });*/
});

