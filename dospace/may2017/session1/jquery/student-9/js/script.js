$(document).ready(function() {
  $("h1, p, img").fadeIn("slow");
  $("button").click(function() {
    $("img").fadeOut(6000);
  });
  $("header, footer").click(function(){
    $(this).css("background", "#5a2372", "color":"white");
     });
      $("img").click(function(){
    $(this).css("border-radius", "100px");
  });
});
