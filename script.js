// =====================
// PORTFOLIO SLIDER
// =====================
const slider = document.getElementById("portfolioSlider");
let scrollAmount = 320; // width + gap

function slidePortfolio(direction) {
  const visibleImgs = Array.from(slider.querySelectorAll("img")).filter(img => img.style.display !== "none");
  if (visibleImgs.length === 0) return;

  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

// =====================
// CATEGORY FILTER
// =====================
function filterPortfolio(category, btn) {
  const images = slider.querySelectorAll("img");

  images.forEach(img => {
    if (category === "all") img.style.display = "block";
    else if (img.classList.contains(category)) img.style.display = "block";
    else img.style.display = "none";
  });

  slider.scrollLeft = 0; // reset slider

  document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

// =====================
// LIGHTBOX FUNCTIONALITY
// =====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox-nav.prev');
const nextBtn = document.querySelector('.lightbox-nav.next');

let currentImages = [];
let currentIndex = 0;

function openLightbox(img) {
  const visibleImgs = Array.from(slider.querySelectorAll("img")).filter(i => i.style.display !== "none");
  currentImages = visibleImgs;
  currentIndex = visibleImgs.indexOf(img);
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function showLightbox(index) {
  if (index < 0) index = currentImages.length - 1;
  if (index >= currentImages.length) index = 0;
  currentIndex = index;
  lightboxImg.src = currentImages[currentIndex].src;
}

// Click image opens lightbox
slider.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => openLightbox(img));
});

// Prev/Next buttons
prevBtn.addEventListener('click', () => showLightbox(currentIndex - 1));
nextBtn.addEventListener('click', () => showLightbox(currentIndex + 1));

// Close lightbox
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft') showLightbox(currentIndex - 1);
    if (e.key === 'ArrowRight') showLightbox(currentIndex + 1);
    if (e.key === 'Escape') lightbox.style.display = 'none';
  }
});

// =====================
// VIDEO HOVER & CLICK SOUND
// =====================
document.querySelectorAll('.video-gallery video').forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());
  video.addEventListener('click', () => video.muted = !video.muted);
});
