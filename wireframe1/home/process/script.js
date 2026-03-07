/**
 * PROCESS COMPONENT: script.js
 */

const initProcessAnimations = () => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".peaches-process__card", {
        scrollTrigger: {
            trigger: ".peaches-process",
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
    if (e.detail.containerId === 'peachesProcessSection') {
        initProcessAnimations();
    }
});

if (document.getElementById('peachesProcessWrapper')) {
    initProcessAnimations();
}
