/**
 * SERVICES COMPONENT: script.js
 */

const initServicesAnimations = () => {
    if (typeof gsap === 'undefined') return;

    gsap.killTweensOf(".peaches-services__card");
    gsap.killTweensOf("#peachesServicesTitle");
    gsap.killTweensOf("#peachesServicesDesc");

    const sectionTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".peaches-services",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    sectionTimeline
        .fromTo("#peachesServicesTitle", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo("#peachesServicesDesc", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.4"
        )
        .fromTo(".peaches-services__card", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.2)" },
            "-=0.2"
        );
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesServicesSection') {
        initServicesAnimations();
    }
});

if (document.getElementById('peachesServicesWrapper')) {
    initServicesAnimations();
}
