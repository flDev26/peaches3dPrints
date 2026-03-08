/* ==========================================================================
   Catalog component logic (GSAP Animations)
   ========================================================================== */

   const initCatalogAnimations = () => {
    // Check if GSAP and ScrollTrigger are available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger is not loaded. Animations will not play.');
        return;
    }

    // Header animation
    gsap.fromTo(".peaches-catalog__header > *", 
        {
            y: 30,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: ".peaches-catalog__header",
                start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }
    );

    // Product Grid stagger animation
    gsap.fromTo(".peaches-product-card", 
        {
            y: 50,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: ".peaches-catalog__grid",
                start: "top 80%",
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        }
    );
};

// Listen for the custom event fired by the component loader
document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.componentId === 'peachesCatalogSection') {
        initCatalogAnimations();
    }
});
