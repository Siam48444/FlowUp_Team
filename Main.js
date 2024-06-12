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

// Hamburger menu interactivity.
const hamburger = document.querySelector(".hamburger_btn");
const menu = document.querySelector(".menu_section");
const hamburger_lines = document.querySelectorAll(".ham_btn_lines");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu_open");
    hamburger_lines[0].classList.toggle("line_1_transformed");
    hamburger_lines[1].classList.toggle("line_2_transformed");
    hamburger_lines[2].classList.toggle("line_3_transformed");
});

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
