// After loading animations.
gsap.from(".hero_container", {
    opacity: 0,
    duration: 1.5,
    ease: "power1.out",
});

// Frequently asked questions.
const questions = document.querySelectorAll(".questions");
const answers = document.querySelectorAll(".question_answer");
const question_svg = document.querySelectorAll(".question_main svg");

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        answers[i].classList.toggle("answer_open");
        question_svg[i].classList.toggle("svg_rotated");
    });
}
