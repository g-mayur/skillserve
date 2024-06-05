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
        speed: 1000,
        effect: 'fade',
        centeredSlides: true,
        fadeEffect: { crossFade: true },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2000,
        },

      });
    // Hero section slider end

    // Testimonial Slider Start
    var swiper = new Swiper(".mySwiper.cs__testimonial-slider", {
      watchSlidesProgress: true,
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is <= 499px
        360: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        // when window width is <= 1200px
         1200: {
          slidesPerView: 3,
          spaceBetweenSlides: 30
      }
    }
    });
    // Testimonial Slider End

    // Counter Js Start
    $('.counter-value').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3500,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
  // Counter Js End

});