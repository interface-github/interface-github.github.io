$(document).ready(function(){
  $("#blue-box").fadeIn(3000);
  $("button").click(function(){
    $("#blue-box").fadeOut(3000);
      });
  
  $("p").click(function(){
    $("p").css("color", "purple");
    
  $("#blue-box").click(function(){
    $("#blue-box").css("background-color", "orange");
    });
  
});
