// DARK MODE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// TYPING EFFECT
const text = [
    "Full Stack Developer",
    "Web Developer",
    "Computer Science Student",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 100);
    }
})();

// SCROLL REVEAL ANIMATION
function revealSections() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();
