$(document).ready(function() {
  $('h1, p, img').fadeIn('slow');
  $('button').click(function() {
    $('img').fadeToggle(2000);
  });
  
  $('header, footer').click(function() {
    $(this).css({'background-color':'#7c1f78', 'color':'white'});
  });
  
  $('img').click(function() {
    $(this).css('border-radius','100px');
  });
});
  
