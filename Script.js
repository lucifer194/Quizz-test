let currentLevel = 1;
let score = 0;

// Sample quiz questions (You can expand this to 100 levels)
const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter"], answer: "Mars" }
    // Add more questions up to 100 levels
];

function loadQuestion() {
    document.getElementById("level").innerText = currentLevel;
    let quiz = questions[currentLevel - 1];

    document.getElementById("question").innerText = quiz.question;
    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    quiz.options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selected) {
    let correctAnswer = questions[currentLevel - 1].answer;
    if (selected === correctAnswer) {
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
        document.getElementById("next-btn").style.display = "block";
    } else {
        alert("Wrong Answer! Try Again.");
    }
}

function nextLevel() {
    if (currentLevel < questions.length) {
        currentLevel++;
        loadQuestion();
    } else {
        alert("Congratulations! You've completed the quiz.");
    }
}

// Load first question
loadQuestion();
