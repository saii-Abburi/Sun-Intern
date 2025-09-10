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
  initTeamsCarousel();
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

// ======= Teams Carousel Functionality =======
function initTeamsCarousel() {
  const teamsCarousel = document.querySelector('.teams-carousel');
  const teamsGrid = document.querySelector('.teams-grid');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const teamCards = document.querySelectorAll('.team-card');
  
  if (!teamsCarousel || !teamsGrid || !prevBtn || !nextBtn) return;
  
  let currentIndex = 0;
  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, teamCards.length - cardsPerView);
  
  function getCardsPerView() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 991) return 2;
    return 3;
  }
  
  function updateCarousel() {
    const cardWidth = teamCards[0].offsetWidth + 48; // 48px is the gap
    const translateX = -currentIndex * cardWidth;
    teamsGrid.style.transform = `translateX(${translateX}px)`;
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }
  
  function goToNext() {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  }
  
  function goToPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }
  
  // Event listeners
  nextBtn.addEventListener('click', goToNext);
  prevBtn.addEventListener('click', goToPrev);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'ArrowLeft') {
      goToPrev();
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    const newCardsPerView = getCardsPerView();
    if (newCardsPerView !== cardsPerView) {
      currentIndex = 0;
      updateCarousel();
    }
  });
  
  // Initialize carousel
  updateCarousel();
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

// Gallery Functionality
function initGallery() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const loadMoreBtn = document.querySelector('.load-more-btn');
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter gallery items
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.6s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Load more functionality
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      // Simulate loading more photos
      loadMoreBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
      loadMoreBtn.disabled = true;
      
      setTimeout(() => {
        loadMoreBtn.innerHTML = '<i class="fa-solid fa-check"></i> Photos Loaded';
        loadMoreBtn.style.background = '#28a745';
        
        setTimeout(() => {
          loadMoreBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Load More Photos';
          loadMoreBtn.style.background = 'linear-gradient(135deg, #ff5700 0%, #ff6b1a 100%)';
          loadMoreBtn.disabled = false;
        }, 2000);
      }, 1500);
    });
  }
}

// Lightbox functionality
let currentImageIndex = 0;
let galleryImages = [];

function openLightbox(imageSrc, imageTitle) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  
  // Get all gallery images for navigation
  galleryImages = Array.from(document.querySelectorAll('.gallery-item img')).map(img => ({
    src: img.src,
    title: img.alt
  }));
  
  // Find current image index
  currentImageIndex = galleryImages.findIndex(img => img.src.includes(imageSrc.split('/').pop()));
  
  // Update lightbox content
  lightboxImg.src = imageSrc;
  lightboxTitle.textContent = imageTitle;
  
  // Show lightbox
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function changeImage(direction) {
  if (galleryImages.length === 0) return;
  
  currentImageIndex += direction;
  
  if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  }
  
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  
  lightboxImg.src = galleryImages[currentImageIndex].src;
  lightboxTitle.textContent = galleryImages[currentImageIndex].title;
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
document.addEventListener('click', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Add fadeIn animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .gallery-item {
    animation: fadeIn 0.6s ease forwards;
  }
`;
document.head.appendChild(style);

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTabs();
  initCarousel();
  initTeamsCarousel();
  initFAQAccordion();
  initGallery(); // Add this line
});


