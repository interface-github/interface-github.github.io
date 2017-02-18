$(document).ready(function(){
  $('h1').fadeIn('fast',1);
});
$(document).ready(function(){
  $('button').click(function(){
      $('img').fadeOut();
    });
  $('header, footer').click(function(){
    $('header, footer').css('background-color', 'red');
  });
});
