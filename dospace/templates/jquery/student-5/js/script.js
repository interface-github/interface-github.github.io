$(document).ready(function(){
  $("h1,p").fadeIn(5000);
});
  $("button").click(function(){
     $("img").fadeOut(5000);
  });
  $("header").click(function(){
      $(this).css("background-color", "red");
  });
});
