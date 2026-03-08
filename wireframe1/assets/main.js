/**
 * PEACHES 3D PRINTS - GLOBAL SCRIPTS (ASSETS)
 * --------------------------------------------------------------------------
 * GSAP Base Setup & Common Utilities 
 */

// Global Loader Utility
window.peachesLoader = (url, containerId, callback) => {
    console.log(`[PeachesLoader] Loading ${url} into #${containerId}...`);
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
                if (callback) callback();
                // Refresh ScrollTrigger as new content has changed page height
                if (window.ScrollTrigger) ScrollTrigger.refresh();
                // Dispatch a custom event for other scripts to know a component is loaded
                document.dispatchEvent(new CustomEvent('peachesComponentLoaded', { detail: { containerId, url } }));
            }
        })
        .catch(err => console.error(`Failed to load component from ${url}:`, err));
};

document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP plugins
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Responsive Breakpoints matching CSS
        let mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            return () => {};
        });

        mm.add("(max-width: 991px)", () => {
             return () => {};
        });

        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });
    } else {
        console.warn("GSAP is not loaded globally.");
    }
});
