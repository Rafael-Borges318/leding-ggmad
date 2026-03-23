const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;

  if (next >= slides.length) {
    next = 0;
  }

  showSlide(next);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoSlide();
  });
});

showSlide(0);
startAutoSlide();
