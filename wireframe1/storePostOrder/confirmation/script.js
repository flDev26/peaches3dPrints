/* ==========================================================================
   Order Confirmation Component Logic
   ========================================================================== */

   const initConfirmationAnimations = () => {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".peaches-confirmation__container",
            start: "top 80%"
        }
    });

    // Animate the card up
    tl.fromTo(".peaches-confirmation__card", 
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
    // Animate the check icon popping in
    .fromTo(".peaches-confirmation__icon-wrapper",
        { scale: 0, rotation: -45 },
        { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2"
    )
    // Draw the checkmark
    .fromTo(".peaches-confirmation__icon path, .peaches-confirmation__icon polyline",
        { strokeDasharray: 100, strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" },
        "-=0.1"
    )
    // Fade in text content stagger
    .fromTo([".peaches-confirmation__title", ".peaches-confirmation__subtitle", ".peaches-confirmation__text"],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power1.out" },
        "-=0.4"
    )
    // Fade in order details
    .fromTo(".peaches-confirmation__details",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.2"
    )
    // Buttons pop up
    .fromTo(".peaches-confirmation__actions",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.1"
    );
};

// Listen for custom event fired by component loader
document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.componentId === 'peachesConfirmationSection') {
        initConfirmationAnimations();
    }
});
