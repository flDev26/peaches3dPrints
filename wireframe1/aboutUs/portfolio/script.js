/**
 * PORTFOLIO COMPONENT: script.js
 */

const initPortfolioAnimations = () => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".peaches-about-portfolio__category", {
        scrollTrigger: {
            trigger: ".peaches-about-portfolio",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out"
    });
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesAboutPortfolioSection') {
        initPortfolioAnimations();
    }
});

if (document.getElementById('peachesAboutPortfolioWrapper')) {
    initPortfolioAnimations();
}
