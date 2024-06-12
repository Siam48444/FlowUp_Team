// Footer appearing animation.
footer = document.querySelector("footer");
gsap.from(footer, {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: footer,
        start: "top 95%",
    },
});
