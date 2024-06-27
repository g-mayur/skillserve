$(document).ready(function () {

  // Responsive header menu JS start
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
  var swiperHero = new Swiper(".mySwiper.cs__hero-slider", {
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
  var swiperTestimonial = new Swiper(".mySwiper.cs__testimonial-slider", {
    watchSlidesProgress: true,
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-paginationtest",
      clickable: true,
    },
    // autoplay: {
    //   delay: 2000,
    // },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  // Testimonial Slider End

  // Counter JS Start
  $('.counter-value').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3500,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  // Counter JS End

  // Header animation js start
  var t = 0;
  $(window).scroll(function () {
    var i = $(this).scrollTop();
    if (i > t) {
      $("header").addClass("slideOutUp");
      $("header").removeClass("slide-down");
    } else {
      $("header").removeClass("slideOutUp");
      $("header").addClass("slide-down");
    }
    t = i;
  });
  // Header animation js start

  // Aos animation js start
  AOS.init({
    duration: 1200,
    once: true,
  })
  // Aos animation js end

  // Top button js start
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 700) {
      // Scrolled down more than 2000px
      $(".cs__top-button").addClass("cs__scroll-down");
    } else {
      // Scrolled up above 2000px
      $(".cs__top-button").removeClass("cs__scroll-down");
    }
  });
  // Scroll to top on button click
  $(".cs__top-button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  // Top button Js end

  // Blog details scroll JS start
     // Scroll to content and add 'active' class when clicking on the list item
     $(".cs__left-block li").click(function () {
      var target = $(this).data("target");
      var offset = $(target).offset().top - $(".cs__right-block").offset().top + $(".cs__right-block").scrollTop();

      // Remove active class from all list items and add to the clicked one
      $(".cs__left-block li").removeClass("active");
      $(this).addClass("active");

      // Scroll the right panel to the corresponding section
      $(".cs__right-block").animate({
          scrollTop: offset
      }, 1000);
  });

  // Intersection Observer to add 'active' class to the corresponding list item on scroll
  const observerOptions = {
      root: document.querySelector('.cs__right-block'),
      rootMargin: '0px',
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const id = entry.target.id;
              $(".cs__left-block li").removeClass("active");
              $('.cs__left-block li[data-target="#' + id + '"]').addClass("active");
          }
      });
  }, observerOptions);

  // Observe each content section
  $('.cs__content-section').each(function () {
      observer.observe(this);
  });
  // Blog details scroll JS End

});
