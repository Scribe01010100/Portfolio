// Filter gallery items
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');

    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox functionality
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxContent = document.createElement('div');
lightboxContent.classList.add('lightbox-content');
lightbox.appendChild(lightboxContent);

const lightboxClose = document.createElement('span');
lightboxClose.classList.add('lightbox-close');
lightboxClose.innerHTML = '&times;';
lightboxContent.appendChild(lightboxClose);

const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const imgSrc = img.src;
    const lightboxImg = document.createElement('img');
    lightboxImg.src = imgSrc;
    lightboxContent.innerHTML = '';
    lightboxContent.appendChild(lightboxImg);
    lightbox.style.display = 'block';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});