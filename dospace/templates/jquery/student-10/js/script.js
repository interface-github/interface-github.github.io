$(document).ready(function(){
  $('h1').fadeIn('slow');
  $('button').click(function(){
    $('img').fadeOut('slow');
  });
  $('header, footer').click(function(){
    $(this).css("background-color","green");
  });
});
  
