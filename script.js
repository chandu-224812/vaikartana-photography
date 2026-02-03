// =====================
// PORTFOLIO SLIDER
// =====================
const slider = document.getElementById("portfolioSlider");
let scrollAmount = 320; // width + gap of each image

// Scroll slider left/right
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

  slider.scrollLeft = 0; // reset slider to start

  // Highlight active button
  document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

// =====================
// LIGHTBOX FUNCTIONALITY
// =====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Open lightbox on image click
slider.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');

// Click outside image closes lightbox
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) lightbox.style.display = 'none';
});

// =====================

// Video hover autoplay + click to toggle sound
document.querySelectorAll('.video-gallery video').forEach(video => {
  // Hover plays/pauses (muted)
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());

  // Click toggles sound
  video.addEventListener('click', () => {
    if(video.muted) {
      video.muted = false;
      video.play();
    } else {
      video.muted = true;
    }
  });
});

