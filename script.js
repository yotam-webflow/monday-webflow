/**
 * Swiper Carousel Configuration
 * Target: .wm-feature-carousel
 */

document.addEventListener("DOMContentLoaded", () => {
  const swiperOptions = {
    speed: 600,
    spaceBetween: 16,
    centeredSlides: false,
    loop: false,
    lazyPreloadPrevNext: 2,
    slidesPerView: 1.2,

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
      479:  { slidesPerView: 1.5},
      767:  { slidesPerView: 2 },
      991:  { slidesPerView: 3 },
      1280: { 
        slidesPerView: 3,
        spaceBetween: 32,
        simulateTouch: false
      }
    }
  };

  // Initialize Swiper
  const mySwiper = new Swiper('.wm-feature-carousel', swiperOptions);
});

/**
 Testimonial carousel
 */

const cards = document.querySelectorAll('.video-testimonial-card');

function fullReset(card) {
  const video = card.querySelector('video');
  video.pause();
  video.currentTime = 0;
  card.classList.remove('is-active', 'is-playing');
}

cards.forEach(card => {
  const video = card.querySelector('video');

  // Ensure it's at 0 as soon as the browser knows about the video
  video.addEventListener('loadedmetadata', () => {
    video.currentTime = 0;
  });

  card.addEventListener('click', () => {
    if (card.classList.contains('is-playing')) {
      video.pause();
      card.classList.remove('is-playing');
    } else {
      cards.forEach(c => {
        if (c !== card) fullReset(c);
      });

      video.muted = false;
      
      // Force reset to start just in case it was paused midway previously
      video.currentTime = 0; 
      
      // play() returns a promise; it's good practice to catch errors 
      // (like if the browser blocks autoplay)
      video.play().catch(error => {
        console.error("Playback failed:", error);
      });

      card.classList.add('is-active', 'is-playing');
    }
  });

  video.addEventListener('ended', () => {
    fullReset(card);
  });
});


function handleClick(selector, activeClass, toggle = false) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            elements.forEach(function(otherElement) {
                if (otherElement !== element) {
                    otherElement.classList.remove(activeClass);
                }
            });
            if (toggle) {
                element.classList.toggle(activeClass);
            } else {
                element.classList.add(activeClass);
            }
        });
    });
}

// Initialize handlers for different selectors
handleClick('.hor-flip-front', 'is-open');
// Enable toggle for this group
