$(document).ready(function(){
  $("#blue-box").fadeIn();
  $("button").click(function(){
    $("#blue-box").fadeOut();
      });
  
  $("p").click(function(){
    $("p").css("color", "purple");
    
  $("#blue-box").click(function(){
    $("#blue-box").css("background-color", "orange");
  });
  
});
