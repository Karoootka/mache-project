function orderMacbookView() {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 991) {
      $('#macbook').addClass('order-first');
    }
    if (viewportWidth > 991) {
      $('#macbook').removeClass('order-first');
    }
}

$(window).on('load', orderMacbookView);
$(window).resize(orderMacbookView);
