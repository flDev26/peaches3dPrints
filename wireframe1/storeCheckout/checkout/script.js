/* ==========================================================================
   Checkout Component Logic
   ========================================================================== */

   const initCheckoutInteractions = () => {
    // Basic Form Validation Mockup
    const checkoutForm = document.querySelector('.peaches-checkout__form');
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            // Let the form submit naturally for the wireframe demo purposes to go to confirmation page
            // In a real app we'd intercept this to talk to Stripe/PayPal, etc.
            console.log("Processing secure payment...");
            
            // Optional: Show a loading state on the button
            const submitBtn = checkoutForm.querySelector('.peaches-checkout__submit');
            if (submitBtn) {
                submitBtn.innerHTML = 'Processing...';
                submitBtn.style.opacity = '0.8';
                submitBtn.disabled = true;
            }
        });
    }

    // Dynamic Shipping Update Simulation
    const shipRadios = document.querySelectorAll('input[name="shipping"]');
    const shippingTotalRow = document.querySelectorAll('.peaches-checkout__totals-row')[1].querySelectorAll('span')[1];
    const finalTotalRow = document.querySelector('.peaches-checkout__totals-final').querySelectorAll('span')[1];

    if (shipRadios.length > 0 && shippingTotalRow && finalTotalRow) {
        shipRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                let shippingCost = 0;
                if (e.target.value === 'standard') shippingCost = 8.50;
                if (e.target.value === 'express') shippingCost = 16.00;
                if (e.target.value === 'pickup') shippingCost = 0.00;

                // Subtotal is static $89.00 for demo
                // Tax is static $6.23 for demo
                const subtotal = 89.00;
                const tax = 6.23;
                
                const newTotal = subtotal + shippingCost + tax;

                // Update UI
                shippingTotalRow.textContent = `$${shippingCost.toFixed(2)}`;
                finalTotalRow.textContent = `$${newTotal.toFixed(2)}`;

                // Tiny bounce animation on total update
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(finalTotalRow, 
                        { scale: 1.1, color: "var(--clr-accent-orange)" }, 
                        { scale: 1, color: "var(--clr-primary-darkwood)", duration: 0.3 }
                    );
                }
            });
        });
    }

    // GSAP Entrance Animations
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".peaches-checkout__layout",
                start: "top 85%"
            }
        });

        tl.fromTo(".peaches-checkout__fieldset", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" }
        )
        .fromTo(".peaches-checkout__summary", 
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
        );
    }
};

// Listen for custom event fired by component loader
document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.componentId === 'peachesCheckoutSection') {
        initCheckoutInteractions();
    }
});
