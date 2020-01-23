$(function() {
  $('.side-bar_groups').hover(function() {
    $('.side-bar_users').hide();
    $(this).animate({height: "559px"},"slow");
  }, function() {
    $('.side-bar_users').show();
    $(this).animate({height: "264px"},"");  
  });
  $('.side-bar_users').hover(function() {
    $('.side-bar_groups').hide();
    $(this).css('height', 'calc(100vh - 100px)');
  }, function() {
    $('.side-bar_groups').show();
    $(this).css('height', '');
  });
});



