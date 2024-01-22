document.addEventListener("DOMContentLoaded", function() {
    $('.dropdown').hover(
        function () {
            $('.square:nth-child(1)').css('height', '60px');
            $('.square:nth-child(2)').css('height', '60px');
            $('.square:nth-child(3)').css('height', '60px');
            $('.square:nth-child(4)').css('height', '60px');
          },
          function () {
            $('.square:nth-child(1)').css('height', '0px');
            $('.square:nth-child(2)').css('height', '0px');
            $('.square:nth-child(3)').css('height', '0px');
            $('.square:nth-child(4)').css('height', '0px');
          }
      );
});