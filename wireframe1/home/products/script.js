/**
 * PRODUCTS COMPONENT: script.js
 */

const initProductsAnimations = () => {
    if (typeof gsap === 'undefined') return;

    gsap.killTweensOf(".peaches-product-card");
    gsap.killTweensOf("#peachesProductsTitle");
    gsap.killTweensOf("#peachesProductsLink");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".peaches-products",
            start: "top 75%",
            toggleActions: "play none none none" 
        }
    });

    tl.fromTo("#peachesProductsTitle, #peachesProductsLink",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    )
    .fromTo(".peaches-product-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.1)" },
        "-=0.2"
    );
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesProductsSection') {
        initProductsAnimations();
    }
});

if (document.getElementById('peachesProductsWrapper')) {
    initProductsAnimations();
}
