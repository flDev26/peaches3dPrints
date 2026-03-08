/* ==========================================================================
   Shopping Cart Component Logic
   ========================================================================== */

   const initCartInteractions = () => {
    // Basic quantity adjustment logic for demonstration
    const qtyInputs = document.querySelectorAll('.peaches-cart-item__qty-input');
    const minusBtns = document.querySelectorAll('.peaches-cart-item__qty-btn[aria-label="Decrease quantity"]');
    const plusBtns = document.querySelectorAll('.peaches-cart-item__qty-btn[aria-label="Increase quantity"]');

    const updateQuantity = (input, change) => {
        let currentValue = parseInt(input.value) || 1;
        let newValue = currentValue + change;
        let min = parseInt(input.min) || 1;
        let max = parseInt(input.max) || 10;

        if (newValue >= min && newValue <= max) {
            input.value = newValue;
            // In a real app, this would trigger a cart recalculation and API call
        }
    };

    minusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.nextElementSibling;
            updateQuantity(input, -1);
        });
    });

    plusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.previousElementSibling;
            updateQuantity(input, 1);
        });
    });

    // Remove button simple interaction
    const removeBtns = document.querySelectorAll('.peaches-cart-item__remove-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cartItem = e.target.closest('.peaches-cart-item');
            
            // GSAP remove animation
            if (typeof gsap !== 'undefined') {
                gsap.to(cartItem, {
                    opacity: 0,
                    x: -50,
                    duration: 0.3,
                    onComplete: () => {
                        cartItem.remove();
                        // In a real app, recalculate totals here
                    }
                });
            } else {
                cartItem.remove();
            }
        });
    });

    // GSAP Entrance Animations
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".peaches-cart__layout",
                start: "top 85%"
            }
        });

        // Stagger list items in
        tl.fromTo(".peaches-cart-item", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
        )
        // Fade in summary
        .fromTo(".peaches-cart__summary", 
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
            "-=0.3"
        );
    }
};

// Listen for custom event fired by component loader
document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.componentId === 'peachesCartSection') {
        initCartInteractions();
    }
});
