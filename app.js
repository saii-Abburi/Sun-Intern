const slider = document.querySelector('.slider');
const navLinks = document.querySelectorAll('.slider-nav a');
const slides = document.querySelectorAll('.slider img');
const buttons = document.querySelectorAll('.about-tags button');
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

setInterval(autoScroll, 4000);

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

function aboutUs(){
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}
aboutUs();

const infos = document.querySelectorAll(".abt-tag-info");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Toggle active button
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Toggle info section
      infos.forEach(info => info.classList.remove("active"));
      infos[index].classList.add("active");
    });
  });