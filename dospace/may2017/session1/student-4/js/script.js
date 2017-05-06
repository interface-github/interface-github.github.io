$(document).ready(function() {
  $('h1, p, img').fadeIn('slow');
  $('button').click(function() {
    $('img').fadeToggle(2000);
  });
  
  $('header, footer').click(function() {
    $(this).css('background-color', '#7c1f78');
  });
});
  
