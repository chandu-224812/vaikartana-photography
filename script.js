function filterPortfolio(category) {
    let images = document.querySelectorAll('.photo-grid img');
  
    if(category === 'all') {
      images.forEach(img => img.style.display = 'block');
    } else {
      images.forEach(img => {
        if(img.classList.contains(category)) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    }

    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

// LIGHTBOX FUNCTIONALITY
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.photo-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Click outside image closes lightbox
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// VIDEO HOVER AUTOPLAY
document.querySelectorAll('.video-gallery video').forEach(video => {
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => video.pause());
  });
  