$(function(){

  $('.js-keyup-valid-email').on('keyup',function (e) {

    // コールバック関数内では、thisはajax関数自体になってしまうため、
    // ajax関数内でイベントのthisを使いたいなら変数に保持しておく
    var $that = $(this);

    // Ajaxを実行する
    $.ajax({
      type: 'post',
      url: 'ajax.php',
      dataType: 'json', // 必ず指定すること。指定しないとエラーが出る＆返却値を文字列と認識してしまう
      data: {
        email: $(this).val()
      }
    }).then(function(data) {
      console.log(data);

      if(data){
        console.log(data);

        // フォームにメッセージをセットし、背景色を変更する
        if(data.errorFlg){
          $('.js-set-msg-email').addClass('is-error');
          $('.js-set-msg-email').removeClass('is-success');
          $that.addClass('is-error');
          $that.removeClass('is-success');
        }else{
          $('.js-set-msg-email').addClass('is-success');
          $('.js-set-msg-email').removeClass('is-error');
          $that.addClass('is-success');
          $that.removeClass('is-error');
        }
        $('.js-set-msg-email').text(data.msg);
      }
    });
  });

});