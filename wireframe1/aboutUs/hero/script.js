/**
 * ABOUT HERO COMPONENT: script.js
 */

const initAboutHeroAnimations = () => {
    if (typeof gsap === 'undefined') return;

    const hero = document.querySelector('.peaches-about-hero');
    const logo = document.getElementById('peachesAboutHeroLogoImg');

    if (!hero || !logo) return;

    const tl = gsap.timeline({
        defaults: { ease: "power4.out" }
    });

    // 1. Text animations
    tl.fromTo(".peaches-about-hero__headline-line",
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )
        .fromTo("#peachesAboutHeroSubtitle",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        );

    // 2. Logo animation: "lower out of view center" -> "centered right side"
    // Calculate starting position relative to current rest position
    // We want it to start at the horizontal center of the screen
    const logoRect = logo.getBoundingClientRect();
    const startX = (window.innerWidth / 2) - (logoRect.left + logoRect.width / 2);

    tl.fromTo("#peachesAboutHeroLogoImg",
        {
            y: 800, // Deep below the section
            x: startX, // Start at the center of the viewport
            opacity: 0,
            scale: 0.5,
            rotation: -10
        },
        {
            y: 100,
            x: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "back.out(1.2)"
        },
        "-=1.2" // Overlap with text animation
    );
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesAboutHeroSection') {
        initAboutHeroAnimations();
    }
});

// Fallback for direct page loads
if (document.getElementById('peachesAboutHeroLogoImg')) {
    initAboutHeroAnimations();
}
