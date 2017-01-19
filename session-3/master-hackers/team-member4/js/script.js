$(document).ready(function() {

    $("img").fadeIn(9000);
    $("h1").fadeIn(4500);
    $("button").click(function(){
    
       $("img").fadeOut(3300);
    });
    $("header").click(function(){
    
       $("header").css( "background-color", "red");  
        
    });

});
