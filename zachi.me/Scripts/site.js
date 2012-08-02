$(function () {
  $('.simon-button').click(function (event) {
    var isSimon = !$(this).hasClass('simon-button-mini');
    if (isSimon) {
      $('.categories').addClass('show-category')
      $(this).siblings().eq(0).show();
      $('.simon-button').addClass('simon-button-mini');
    }
    else {
      $('.categories').removeClass('show-category')
      $('.page').hide();
      $('.simon-button').removeClass('simon-button-mini')
    }
  })
})