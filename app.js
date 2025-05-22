const slider = document.querySelector(".slider");
const navLinks = document.querySelectorAll(".slider-nav a");
const slides = document.querySelectorAll(".slider img");
const buttons = document.querySelectorAll(".about-tags button");
let currentIndex = 0;

function updateActiveLink(index) {
  navLinks.forEach((link, i) => {
    link.classList.toggle("active", i === index);
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
    behavior: "smooth",
  });

  updateActiveLink(currentIndex);
}

setInterval(autoScroll, 4000);

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    currentIndex = index;
    updateActiveLink(index);
  });
});

function toggleMenu() {
  let menuList = document.getElementById("menuList");
  if (menuList.style.display == "none") {
    menuList.style.display = "flex";
  } else {
    menuList.style.display = "none";
  }
}

function aboutUs() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
}
aboutUs();

const infos = document.querySelectorAll(".abt-tag-info");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Toggle active button
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Toggle info section
    infos.forEach((info) => info.classList.remove("active"));
    infos[index].classList.add("active");
  });
});
const testimonials = [
  {
    text: `"Thanks to this NGO, my children now have access to quality education and a safe place to grow. You've changed our lives forever."`,
    author: "— Suma Devi, Beneficiary",
  },
  {
    text: `"Volunteering here gave me a sense of purpose. Working with the kids and seeing real impact was an unforgettable experience."`,
    author: "— Arjun Mehta, Volunteer",
  },
  {
    text: `"I’ve been supporting this NGO for over 3 years now. Their transparency and on-ground results make every rupee count."`,
    author: "— Kavitha Reddy, Donor",
  },
  {
    text: `"Partnering with this NGO enabled us to reach remote communities more efficiently. Their grassroots network is exceptional."`,
    author: "— Ramesh Nair, Program Manager",
  },
  {
    text: `"They gave me a scholarship when I had no other options. Today, I’m a nurse and giving back to my community."`,
    author: "— Lakshmi P., Former Student",
  },
  {
    text: `"This NGO's dedication to community upliftment is inspiring. I’m proud to contribute and be a small part of their journey."`,
    author: "— Chris Fernandes, Corporate Sponsor",
  },
  {
    text: `"Being a part of this NGO gave me a new outlook on life. Their commitment to dignity and inclusion is something every society needs."`,
    author: "— Bruce D., Community Advocate",
  },
];

const radios = document.querySelectorAll('input[name="testimonial"]');
const testimonialBox = document.getElementById("testimonialBox");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const index = parseInt(radio.value);
    const data = testimonials[index];

    testimonialBox.classList.remove("fade-in");
    testimonialBox.classList.add("fade-out");

    setTimeout(() => {
      // Update testimonial content with text and author
      testimonialBox.innerHTML = `<h1>${data.text}</h1>`;

      // Fade-in new content
      testimonialBox.classList.remove("fade-out");
      testimonialBox.classList.add("fade-in");
    }, 800); 
  });
});


const floatingBtn =()=>{
  const floatingTop = document.getElementsByClassName("floating-top")[0];

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      floatingTop.style.display = "flex";
    } else {
      floatingTop.style.display = "none";
    }
  });
}
floatingBtn();