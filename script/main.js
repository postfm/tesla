$(function () {
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true,
  });

  $(".header-button").on("click", function () {
    $(".menu").addClass("menu-active");
  });

  $(".close-button").on("click", function () {
    $(".menu").removeClass("menu-active");
  });
});
