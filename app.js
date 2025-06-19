const slider = document.querySelector(".slider");
const navLinks = document.querySelectorAll(".slider-nav a");
const slides = document.querySelectorAll(".slider img");
const tabButtons = document.querySelectorAll(".tab-btn");
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

// Premium Tab Functionality
function initTabs() {
  const tabContents = document.querySelectorAll(".tab-content");
  
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));
      
      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });
}

// Initialize tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTabs();
  initCarousel();
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
    text: `"I've been supporting this NGO for over 3 years now. Their transparency and on-ground results make every rupee count."`,
    author: "— Kavitha Reddy, Donor",
  },
  {
    text: `"Partnering with this NGO enabled us to reach remote communities more efficiently. Their grassroots network is exceptional."`,
    author: "— Ramesh Nair, Program Manager",
  },
  {
    text: `"They gave me a scholarship when I had no other options. Today, I'm a nurse and giving back to my community."`,
    author: "— Lakshmi P., Former Student",
  },
  {
    text: `"This NGO's dedication to community upliftment is inspiring. I'm proud to contribute and be a small part of their journey."`,
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

// Carousel Functionality
function initCarousel() {
  const carousel = document.querySelector('.feeds-container');
  const items = document.querySelectorAll('.feed-head');
  
  if (!carousel || items.length === 0) return;
  
  // Calculate total width of original items
  const originalItemsCount = items.length / 2; // Since we duplicated items
  const itemWidth = items[0].offsetWidth + 100; // 100px is the gap
  const totalWidth = originalItemsCount * itemWidth;
  
  // Reset animation when it completes
  carousel.addEventListener('animationend', () => {
    // Smoothly reset to start position
    carousel.style.animation = 'none';
    carousel.offsetHeight; // Trigger reflow
    carousel.style.animation = 'carouselScroll 20s linear infinite';
  });
  
  // Pause animation on hover
  carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
  });
  
  carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
  });
}

// ======= Our Reach Map Interactivity =======
(function() {
  const pins = document.querySelectorAll('.reach-pin');
  const tooltip = document.getElementById('reachTooltip');
  const mapContainer = document.querySelector('.reach-map-container');
  let hideTimeout = null;

  function showTooltip(evt, pin) {
    clearTimeout(hideTimeout);
    const city = pin.getAttribute('data-city');
    const people = pin.getAttribute('data-people');
    const programs = pin.getAttribute('data-programs');
    tooltip.innerHTML = `
      <strong>${city}</strong><br>
      <span>People Helped: <b>${people}</b></span><br>
      <span>Programs Run: <b>${programs}</b></span>
    `;
    tooltip.classList.add('active');
    tooltip.style.display = 'block';

    // Position tooltip
    const svg = mapContainer.querySelector('svg');
    const pt = svg.createSVGPoint();
    let cx = 0, cy = 0;
    // Find the main pin circle
    const circle = pin.querySelector('.pin-circle');
    if (circle) {
      cx = parseFloat(circle.getAttribute('cx'));
      cy = parseFloat(circle.getAttribute('cy'));
    }
    pt.x = cx;
    pt.y = cy;
    const screenCTM = svg.getScreenCTM();
    if (screenCTM) {
      const transformed = pt.matrixTransform(screenCTM);
      // Offset for tooltip
      let left = transformed.x - mapContainer.getBoundingClientRect().left;
      let top = transformed.y - mapContainer.getBoundingClientRect().top;
      // Responsive offset
      left -= tooltip.offsetWidth / 2;
      top -= tooltip.offsetHeight + 18;
      // Clamp to container
      left = Math.max(8, Math.min(left, mapContainer.offsetWidth - tooltip.offsetWidth - 8));
      top = Math.max(8, top);
      tooltip.style.left = left + 'px';
      tooltip.style.top = top + 'px';
    }
  }

  function hideTooltip() {
    tooltip.classList.remove('active');
    hideTimeout = setTimeout(() => {
      tooltip.style.display = 'none';
    }, 200);
  }

  pins.forEach(pin => {
    // Desktop: hover
    pin.addEventListener('mouseenter', evt => showTooltip(evt, pin));
    pin.addEventListener('mouseleave', hideTooltip);
    // Mobile: tap
    pin.addEventListener('touchstart', evt => {
      evt.stopPropagation();
      showTooltip(evt, pin);
    });
  });
  // Hide tooltip on tap/click elsewhere
  document.addEventListener('touchstart', function(evt) {
    if (!tooltip.contains(evt.target)) hideTooltip();
  });
  document.addEventListener('click', function(evt) {
    if (!tooltip.contains(evt.target)) hideTooltip();
  });
})();

