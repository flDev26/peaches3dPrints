/**
 * FAQ SHIPPING COMPONENT: script.js
 */

const initFaqShippingAnimations = () => {
    if (typeof gsap === 'undefined') return;

    gsap.fromTo(".peaches-faq-shipping__card", 
        {
            y: 40,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: ".peaches-faq-shipping",
                start: "top 90%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)"
        }
    );
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesFaqShippingSection') {
        initFaqShippingAnimations();
    }
});

if (document.getElementById('peachesFaqShippingWrapper')) {
    initFaqShippingAnimations();
}
