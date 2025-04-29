const slider = document.querySelector('.slider');
const navLinks = document.querySelectorAll('.slider-nav a');
const slides = document.querySelectorAll('.slider img');

let currentIndex = 0;

function updateActiveLink(index) {
    navLinks.forEach((link, i) => {
        link.classList.toggle('active', i === index);
    });
}

function autoScroll() {
    const slideWidth = slider.clientWidth;
    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    slider.scrollTo({
        left: slideWidth * currentIndex,
        behavior: "smooth"
    });

    updateActiveLink(currentIndex);
}

setInterval(autoScroll, 3000);

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        currentIndex = index;
        updateActiveLink(index);
    });
});



function toggleMenu(){
    let menuList = document.getElementById("menuList");
    if(menuList.style.display =="none"){
        menuList.style.display ="flex";
    }
    else{
        menuList.style.display ="none";
    }
}

const links = document.getElementsByClassName('slider-nav')[0].children;
console.log(links)