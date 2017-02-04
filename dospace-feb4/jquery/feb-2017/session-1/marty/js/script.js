$(document).ready(function() {

$("h1, p").fadeIn(5000);
$("button").click(function() {
  $("img").fadeIn(5000);
  });
  $("header, footer").click(function() {
$(this).css("background-color", "red");
      });
});
