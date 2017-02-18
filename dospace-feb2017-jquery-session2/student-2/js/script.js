$(document).ready(function(){
  $('h1').fadeIn();
$('button').click(function(){
      $('img').fadeOut();
    });
  $('header, footer').click(function(){
    $('header, footer').css('background-color', 'red');
  });
});
