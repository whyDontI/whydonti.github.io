// Contact page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.contact-content section, .faq-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Handle iframe loading
    const iframe = document.querySelector('.google-form-iframe');
    if (iframe) {
        iframe.addEventListener('load', function() {
            // Remove loading text if it exists
            const loadingText = this.contentWindow.document.querySelector('.loading-text');
            if (loadingText) {
                loadingText.style.display = 'none';
            }
        });
    }
});

// Add CSS for animations
const animationStyles = `
<style>
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
`;

// Inject animation styles
document.head.insertAdjacentHTML('beforeend', animationStyles);