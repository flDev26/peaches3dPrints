/**
 * GALLERY COMPONENT: script.js
 */

const initGalleryAnimations = () => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".peaches-gallery__item", {
        scrollTrigger: {
            trigger: ".peaches-gallery",
            start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: {
            grid: [2, 4],
            from: "center",
            amount: 0.5
        },
        ease: "back.out(1.7)"
    });
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesGallerySection') {
        initGalleryAnimations();
    }
});

if (document.getElementById('peachesGalleryWrapper')) {
    initGalleryAnimations();
}
