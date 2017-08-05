$(document).ready(function() {
  $('h1').click(function(){
    $('h1').css("color", "green");
    });
   $('img').click(function(){
    $('img').css("border-radius", "160px");
   });
   $('button').click(function() {
    $('img').fadeOut(1000);
   });
});
