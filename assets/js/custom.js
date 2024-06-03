$(document).ready(function () {

  //responsive header menu js start

  $(".navbar-toggler").click(function () {
    $("body").toggleClass("cs__menu-open");
  });

  // Responsive header menu JS end

  // Hero section slider start

  var swiper = new Swiper(".mySwiper.cs__hero-slider", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

    // Hero section slider end

});