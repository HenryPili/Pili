document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.imgcon img');

    function fadeInImages() {
        images.forEach(image => {
            image.style.opacity = '0';
            image.style.transition = 'opacity 1s ease-in-out';
           
            requestAnimationFrame(function () {
                image.style.opacity = '1';
            });
        });
    }

    
    fadeInImages();
});
