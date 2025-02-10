document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery');
    const loadMoreBtn = document.getElementById('loadMore');
    const clearGalleryBtn = document.getElementById('clearGallery');
    const removeLastBtn = document.getElementById('removeLast');
    const reverseGalleryBtn = document.getElementById('reverseGallery');
    const shuffleGalleryBtn = document.getElementById('shuffleGallery');

    let images = [];

    async function fetchImages() {
        try {
            const response = await fetch('https://picsum.photos/v2/list');
            const data = await response.json();
            images = data;
            displayImages(images.slice(0, 4));
        } catch (error) {
            console.error('Помилка завантаження зображень:', error);
        }
    }

    function displayImages(imageArray) {
        imageArray.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `${image.download_url}?w=300&h=200`;
            imgElement.alt = `Зображення від ${image.author}`;
            imgElement.classList.add('gallery-item');
            galleryContainer.appendChild(imgElement);
        });
    }

    function loadMoreImages() {
        const currentImages = galleryContainer.children.length;
        const newImages = images.slice(currentImages, currentImages + 4);
        if (newImages.length) {
            displayImages(newImages);
        } else {
            alert('Більше зображень немає');
        }
    }

    function clearGallery() {
        galleryContainer.innerHTML = '';
    }

    function removeLastImage() {
        if (galleryContainer.lastElementChild) {
            galleryContainer.removeChild(galleryContainer.lastElementChild);
        }
    }

    function reverseGallery() {
        const allImages = Array.from(galleryContainer.children);
        galleryContainer.innerHTML = '';
        allImages.reverse().forEach(img => galleryContainer.appendChild(img));
    }

    function shuffleGallery() {
        const allImages = Array.from(galleryContainer.children);
        for (let i = allImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
        }
        galleryContainer.innerHTML = '';
        allImages.forEach(img => galleryContainer.appendChild(img));
    }

    loadMoreBtn.addEventListener('click', loadMoreImages);
    clearGalleryBtn.addEventListener('click', clearGallery);
    removeLastBtn.addEventListener('click', removeLastImage);
    reverseGalleryBtn.addEventListener('click', reverseGallery);
    shuffleGalleryBtn.addEventListener('click', shuffleGallery);

    fetchImages();
});
