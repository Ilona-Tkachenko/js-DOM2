document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const loadMoreButton = document.getElementById("loadMore");
    const clearGalleryButton = document.getElementById("clearGallery");
    const removeLastButton = document.getElementById("removeLast");
    const reverseGalleryButton = document.getElementById("reverseGallery");
    const shuffleGalleryButton = document.getElementById("shuffleGallery"); 

    async function fetchImages(count = 4) {
        try {
            const response = await fetch(`https://picsum.photos/v2/list?limit=${count}`);
            if (!response.ok) throw new Error("Помилка мережевого запиту");
            return await response.json();
        } catch (error) {
            console.error("Помилка завантаження:", error);
        }
    }

    async function loadImages() {
        const images = await fetchImages(4);
        images.forEach(image => {
            const img = document.createElement("img");
            img.src = `${image.download_url}?w=150&h=150`;
            img.alt = `Зображення від ${image.author}`;
            gallery.appendChild(img);
        });
    }

    function clearGallery() {
        gallery.innerHTML = "";
    }

    function removeLastImage() {
        const lastImage = gallery.lastElementChild;
        if (lastImage) {
            gallery.removeChild(lastImage);
        }
    }

    function reverseGallery() {
        const images = Array.from(gallery.children);
        gallery.innerHTML = "";
        images.reverse().forEach(img => gallery.appendChild(img));
    }

    function shuffleGallery() {
        const images = Array.from(gallery.children);
        gallery.innerHTML = "";
        images.sort(() => Math.random() - 0.5); 
        images.forEach(img => gallery.appendChild(img));
    }

    loadMoreButton.addEventListener("click", loadImages);
    clearGalleryButton.addEventListener("click", clearGallery);
    removeLastButton.addEventListener("click", removeLastImage);
    reverseGalleryButton.addEventListener("click", reverseGallery);
    shuffleGalleryButton.addEventListener("click", shuffleGallery); 

    loadImages();
});
