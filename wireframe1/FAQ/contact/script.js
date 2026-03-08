/**
 * FAQ CONTACT COMPONENT: script.js
 */

const initFaqContactAnimations = () => {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".peaches-faq-contact",
            start: "top 80%",
        }
    });

    tl.fromTo(".peaches-faq-contact__info > *", 
        {
            y: 30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out"
        }
    )
    .fromTo(".peaches-faq-contact__map-placeholder", 
        {
            scale: 0.9,
            opacity: 0
        },
        {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.2)"
        },
        "-=0.4"
    );
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesFaqContactSection') {
        initFaqContactAnimations();
    }
});

if (document.getElementById('peachesFaqContactWrapper')) {
    initFaqContactAnimations();
}
