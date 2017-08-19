$(document).ready(function(){
  $('h1').fadeIn(3000);
  $('button').click(function(){
    $('img').fadeOut(5000);
  });
  
  $('p').click(function(){
    $(this).css("color", "red");
  });
});
