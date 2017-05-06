$(document).ready(function)(){
  $("h1,p,img").fadeIn("slow");
$("button").click(function(){
  $("p").hide(5000);
});
$("header,footer").click (function(){
  $(this).css("background:"green" ,"color":"white");
});
  $("img").click (function(){
    $(this).css("border-radius","100px");
});
});
