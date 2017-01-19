$(document).ready(function() {

    $("img, h1").fadeIn(9000);
    $("button").click(function(){
    
       $("img").fadeOut("slow");
    });
    $("h1").click(function(){
    
       $(event.delegateTarget ).css( "background-color", "slow");  
        
    });

});
