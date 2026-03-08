/* ==========================================================================
   Dashboard Component Logic
   ========================================================================== */

   const initDashboardInteractions = () => {
    const navLinks = document.querySelectorAll('.peaches-dashboard__nav-link[data-target]');
    const panels = document.querySelectorAll('.peaches-dashboard__panel');

    if (navLinks.length > 0 && panels.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get target panel id
                const targetId = link.getAttribute('data-target');
                
                // Remove active class from all links and panels
                navLinks.forEach(nav => nav.classList.remove('active'));
                panels.forEach(panel => panel.classList.remove('active'));

                // Add active class to clicked link and corresponding panel
                link.classList.add('active');
                const targetPanel = document.getElementById(targetId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    
                    // Optional small GSAP pop on the content inside panel
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo(targetPanel.children, 
                            { opacity: 0, y: 10 },
                            { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
                        );
                    }
                }
            });
        });
    }

    // GSAP Entrance Animations for Layout
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".peaches-dashboard__layout",
                start: "top 85%"
            }
        });

        tl.fromTo(".peaches-dashboard__nav", 
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        )
        .fromTo(".peaches-dashboard__panel.active > *", 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
            "-=0.3"
        );
    }
};

// Listen for custom event fired by component loader
document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.componentId === 'peachesDashboardSection') {
        initDashboardInteractions();
    }
});
