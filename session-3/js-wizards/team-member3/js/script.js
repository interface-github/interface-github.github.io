$(document).ready(function(){
  $("img, h1").fadeIn(3000);
  
  $('button').click(function() {
    $('#cat').fadeOut('fast');
  });
  
  $('header').click(function() {
    $(this).toggleClass("header-color");
  });
});
