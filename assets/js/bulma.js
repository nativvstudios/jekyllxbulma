$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger, .navbar-menu", $(this).closest('.navbar')).toggleClass("is-active");
    });
  });