$(document).ready(function(){
  $("#blue-box").fadeIn();
  $("button").click(function(){
    $("#blue-box").fadeOut();
      });
  
  $("p").click(function(){
    $("p").css("color", "green");
    
  $("p").click(function(){
    $(this).css("background", "green");
    });
  
});
