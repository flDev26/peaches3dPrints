/**
 * TESTIMONIALS COMPONENT: script.js
 */

const initTestimonialsAnimations = () => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".peaches-about-testimonial", {
        scrollTrigger: {
            trigger: ".peaches-about-testimonials",
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
    if (e.detail.containerId === 'peachesAboutTestimonialsSection') {
        initTestimonialsAnimations();
    }
});

if (document.getElementById('peachesAboutTestimonialsWrapper')) {
    initTestimonialsAnimations();
}
