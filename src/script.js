import { loadInitialImages, loadMoreImages, clearGallery, removeLastImage, reverseGallery, shuffleGallery, openModal } from "./modules/gallery.js";

window.onload = loadInitialImages();

document.querySelector(".button-container button:nth-child(1)").onclick = loadMoreImages;
document.querySelector(".button-container button:nth-child(2)").onclick = clearGallery;
document.querySelector(".button-container button:nth-child(3)").onclick = removeLastImage;
document.querySelector(".button-container button:nth-child(4)").onclick = reverseGallery;
document.querySelector(".button-container button:nth-child(5)").onclick = shuffleGallery;
