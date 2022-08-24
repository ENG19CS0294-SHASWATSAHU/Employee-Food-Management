$(document).ready(function() {
  $('input[type="radio"]').click(function() {
      var inputValue = $(this).attr("value");
      var targetBox = $("." + inputValue);
      $(".selectt").not(targetBox).hide();
      $(targetBox).show();
  });
});

function myFunction() {
  var x = document.getElementById("breakfast");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}