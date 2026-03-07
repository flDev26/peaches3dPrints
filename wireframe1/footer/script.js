/**
 * FOOTER COMPONENT: script.js
 */

const initFooterLogic = () => {
    // Set dynamic year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (typeof gsap === 'undefined') return;

    // Subtle fade for footer 
    gsap.fromTo(".peaches-footer__wrapper",
        { opacity: 0, y: 20 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".peaches-footer",
                start: "top 95%"
            }
        }
    );
};

// Handle both direct call and global loader events
document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesFooter') {
        initFooterLogic();
    }
});

// Fallback for if it's already in the DOM
if (document.getElementById('peachesFooterWrapper')) {
    initFooterLogic();
}
