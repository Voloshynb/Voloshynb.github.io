// Fade-in on scroll using Intersection Observer
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Swiper video carousel with video pause on slide change
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      slideChange: () => {
        const videos = document.querySelectorAll('.swiper-slide video');
        videos.forEach(video => {
          if (!video.paused) video.pause();
        });
      }
    }
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
});