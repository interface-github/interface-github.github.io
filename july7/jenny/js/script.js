$(document).ready(function(){
  $("#blue-box").fadeIn("slow");
  $("button").click (function(){ 
  $("#blue-box").fadeOut();
  });
  
  $("p").click(function(){
    $("p").css("color", "purple");           
  });
  
  $("#blue-box").click(function(){
    $(this).css("background", "green");
  });
});
