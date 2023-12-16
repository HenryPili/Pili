document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.box');

    function fadeIn() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight / 1.5;

            if (boxTop < triggerBottom) {
                box.classList.add('fade-in'); 
            } else {
                box.classList.remove('fade-in'); 
            }
        });
    }
    fadeIn();

    window.addEventListener('scroll', fadeIn);
});
