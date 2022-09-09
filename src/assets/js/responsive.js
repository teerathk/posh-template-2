$('.resp-menuIcon').on('click', function(){
  $(".banner-container .left-bar").animate({
    left: '0',
    height: '100%',
    width: '100%'
  }, 300);
  $('.close-resp').fadeIn();
});
$('.close-resp').on('click', function(){
  $(this).hide();
  $(".banner-container .left-bar").animate({
    left: '-100%'
  }, 300);
});