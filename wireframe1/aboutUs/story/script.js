/**
 * OUR STORY COMPONENT: script.js
 */

const initStoryAnimations = () => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".peaches-about-story__image-placeholder", {
        scrollTrigger: {
            trigger: ".peaches-about-story",
            start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".peaches-about-story__text > *", {
        scrollTrigger: {
            trigger: ".peaches-about-story",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesAboutStorySection') {
        initStoryAnimations();
    }
});

if (document.getElementById('peachesAboutStoryWrapper')) {
    initStoryAnimations();
}
