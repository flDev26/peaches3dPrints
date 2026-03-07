/**
 * HERO COMPONENT: script.js
 */

const initHeroAnimations = () => {
    if (typeof gsap === 'undefined') return;

    // Reset state for Elementor stability
    gsap.killTweensOf(".peaches-hero__headline-line");
    
    const tl = gsap.timeline({
        defaults: { ease: "power4.out" }
    });

    // Split text animation on the headline
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
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesHeroSection') {
        initHeroAnimations();
    }
});

if (document.getElementById('peachesHeroContainer')) {
    initHeroAnimations();
}
