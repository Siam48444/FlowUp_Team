// After loading animations.
gsap.from("nav", {
    y: "-30%",
    duration: 1,
});
gsap.from(".hero_image_container", {
    y: "10%",
    opacity: 0,
    duration: 1,
});

// Appearing on scroll animation.
appear_on_scroll_elements = document.querySelectorAll(".appear_on_scroll");
appear_on_scroll_elements.forEach((scroll_element) => {
    gsap.from(scroll_element, {
        opacity: 0,
        duration: 0.8,
        y: "80",
        scrollTrigger: {
            trigger: scroll_element,
            start: "top 70%",
        },
    });
});
