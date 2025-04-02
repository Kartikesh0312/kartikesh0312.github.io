// Toggle dark/light mode
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Show More button for certifications
const showMoreBtn = document.getElementById('show-more-btn');
const hiddenItems = document.querySelectorAll('.certification-item.hidden');

showMoreBtn.addEventListener('click', () => {
    hiddenItems.forEach(item => {
        item.classList.toggle('hidden');
    });
    showMoreBtn.textContent = showMoreBtn.textContent === 'Show More' ? 'Show Less' : 'Show More';
});
