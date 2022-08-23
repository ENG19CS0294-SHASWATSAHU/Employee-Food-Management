$(document).ready(function () {
    $(".toggle").click(function () {
      $(".toggle").toggleClass("active");
      $("nav").toggleClass("active");
    });
  });
  function toggle_close() {
    $(".toggle").toggleClass("active");
    $("nav").toggleClass("active");
  }