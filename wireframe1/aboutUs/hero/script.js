/**
 * ABOUT HERO COMPONENT: script.js
 * Handles responsive GSAP animations for the About Us section.
 */

const initAboutHeroAnimations = () => {
    // 1. Safety check for GSAP availability
    if (typeof gsap === 'undefined') {
        console.warn('GSAP is not loaded. Hero animations skipped.');
        return;
    }

    const hero = document.querySelector('.peaches-about-hero');
    const logo = document.getElementById('peachesAboutHeroLogoImg');
    const subtitle = document.getElementById('peachesAboutHeroSubtitle');

    if (!hero || !logo) return;

    // 2. Responsive Check
    // Matches your CSS @media (max-width: 610px)
    const isMobile = window.innerWidth <= 610;

    // 3. Create Timeline
    const tl = gsap.timeline({
        defaults: {
            ease: "power4.out",
            force3D: true // Hardware acceleration for smoother mobile motion
        }
    });

    // 4. Text Entrance: Staggered "reveal" from bottom
    tl.fromTo(".peaches-about-hero__headline-line",
        { yPercent: 100, opacity: 0 },
        {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2
        }
    )
        .fromTo(subtitle,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8
            },
            "-=0.6" // Overlap with headline
        );

    // 5. Logo Animation: Responsive Landing
    // Calculate starting center position based on current viewport
    const logoRect = logo.getBoundingClientRect();
    const startX = (window.innerWidth / 2) - (logoRect.left + logoRect.width / 2);

    tl.fromTo(logo,
        {
            y: 800,       // Start deep below
            x: startX,    // Start at viewport center
            opacity: 0,
            scale: 0.5,
            rotation: -10
        },
        {
            // Landing Position: 
            // -20 (or higher) for Mobile to avoid crowding text
            // 100 for Desktop as per original design
            y: isMobile ? -20 : 100,
            x: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "back.out(1.2)"
        },
        "-=1.2" // Start logo animation while text is still finishing
    );
};

/**
 * EXECUTION LOGIC
 */

// Handle Custom Event (if using a component loader)
document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesAboutHeroSection') {
        initAboutHeroAnimations();
    }
});

// Fallback: Run immediately if the element exists (direct page load)
if (document.getElementById('peachesAboutHeroLogoImg')) {
    // Small timeout ensures layout is fully calculated before gathering Rects
    setTimeout(initAboutHeroAnimations, 100);
}