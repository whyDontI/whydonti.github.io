// Simple JavaScript for product pages

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

    // Add fade-in animation for the main content
    const docContainer = document.querySelector('.doc-container');
    if (docContainer) {
        docContainer.style.opacity = '0';
        docContainer.style.transform = 'translateY(20px)';

        setTimeout(() => {
            docContainer.style.transition = 'all 0.6s ease';
            docContainer.style.opacity = '1';
            docContainer.style.transform = 'translateY(0)';
        }, 100);
    }
});