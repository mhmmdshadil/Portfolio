// Initialize icons
lucide.createIcons();

// Portfolio Carousel
function initCarousel() {
  const carousel = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');

  let currentIndex = 0;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 30;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    prevArrow.classList.toggle('disabled', currentIndex === 0);
    nextArrow.classList.toggle('disabled', currentIndex === items.length - 1);
  }

  nextArrow.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}

initCarousel();

// Header show/hide on scroll
window.addEventListener('scroll', () => {
  const fixedHeader = document.querySelector('.fixed-header');
  if (window.scrollY > 50) {
    fixedHeader.classList.add('active');
  } else {
    fixedHeader.classList.remove('active');
  }
});

// Fade-up animation
const fadeElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
