# SUN NGO Website

A modern, premium, and fully responsive website for the Students Union for Nation (SUN) NGO. The site showcases the organization's mission, leadership, teams, testimonials, events, and provides a seamless donation and volunteer experience.

---

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Assets & Credits](#assets--credits)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Premium, Responsive Design:** Modern, mobile-first layout with orange-accented branding and elegant sections.
- **Hero Section:** Impactful call-to-action with slider and animated navigation.
- **About Us:** Tabbed content for Vision, Purpose, Values, and Impact Story, with animated stats and a volunteer form.
- **Teams:** Grid of specialized teams with images, roles, and quotes.
- **Leadership:** "Voices Behind the Vision" section with circular profile images, roles, and personal quotes.
- **Testimonials:** Premium testimonial cards with images, quotes, names, roles, and ratings.
- **Events:** Upcoming events with featured and list layouts.
- **Donation Page:** Modern, secure donation form with preset/custom amounts, payment method selection, and success feedback.
- **Newsletter & Socials:** Newsletter subscription and social media links.
- **Floating Top Button:** Quick navigation for user convenience.
- **Accessibility:** Semantic HTML, ARIA labels, and keyboard navigation.
- **Performance:** Optimized images and lazy loading for fast experience.

---

## Live Demo

https://saii-abburi.github.io/Sun-Intern/
---

## Project Structure

```
Sun Intern/
│
├── index.html           # Main landing page
├── Donation.html        # Donation form page
├── style.css            # All global and section-specific styles
├── app.js               # JavaScript for interactivity (slider, tabs, carousel, etc.)
├── slider1.jpg          # Hero/teams/leadership images
├── slider2.jpg
├── slider3.jpg
├── slider4.jpg
├── slider5.jpg
├── SunChildren.mp4      # (Optional) Video asset
├── upcoming.png         # Upcoming events image
└── README.md            # (You are here)
```

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- No backend or build tools required (pure HTML/CSS/JS)

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Sun\ Intern
   ```

2. **Open `index.html` in your browser:**
   - Double-click `index.html` or
   - Run a local server (recommended for JS/CSS):
     ```bash
     # Python 3.x
     python -m http.server
     # Then visit http://localhost:8000
     ```

3. **Donation Page:**
   - Access via the navigation or directly open `Donation.html`.

---

## Usage

### Main Sections

- **Header & Navigation:** Sticky, responsive, and accessible. Includes quick links and a prominent Login/Sign Up button.
- **Hero Section:** Eye-catching message with slider and call-to-action buttons.
- **About Us:** Tabbed interface for vision, purpose, values, and impact, plus animated stats and a volunteer registration form.
- **Teams:** Grid layout with images, roles, and inspirational quotes.
- **Leadership:** "Voices Behind the Vision" with circular images, names, roles, and personal quotes.
- **Testimonials:** Grid of testimonial cards with images, quotes, names, and ratings.
- **Events:** Featured and listed upcoming events with images and details.
- **Donation:** Secure, user-friendly donation form with preset/custom amounts, payment method, and success feedback.
- **Footer:** Newsletter, quick links, causes, contact info, and social media.

### Interactivity

- **Slider:** Auto-advances every 4 seconds; manual navigation via dots.
- **Tabs:** Click to switch between About Us content.
- **Testimonials:** Carousel and radio selection for feedback.
- **Floating Top Button:** Appears after scrolling, returns user to top.
- **Responsive Menu:** Hamburger menu for mobile navigation.

---

## Customization

- **Branding:** Update colors, logo, and text in `style.css` and HTML.
- **Images:** Replace `sliderX.jpg`, `upcoming.png`, and leadership/team images with your own.
- **Content:** Edit text, team members, testimonials, and events directly in the HTML.
- **Donation Logic:** The donation form is frontend-only. Integrate with a payment gateway for real transactions.
- **Social Links:** Update social media URLs in the header/footer.

---

## Assets & Credits

- **Icons:** [Font Awesome](https://fontawesome.com/) (via CDN)
- **Fonts:** [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue), [Rubik](https://fonts.google.com/specimen/Rubik)
- **Images:** Replace with your own or use royalty-free images.
- **Video:** `SunChildren.mp4` (optional, for hero or about section)

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

> Specify your license here (e.g., MIT, Apache 2.0, etc.)

---

## Contact

- **Email:** [@Sun.org.in](mailto:Sun.org.in)
- **Instagram:** [student_union_for_nation](https://www.instagram.com/student_union_for_nation/?hl=en)
- **Facebook:** [Student Union for Nation SUN](https://www.facebook.com/people/Student-Union-for-Nation-SUN/100067494638158/)

---

**Built with ❤️ by the SUN NGO team.** 
