$(document).ready(function() {
  $('img').fadeIn(5000);
  $('button').click(function() {
  $('img').fadeToggle(2000);
  });
  $('header').click(function() {
    $('header').css("background", "gray");
  });
});
