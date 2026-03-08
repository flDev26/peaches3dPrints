/**
 * FAQ HERO COMPONENT: script.js
 */

const initFaqHeroAnimations = () => {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline({
        defaults: { ease: "power4.out" }
    });

    tl.fromTo(".peaches-faq-hero__headline-line",
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )
    .fromTo("#peachesFaqHeroSubtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
    );
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesFaqHeroSection') {
        initFaqHeroAnimations();
    }
});

if (document.getElementById('peachesFaqHeroContainer')) {
    initFaqHeroAnimations();
}
