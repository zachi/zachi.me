$(function () {
  $('.simon-button').click(simonApp.simonButtonClickHandler)
  $('.name-title').click(simonApp.nameTitleClickHandler);
})
var simonApp = (function () {

  return {
    simonButtonClickHandler: function (event) {

      var isSimonButtonMini = $(this).hasClass('simon-button-mini');
      if (isSimonButtonMini) {
        $.proxy(simonApp.simonButtonMiniClickHandler, this)();
        return;
      }
      $('.categories').addClass('single-category-opened')
      //$(this).siblings().eq(0).show();
      $(this).siblings().eq(0).addClass('page-visible');
      $('.simon-button').addClass('simon-button-mini');
      $(this).addClass('selected');
    },
    nameTitleClickHandler: function (event) {
      $('.categories').removeClass('single-category-opened')
      $('.page').removeClass('page-visible');
      $('.simon-button').removeClass('simon-button-mini').removeClass('selected')
    },
    simonButtonMiniClickHandler: function () {
      //console.log(this);
      $('.page-visible').removeClass('page-visible');
      $('.simon-button').removeClass('selected')
      $(this).addClass('selected')
      $(this).siblings().eq(0).addClass('page-visible');
    }
  };
})();