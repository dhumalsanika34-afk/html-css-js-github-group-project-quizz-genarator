const questions = [
    {
        question: "Which vitamin is primarily synthesized in the skin upon exposure to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        answer: "Vitamin D"
    },
    {
        question: "What is the functional unit of the kidney?",
        options: ["Neuron", "Nephron", "Alveolus", "Osteon"],
        answer: "Nephron"
    },
    {
        question: "Which blood group is known as the universal donor?",
        options: ["A+", "B+", "AB+", "O-"],
        answer: "O-"
    },
    {
        question: "Which organelle is known as the powerhouse of the cell?",
        options: ["Ribosome", "Golgi Body", "Mitochondria", "Lysosome"],
        answer: "Mitochondria"
    },
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        answer: "Newton"
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "Who proposed the theory of evolution by natural selection?",
        options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke"],
        answer: "Charles Darwin"
    },
    {
        question: "What is the pH value of pure water at 25°C?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which part of the human brain controls balance and coordination?",
        options: ["Cerebrum", "Medulla", "Cerebellum", "Hypothalamus"],
        answer: "Cerebellum"
    },
    {
        question: "Which biomolecule stores and transfers genetic information?",
        options: ["Protein", "Carbohydrate", "DNA", "Lipid"],
        answer: "DNA"
    }
];
let time = 120; //2 min

let timer = setInterval(() => {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
        `${minutes}:${seconds < 2 ? "0" : ""}${seconds}`;

    time--;

    if (time < 0) {
        clearInterval(timer);
        alert("Time Over! Exam Ended.");
    }

}, 1000);

let currentQuestion = 0;
let score = 0;

let answered = false;

function loadQuestion() {
    answered = false;

    document.getElementById("result").innerHTML = "";
    document.getElementById("progress").innerHTML = `Question ${currentQuestion + 1} / ${questions.length}`;

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    let html = "";

    for (let i = 0; i < q.options.length; i++) {

        html += `<button class="option" onclick="checkAnswer(this,'${q.options[i]}')">${q.options[i]}</button>`;
    }

    document.getElementById("options").innerHTML = html;

}

function checkAnswer(clickedButton, selectedOption) {
    if (answered) return;

    answered = true;

    let correctAnswer = questions[currentQuestion].answer;

    let options = document.querySelectorAll(".option");

    options.forEach(currentbutton => {

        if (currentbutton.innerText === correctAnswer) {
            currentbutton.classList.add("correct");
        }

        if (currentbutton === clickedButton && selectedOption !== correctAnswer) {
            currentbutton.classList.add("wrong");
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("result").innerHTML = "Correct Answer..!!!";
    }

    else {
        document.getElementById("result").innerHTML = "Incorrect Answer...";
    }
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    }
    else {

        document.querySelector(".quiz-box").innerHTML =
            `<h1 style="text-align:center;color:#1e3a8a;">
            Your Quiz Completed
        </h1>

        <h2 style="text-align:center;margin-top:20px;">
            Your Score: ${score}/${questions.length}
        </h2>

        <button class="btn" style="display:block ;margin:20px auto;" onclick="location.reload()">
            Restart Quiz
        </button>
        `;
    }
}

function previousQuestion() {

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

loadQuestion();