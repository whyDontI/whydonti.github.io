// Products listing page JavaScript

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

    // Add hover effects for product cards
    const productCards = document.querySelectorAll('.product-card:not(.coming-soon)');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click tracking for product cards
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.querySelector('.product-name').textContent;
            console.log(`Navigating to: ${productName}`);
            // Could add analytics tracking here
        });
    });

    // Add staggered animation for product cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // Handle CTA button click to navigate back to portfolio contact
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Try to communicate with parent window if in an iframe
            if (window.parent !== window) {
                window.parent.postMessage({type: 'navigate', command: 'contact'}, '*');
            } else {
                // Fallback: redirect to main portfolio
                window.location.href = '../index.html';
            }
        });
    }
});