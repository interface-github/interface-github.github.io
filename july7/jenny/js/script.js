$(document).ready(function(){
  $("#blue-box").fadeIn();
  $("button").click (function(){ 
  $("#blue-box").fadeOut();
  });
  
  $("p").click(funcition(){
    $("p").css("color", "green");           
  });
});
