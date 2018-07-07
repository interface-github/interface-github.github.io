$(document).ready(function(){
  $("#blue-box").fadeIn("slow");
  $("button").click (function(){ 
  $("#blue-box").fadeOut();
  });
  
  $("p").click(function(){
    $("p").css("color", "green");           
  });
  
  $("#blue-box").click(function(){
    $("#blue-box").css("border-radius", "100");
  });
});
