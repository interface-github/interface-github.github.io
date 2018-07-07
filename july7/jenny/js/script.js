$(document).ready(function(){
  $("#blue-box").fadeIn("slow");
  $("button").click (function(){ 
  $("#blue-box").fadeOut();
  });
  
  
  $("p").click(function(){
    $(this).css("background", "green"); 
  });
});
