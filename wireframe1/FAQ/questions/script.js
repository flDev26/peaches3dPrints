/**
 * FAQ QUESTIONS COMPONENT: script.js
 */

const initFaqQuestionsAnimations = () => {
    if (typeof gsap === 'undefined') return;

    gsap.fromTo(".peaches-faq-questions__item", 
        {
            y: 25,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: ".peaches-faq-questions",
                start: "top 90%", // Trigger earlier
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }
    );
};

document.addEventListener('peachesComponentLoaded', (e) => {
    if (e.detail.containerId === 'peachesFaqQuestionsSection') {
        initFaqQuestionsAnimations();
    }
});

if (document.getElementById('peachesFaqQuestionsWrapper')) {
    initFaqQuestionsAnimations();
}
