$(document).ready(function(){
  $("h1,p,img").fadeIn("slow");

  $("button").click(function() {
    $("img").fadeOut(1000);
  });
  $("header, footer").click(function(){
    $(this).css('background-color"':'#cfc', 'color':'#0c0');
  });
});
