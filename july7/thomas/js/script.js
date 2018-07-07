$(document).ready(function(){
  $("#blue-box").fadeIn(3000);
  $("button").click(function(){
    $("#blue-box").fadeOut();
      });
  
  $("p").click(function(){
    $("p").css("color", "green");
    
  $("#blue-box").click(function(){
    $("#blue-box").css("background", "orange");
    });
  
});
