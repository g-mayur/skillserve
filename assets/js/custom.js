$(document).ready(function () {

  //responsive header menu js start
  $(".cl__toggle-menu").click(function () {
    $(".cl__menu-list").toggleClass("cl__menu-active");
  });
  $(".cl__toggle-menu").click(function () {
    $("body").toggleClass("cl__menu-open");
  });

  // Customer Experiences slider start

  var swiper = new Swiper(".mySwiper.cl__cust-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      // when window width is >= 320px
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
    }
    
  });

});