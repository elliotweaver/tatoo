(function($) {

  $.localScroll();

  // Gallery
  var $packery = $('#packery');
  $packery.packery({
    itemSelector: '.item',
    gutter: 10
  });

  setInterval(function(){
    $packery.packery({
      itemSelector: '.item',
      gutter: 10
    });
  },500);

  var $item = $(".page-gallery .item");
  $item.on('click', function(){
    $pop = $('.pop', this);
    if($pop.hasClass('active')){

    }
    else {
      $pop.addClass('active');
      $pop.animate({
        top: '0px'
      },500, function(){

      });
    }
  });

  var $close = $(".page-gallery .pop .close");
  $close.on('click', function(){
    $parent = $(this).parent();
    $parent.animate({
      top: '-1000px'
    },500, function(){
      $parent.removeClass('active');
    });
  });

}(jQuery));
