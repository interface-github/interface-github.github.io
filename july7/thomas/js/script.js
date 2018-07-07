$(document).ready(function(){
  $("#blue-box").fadeIn();
  $("button").click(function(){
    $("#blue-box").fadeOut();
      });
    
  $("p").click(function(){
    $(this).css("background","green");
    });
  
  $("#blue-box").click(function(){
    $("#blue-box").css("background","green")
  });
  
});
