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