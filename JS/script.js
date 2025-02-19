let index = 0;
function moveSlide(step) {
    const images = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    index += step;
    if (index >= totalImages) index = 0;
    if (index < 0) index = totalImages - 1;
    images.style.transform = `translateX(-${index * 100}%)`;
}