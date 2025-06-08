let currentIndex = 0;
const slides = document.querySelectorAll(".banner-slide");
const totalSlides = slides.length;
const paginationDots = document.querySelectorAll(".banner-pagination li");

const firstSlideClone = slides[0].cloneNode(true);
document.querySelector(".banner-list").appendChild(firstSlideClone);

function goToSlide(index) {
  const actualIndex = index % (totalSlides + 1);
  document.querySelector(".banner-list").style.transition =
    "transform 0.3s ease"; // 加入平滑过渡
  document.querySelector(".banner-list").style.transform = `translateX(-${
    actualIndex * 100
  }%)`;

  paginationDots.forEach((dot) => dot.classList.remove("pagination-active"));
  paginationDots[actualIndex].classList.add("pagination-active");
  currentIndex = actualIndex;
}

function nextSlide() {
  goToSlide((currentIndex + 1) % (totalSlides + 1));
}

function prevSlide() {
  goToSlide((currentIndex - 1 + totalSlides + 1) % (totalSlides + 1));
}

goToSlide(currentIndex);

setInterval(nextSlide, 2000);

paginationDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
    currentIndex = index;
  });
});
