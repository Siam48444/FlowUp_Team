// After loading animations.
gsap.from("nav", {
    y: "-30%",
    duration: 1,
    ease: "power1.out",
});
gsap.from(".hero_container", {
    y: "10%",
    opacity: 0,
    duration: 1,
    ease: "power1.out",
});

// Appearing on scroll animation.
appear_on_scroll_elements = document.querySelectorAll(".appear_on_scroll");
appear_on_scroll_elements.forEach((scroll_element) => {
    gsap.from(scroll_element, {
        opacity: 0,
        duration: 0.6,
        y: "50",
        scrollTrigger: {
            trigger: scroll_element,
            start: "top 80%",
        },
    });
});
