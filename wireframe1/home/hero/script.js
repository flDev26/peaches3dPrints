/**
 * HERO COMPONENT: script.js
 */

const initHeroAnimations = () => {
    if (typeof gsap === 'undefined') return;

    // Reset state for Elementor stability
    gsap.killTweensOf(".peaches-hero__headline-line");

    let mm = gsap.matchMedia();

    // Desktop / Tablet Animations
    mm.add("(min-width: 611px)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(".peaches-hero__headline-line",
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
        )
            .fromTo("#peachesHeroSubtitle",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(".peaches-hero__btn",
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1 },
                "-=0.4"
            )
            .fromTo(".peaches-hero__graphic",
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
                "-=1"
            );

        gsap.to(".peaches-hero__graphic", {
            y: -150,
            scale: 1.05,
            scrollTrigger: {
                trigger: ".peaches-hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // Mobile Animations (< 610px)
    mm.add("(max-width: 610px)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(".peaches-hero__headline-line",
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1, stagger: 0.1 }
        )
            .fromTo("#peachesHeroSubtitle",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                "-=0.4"
            )
            .fromTo(".peaches-hero__btn",
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 },
                "-=0.3"
            )
        // Create a master timeline
        const tl2 = gsap.timeline();

        // 1. Initial Entrance (Happens first)
        tl2.fromTo(".peaches-hero__graphic",
            { opacity: 0 },
            { opacity: 1, duration: 2, ease: "power2.out" }
        );

        // 2. Scroll Animation (Controlled by the scrollbar)
        gsap.to(".peaches-hero__graphic", {
            opacity: 0,
            scrollTrigger: {
                trigger: ".peaches-hero",
                start: "10% top",    // Starts 10% down the hero
                end: "50% top",      // Gone by 50%
                scrub: 1,
                markers: false,       // Set to true if you want to see the trigger lines
                immediateRender: false // CRITICAL: Prevents this from fighting the entrance animation
            }
        });
    });
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesHeroSection') {
        initHeroAnimations();
    }
});

if (document.getElementById('peachesHeroContainer')) {
    initHeroAnimations();
}
