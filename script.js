// Lightbox Slider Functionality for Activities Page
const modal = document.getElementById('activityModal');
const slideImg = document.getElementById('slideImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const slideCounter = document.getElementById('slideCounter');

let currentAlbum = [];
let currentIndex = 0;
let currentTitleText = '';
let currentDescText = '';

function openGallery(photos, title, desc) {
    currentAlbum = photos;
    currentIndex = 0;
    currentTitleText = title;
    currentDescText = desc;
    
    updateSlide();
    modal.classList.add('active');
}

function closeGallery() {
    modal.classList.remove('active');
}

function nextSlide() {
    if (currentAlbum.length === 0) return;
    currentIndex = (currentIndex + 1) % currentAlbum.length;
    updateSlide();
}

function prevSlide() {
    if (currentAlbum.length === 0) return;
    currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
    updateSlide();
}

function updateSlide() {
    slideImg.src = currentAlbum[currentIndex];
    modalTitle.textContent = currentTitleText;
    modalDesc.textContent = currentDescText;
    slideCounter.textContent = `รูปที่ ${currentIndex + 1} จาก ${currentAlbum.length}`;
}

// Close modal when clicking outside modal content
if(modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGallery();
        }
    });
}
