const slider = document.querySelector('.slider');
let scrollAmount = 0;

function autoScroll() {
    const slideWidth = slider.clientWidth;
    scrollAmount += slideWidth;

    if (scrollAmount >= slider.scrollWidth) {
        scrollAmount = 0;
    }

    slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
}

setInterval(autoScroll, 3000);