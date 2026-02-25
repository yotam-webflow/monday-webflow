/**
 * Swiper Carousel Configuration
 * Target: .wm-feature-carousel
 */

document.addEventListener("DOMContentLoaded", () => {
  const swiperOptions = {
    speed: 600,
    spaceBetween: 24,
    centeredSlides: false,
    loop: false,
    lazyPreloadPrevNext: 2,
    slidesPerView: "auto",

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

    breakpoints: {
      479:  { slidesPerView: "auto" },
      767:  { slidesPerView: "auto" },
      991:  { slidesPerView: "auto" },
      1280: { slidesPerView: "auto" }
    }
  };

  // Initialize Swiper
  const mySwiper = new Swiper('.wm-feature-carousel', swiperOptions);
});
