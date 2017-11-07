$(document).ready(function() {
  
  $('img').fadeIn(5000);
  
  $('button')click.(function() {
    
    $('img').fadeOut(5000);
    
    });
  $('header').click(function(){
    $('header').css('background','blue');
  
   });

});

<p><button>push me hard</button></p>
	
<div class="first"></div>
<div class="second"></div>
 
<script>
$( "button" ).click(function() {
  $( "div.first" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
  $( "div.second" ).slideUp( 300 ).fadeIn( 400 );
});
