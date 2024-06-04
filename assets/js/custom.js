$(document).ready(function () {

  //responsive header menu js start

  $(".navbar-toggler").click(function () {
    $("body").toggleClass("cs__menu-open");
  });

// Toggle the dropdown when the button is clicked
$(".nav-link.dropdown-toggle").click(function (event) {
  $(".dropdown-menu").toggleClass("cs__open-dropdown");
  event.stopPropagation();
});

// Close the dropdown when clicking outside of it
$(document).on("click", function (event) {
  if (!$(event.target).closest(".dropdown-menu, .nav-link.dropdown-toggle").length) {
      $(".dropdown-menu").removeClass("cs__open-dropdown");
  }
});

// Prevent the dropdown from closing when clicking inside it
$(".dropdown-menu").on("click", function (event) {
  event.stopPropagation();
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