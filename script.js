// Video URLs for each drink (you can replace these with actual YouTube video IDs)
const drinkVideos = {
    caipirinha: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    mojito: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    cosmopolitan: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    margarita: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video
};

const drinkNames = {
    caipirinha: 'Caipirinha Clássica',
    mojito: 'Mojito Refrescante',
    cosmopolitan: 'Cosmopolitan',
    margarita: 'Margarita Premium'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initDrinkCards();
    initModal();
    addScrollAnimations();
});

// Create animated background particles
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';

        particlesContainer.appendChild(particle);
    }
}

// Initialize drink card interactions
function initDrinkCards() {
    const drinkCards = document.querySelectorAll('.drink-minimal');

    drinkCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const drinkType = card.dataset.drink;
            openVideoModal(drinkType);
        });
    });
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeModal');

    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeVideoModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeVideoModal();
        }
    });
}

// Open video modal
function openVideoModal(drinkType) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const videoContainer = document.getElementById('videoContainer');

    // Set title
    modalTitle.textContent = drinkNames[drinkType];

    // Create iframe for video
    const iframe = document.createElement('iframe');
    iframe.src = drinkVideos[drinkType];
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    // Clear previous video and add new one
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);

    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close video modal
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');

    // Remove modal
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling

    // Clear video after animation
    setTimeout(() => {
        videoContainer.innerHTML = '';
    }, 300);
}

// Scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
}

// Smooth scroll for anchor links (if you add navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add floating animation to contact cards
function addFloatingAnimation() {
    const contactCards = document.querySelectorAll('.contact-card');

    contactCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${0.1 * (index + 1)}s both`;
    });
}

// Call on load
window.addEventListener('load', addFloatingAnimation);

// Parallax effect on scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const particles = document.querySelectorAll('.particle');

    particles.forEach((particle, index) => {
        const speed = (index % 3 + 1) * 0.05;
        particle.style.transform = `translateY(${currentScrollY * speed}px)`;
    });

    lastScrollY = currentScrollY;
});

// Add click ripple effect
document.querySelectorAll('.view-video-btn, .contact-card').forEach(element => {
    element.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Console Easter Egg
console.log('%c🍸 Rei Do Bar 🍹', 'font-size: 24px; font-weight: bold; color: #D4AF37;');
console.log('%cTransformando eventos em experiências inesquecíveis!', 'font-size: 14px; color: #4ecdc4;');
