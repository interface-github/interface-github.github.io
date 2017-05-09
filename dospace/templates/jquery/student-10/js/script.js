$(document).ready(function(){
  $('h1, p, img').fadeIn('slow');
  $('button').click(function(){
    $('img').fadeOut('slow');
  });
  $('header, footer').click(function(){
    $(this).css("background-color","green");
  });
});
  
