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


function toggleMenu(){
    let menuList = document.getElementById("menuList");
    if(menuList.style.display =="none"){
        menuList.style.display ="flex";
    }
    else{
        menuList.style.display ="none";
    }
}