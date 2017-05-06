$(document).ready(function(){
 $("h1, p,img").fadeIn("slow"); 
 $("button").click(function(){
   $("img").fadeOut(5000);
 });
  $("header, footer").click(function(){
    $(this).css("background": "purple", "color":"white");
});  
});
