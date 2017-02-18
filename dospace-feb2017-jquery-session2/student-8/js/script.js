$(document).ready(function(){
  $("h1").fadeIn();

    $("button.in").click(function(){
    $("img").fadeIn();
  });
  $("button.out").click(function(){
    $("img").fadeOut();
  });
 
$("header").click(function(){
  $("header").css("background-color","red");
  });

});
  
