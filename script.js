// Elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const darkModeIcon = document.querySelector('#darkMode-icon');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxes = document.querySelectorAll('.resume-box');

// Hamburger menu toggle + disable scroll when open
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
});

// Close navbar when nav link clicked, restore scroll
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Scroll section active link highlighting & sticky header
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  // Sticky header
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', scrollY > 100);
});

// Resume tabs toggle
resumeLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    document.querySelector('.resume-list.active').classList.remove('active');
    list.classList.add('active');

    document.querySelector('.resume-box.active').classList.remove('active');
    resumeBoxes[idx].classList.add('active');
  });
});

// Dark mode toggle
darkModeIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('bx-sun');
  darkModeIcon.classList.toggle('bx-moon');
});


// ================================
// CONTACT FORM → WHATSAPP
// ================================

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#contact-name').value.trim();
    const email = document.querySelector('#contact-email').value.trim();
    const phone = document.querySelector('#contact-phone').value.trim();
    const message = document.querySelector('#contact-message').value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill all the fields");
      return;
    }

    const whatsappNumber = "919360256560"; // Example: 919876543210

    const whatsappMessage =
      `*New Contact Query*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Message:* ${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();
  });
}