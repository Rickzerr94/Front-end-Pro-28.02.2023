let images = [
    "./img/mic1.jpg",
    "./img/mic2.jpg",
    "./img/mic3.jpg",
    "./img/mic4.jpg",
    // Додайте шляхи до інших зображень
];

let imageElement = document.getElementById("image");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let currentImageIndex = 0;

function showImage(index) {
    imageElement.src = images[index];
}

function updateButtons() {
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === images.length - 1;
}

prevBtn.addEventListener("click", function () {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
        updateButtons();
    }
});

nextBtn.addEventListener("click", function () {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
        updateButtons();
    }
});

showImage(currentImageIndex);
updateButtons();