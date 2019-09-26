$(".nav-items-holder").on("click", function() {
  if ($(window).width() <= 600) {
    $(".items").toggle();
  }
});

$(window).on("resize", function() {
  if ($(window).width() > 600) {
    $(".items").css("display", "block");
  } else {
    $(".items").hide();
  }
});
