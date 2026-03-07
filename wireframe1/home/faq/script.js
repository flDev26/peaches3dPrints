/**
 * FAQ COMPONENT: script.js
 */

const initFaqLogic = () => {
    // FAQ logic can be added here if needed (e.g. for custom accordions)
    // Currently using native <details>
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesFaqSection') {
        initFaqLogic();
    }
});

if (document.getElementById('peachesFaqWrapper')) {
    initFaqLogic();
}
