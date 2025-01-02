// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// WhatsApp Integration
const bookButtons = document.querySelectorAll('.book-button');
const whatsappLink = document.querySelector('.whatsapp-link');
const phoneNumber = '919394921553'; // Removed + and formatted correctly

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const service = button.getAttribute('data-service');
        const message = `Hi! I'm interested in booking your ${service} service from sabinatours.com`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});

whatsappLink.addEventListener('click', (e) => {
    e.preventDefault();
    const message = "Hi! I'd like to know more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Redirect to WhatsApp with form details
    const formMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear form
    contactForm.reset();
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});