document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('.About');
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    function handleFadeInAnimation() {
        const isInViewport = (elem) => {
            const bounding = elem.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        };

        if (isInViewport(aboutSection) && !aboutSection.classList.contains('fade-in')) {
            aboutSection.classList.add('fade-in');
        }
    }

    window.addEventListener('scroll', function () {
        handleFadeInAnimation();
    });

    handleFadeInAnimation();

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
