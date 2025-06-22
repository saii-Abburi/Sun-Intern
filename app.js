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
  initFAQAccordion();
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

// ======= FAQ Accordion Functionality =======
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (!question || !answer) return;
    
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        const otherQuestion = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        
        if (otherItem !== item) {
          otherQuestion.setAttribute('aria-expanded', 'false');
          otherAnswer.style.maxHeight = '0px';
          otherAnswer.style.padding = '0px';
          otherAnswer.style.opacity = '0';
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      if (isExpanded) {
        // Close current item
        question.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0px';
        answer.style.padding = '0px';
        answer.style.opacity = '0';
        item.classList.remove('active');
      } else {
        // Open current item
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = '80px';
        answer.style.padding = '18px';
        answer.style.opacity = '1';
        item.classList.add('active');
      }
    });
    
    // Keyboard navigation support
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
}


