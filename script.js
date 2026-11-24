const questions = [
    ["Have super strength", "Have super speed"],
    ["Be able to fly", "Be invisible"],
    ["Travel to the past", "Travel to the future"],
    ["Always be hot", "Always be cold"],
    ["Read minds", "Teleport anywhere"]
];

let current = 0;

const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");

function choose(number) {
    choice1.setAttribute("aria-pressed", number === 1);
    choice2.setAttribute("aria-pressed", number === 2);
}

function nextQuestion() {
    current++;

    if (current === questions.length) {
        current = 0;
    }

    choice1.textContent = questions[current][0];
    choice2.textContent = questions[current][1];

    choose(0);
}
