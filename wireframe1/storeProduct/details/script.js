/* ==========================================================================
   Product Details Component Logic
   ========================================================================== */

   const initDetailsInteractions = () => {
    // 1. Image Gallery Logic
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.peaches-details__thumb');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Update main image source
                mainImage.src = this.src;
                
                // Add simple fade animation
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(mainImage, 
                        { opacity: 0.5 }, 
                        { opacity: 1, duration: 0.3 }
                    );
                }

                // Update active state on thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // 2. Quantity Logic
    const qtyMinus = document.getElementById('qtyMinus');
    const qtyPlus = document.getElementById('qtyPlus');
    const qtyInput = document.getElementById('qtyInput');

    if (qtyMinus && qtyPlus && qtyInput) {
        qtyMinus.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value) || 1;
            if (currentValue > 1) {
                qtyInput.value = currentValue - 1;
            }
        });

        qtyPlus.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value) || 1;
            let maxValue = parseInt(qtyInput.max) || 10;
            if (currentValue < maxValue) {
                qtyInput.value = currentValue + 1;
            }
        });

        // Prevent non-numeric input for quantity
        qtyInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if(this.value === '' || parseInt(this.value) < 1) this.value = 1;
            if(parseInt(this.value) > 10) this.value = 10; 
        });
    }

    // 3. Optional ENTRANCE Animation
    if (typeof gsap !== 'undefined') {
        gsap.fromTo(".peaches-details__gallery", 
            { opacity: 0, x: -30 }, 
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        );

        gsap.fromTo(".peaches-details__info > *", 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
        );
    }
};

// Listen for custom event fired by component loader
document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.componentId === 'peachesDetailsSection') {
        initDetailsInteractions();
    }
});
