$(document).ready(function () {

  //responsive header menu js start

  $(".navbar-toggler").click(function () {
    $("body").toggleClass("cs__menu-open");
  });

  $(".nav-link.dropdown-toggle").click(function () {
    $(".dropdown-menu").toggleClass("cs__open-dropdown");
  });
  // Responsive header menu JS end

  // Hero section slider start

  var swiper = new Swiper(".mySwiper.cs__hero-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

    // Hero section slider end

});