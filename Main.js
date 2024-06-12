// Appearing on scroll animation.
appear_on_scroll_elements = document.querySelectorAll(".appear_on_scroll");
appear_on_scroll_elements.forEach((scroll_element) => {
    gsap.from(scroll_element, {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
        y: "50",
        scrollTrigger: {
            trigger: scroll_element,
            start: "top 80%",
        },
    });
});

// Navigation changing position on scroll.
var old_Y = window.scrollY;

window.addEventListener("scroll", () => {
    old_Y < window.scrollY ? scrollingdDown() : scrollingdUp();
    old_Y = window.scrollY;
});

function scrollingdDown() {
    gsap.to("nav", { y: "-105%", duration: 0.5 });
}
function scrollingdUp() {
    gsap.to("nav", { y: 0, duration: 0.5 });
}

// Footer appearing animation.
footer = document.querySelector("footer");
gsap.from(footer, {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: footer,
        start: "top 100%",
    },
});
