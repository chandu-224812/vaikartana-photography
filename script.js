// =====================
// PORTFOLIO SLIDER
// =====================
const slider = document.getElementById("portfolioSlider");
let currentCategory = 'all'; // track active category

function slidePortfolio(direction) {
  const visibleImgs = Array.from(slider.querySelectorAll("img"))
                           .filter(img => img.style.display !== "none");
  if (visibleImgs.length === 0) return;

  const scrollAmount = visibleImgs[0].offsetWidth + 20; // width + gap
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
  currentCategory = category;

  images.forEach(img => {
    if (category === "all") img.style.display = "block";
    else if (img.classList.contains(category)) img.style.display = "block";
    else img.style.display = "none";
  });

  slider.scrollLeft = 0;

  document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

// =====================
// LIGHTBOX FUNCTIONALITY WITH SLIDER
// =====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Add Prev/Next buttons inside lightbox dynamically
const prevBtn = document.createElement('button');
prevBtn.className = 'lightbox-nav prev';
prevBtn.innerHTML = '❮';
const nextBtn = document.createElement('button');
nextBtn.className = 'lightbox-nav next';
nextBtn.innerHTML = '❯';
lightbox.appendChild(prevBtn);
lightbox.appendChild(nextBtn);

let currentIndex = 0;
let visibleImages = [];

// Open lightbox on image click
slider.querySelectorAll('img').forEach((img, idx) => {
  img.addEventListener('click', () => {
    // Only include images currently visible (category filter)
    visibleImages = Array.from(slider.querySelectorAll('img'))
                         .filter(i => i.style.display !== 'none');
    currentIndex = visibleImages.indexOf(img);

    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Lightbox Prev/Next navigation
prevBtn.addEventListener('click', () => {
  if(visibleImages.length === 0) return;
  currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
  if(visibleImages.length === 0) return;
  currentIndex = (currentIndex + 1) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
});

// =====================
// VIDEO FUNCTIONALITY
// =====================
document.querySelectorAll('.video-gallery video').forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());

  video.addEventListener('click', () => {
    if(video.muted) {
      video.muted = false;
      video.play();
    } else {
      video.muted = true;
    }
  });
});
