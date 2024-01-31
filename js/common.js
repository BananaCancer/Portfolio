function increaseContactHeight() {
  $('.square:nth-child(1)').css('height', '60px');
  $('.square:nth-child(2)').css('height', '60px');
  $('.square:nth-child(3)').css('height', '60px');
  $('.square:nth-child(4)').css('height', '60px');
}
function reduceContactHeight() {
  $('.square:nth-child(1)').css('height', '0px');
  $('.square:nth-child(2)').css('height', '0px');
  $('.square:nth-child(3)').css('height', '0px');
  $('.square:nth-child(4)').css('height', '0px');
}

document.addEventListener("DOMContentLoaded", function() {
  
  $('.dropdown').hover(increaseContactHeight, reduceContactHeight)
  $('.dropdown').click(function() {
    if ($('.square:nth-child(1)').css('height') == "0px") {
      increaseContactHeight()
    } else {
      reduceContactHeight()
    }
  })
  $('img').each(function () {
    var altText = $(this).attr('alt');
    $(this).attr('title', altText);
  });
});