// script.js
console.log("Podcast Experience Loaded");

// Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
    autoRaf: true,
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Marquee clone for seamless loop
const marqueeContent = document.querySelector('.marquee-content');
if (marqueeContent) {
    const clone = marqueeContent.innerHTML;
    marqueeContent.innerHTML += clone;
}

const hero = document.querySelector('.hero');
const playBtn = document.querySelector('.play-btn');

// GSAP Integration
gsap.registerPlugin(ScrollTrigger);

if (hero && playBtn) {
    // Use GSAP utils for optimization
    const xTo = gsap.quickTo(playBtn, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(playBtn, "y", { duration: 0.4, ease: "power3" });

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        // Calculate distance from center of hero
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        xTo(x);
        yTo(y);
    });

    hero.addEventListener('mouseleave', () => {
        xTo(0);
        yTo(0);
    });
}

// Drag Indicator Magnetic Effect
const highlightWrapper = document.querySelector('.highlight-wrapper-relative');
const dragIndicator = document.querySelector('.drag-indicator');

if (highlightWrapper && dragIndicator) {
    const xToDrag = gsap.quickTo(dragIndicator, "x", { duration: 0.4, ease: "power3" });
    const yToDrag = gsap.quickTo(dragIndicator, "y", { duration: 0.4, ease: "power3" });

    highlightWrapper.addEventListener('mousemove', (e) => {
        const rect = highlightWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        xToDrag(x);
        // yToDrag(y);
    });

    highlightWrapper.addEventListener('mouseleave', () => {
        xToDrag(0);
        yToDrag(0);
    });
}

// Tab Switching Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button and target
        btn.classList.add('active');
        const targetId = btn.dataset.target;
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});





// Initialize Swiper
if (document.querySelector(".artistSwiper")) {
    var swiper = new Swiper(".artistSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true, // Allow free scrolling
        loop: true,     // Infinite loop
        speed: 800,     // Smooth transition speed
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
        },
    });
}
