$(document).ready(function () {
  $("p").click(function(){
  $(this).css("color","blue");
  });

  $("div").mouseenter(function () {
    $(this).css("border-radius","100px");
    });
  
  $("div").mouseleave(function () {
    $(this).css("border-radius","0px");
    });
  
  $("div").click(function () {
    $(this).fadeOut(5000);
    });
  
});
