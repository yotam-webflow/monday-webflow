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
    slidesPerView: 1,

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
      479:  { slidesPerView: 1.5 },
      767:  { slidesPerView: 2 },
      991:  { slidesPerView: 3 },
      1280: { 
        slidesPerView: 3,
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

  card.addEventListener('click', () => {
    // If clicking the video while it's playing -> Pause it (keep active)
    if (card.classList.contains('is-playing')) {
      video.pause();
      card.classList.remove('is-playing');
    } 
    // If clicking to play
    else {
      // Reset all OTHER cards fully (Rule 3)
      cards.forEach(c => {
        if (c !== card) fullReset(c);
      });

      // Start current video
      video.muted = false;
      video.play();
      card.classList.add('is-active', 'is-playing');
    }
  });

  // Reset fully when video ends (Rule 1)
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
