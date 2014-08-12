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

  // Activate popup
  var $item = $(".page-gallery .item");
  $item.on('click', function(){
    console.log(1);
    $(".page-gallery .item .pop").hide();
    $closing = $(".page-gallery .item .closing");
    if($closing.length){
      // do nothing
      $closing.removeClass("closing");
    }
    else {
      $pop = $('.pop', this);
      $pop.addClass('active').show();
    }
  });

  // Close popup
  var $close = $(".page-gallery .pop .close");
  $close.on('click', function(){
    console.log(2);
    //$parent = $(this).parent();
    //$parent.removeClass('active').hide();
    $close.addClass("closing");
  });

  // Resize popup
  setInterval(function(){
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();

    if(screenWidth < 900){
      var boxWidth = screenWidth - 20;
      var boxHeight = screenHeight - 20;
    }
    else {
      var boxWidth = screenWidth * .7;
      var boxHeight = screenHeight * .85;
    }


    var marginLeft = -1 * (boxWidth / 2);
    var marginTop = -1 * (boxHeight / 2);
    $pop = $(".page-gallery .item .pop.active");
    if($pop.length){
      $pop.css({
        width: boxWidth + 'px',
        height: boxHeight + 'px',
        "margin-left": marginLeft + 'px',
        "margin-top": marginTop + 'px',
        top: "50%",
        left: "50%"
      })
    }
  },10);

}(jQuery));
