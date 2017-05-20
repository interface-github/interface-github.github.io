$(document).ready(function(){
  
$("p").click(function(){
  $(this).css("color","blue");
});
 $("div").mouseenter(function(){
  $(this).css("border-radius","100px");
});
  $("div").click(function(){
  $(this).fadeOut(5000);
});
  });
