/**
 * FAQ HERO COMPONENT: script.js
 * Entrance animations only. ScrollTrigger parallax and fade-out removed.
 */

const initFaqHeroAnimations = () => {
    if (typeof gsap === 'undefined') return;

    // Reset state for stability
    gsap.killTweensOf(".peaches-faq-hero__headline-line, .peaches-faq-hero__graphic");

    let mm = gsap.matchMedia();

    // Desktop / Tablet Animations (> 610px)
    mm.add("(min-width: 611px)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // 1. Text Entrance
        tl.fromTo(".peaches-faq-hero__headline-line",
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
        )
            .fromTo("#peachesFaqHeroSubtitle",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );

        // 2. Graphic Entrance (Slide from right, then stays put)
        tl.fromTo(".peaches-faq-hero__graphic",
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
            "-=1"
        );
    });

    // Mobile Animations (< 610px)
    mm.add("(max-width: 610px)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // 1. Text Entrance
        tl.fromTo(".peaches-faq-hero__headline-line",
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1, stagger: 0.1 }
        )
            .fromTo("#peachesFaqHeroSubtitle",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                "-=0.4"
            );

        // 2. Graphic Entrance (Simple Fade, then stays put)
        tl.fromTo(".peaches-faq-hero__graphic",
            { opacity: 0, y: 10 }, // Slight upward lift on mobile for flavor
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
            "-=0.5"
        );
    });
};

/**
 * EXECUTION LOGIC
 */
document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesFaqHeroSection') {
        initFaqHeroAnimations();
    }
});

// Fallback for direct page loads
if (document.getElementById('peachesFaqHeroContainer')) {
    initFaqHeroAnimations();
}