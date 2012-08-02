$(function () {
  $('.category').click(function (event) {
    var isSimon = !$(this).hasClass('category-mini');
    if (isSimon) {
      $('.categories').addClass('show-category')
      var categoryId = $(this).attr('id');
      $('#' + categoryId + '-page').show();
    }
    else {
      $('.categories').removeClass('show-category')
      $('.page').hide();
    }


    $('.category').each(function (index, element) {
      if (isSimon) {
        $(element).addClass('category-mini')
      }
      else {
        $(element).removeClass('category-mini')
      }

    })
  })
})