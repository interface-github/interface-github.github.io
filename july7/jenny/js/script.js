$(document).ready(function(){
  $("#blue-box").fadeIn(20000);
  $("button").click (function(){ 
  $("#blue-box").fadeOut(20000);
  });
  
  $("p").click(function(){
    $("p").css("color", "green");           
  });
  
  $("#blue-box").click(function(){
    $("#blue-box").css("background", "orange");
  });
});
