const questions = [
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"],
        answer: "Central Processing Unit"
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        answer: "Microsoft"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which programming language is primarily used for web page interactivity?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Run Access Memory"],
        answer: "Random Access Memory"
    },
    {
        question: "Which company developed the Android operating system?",
        options: ["Apple", "Google", "Microsoft", "Samsung"],
        answer: "Google"
    },
    {
        question: "What is the full form of URL?",
        options: [
            "Uniform Resource Locator",
            "Universal Resource Link",
            "Uniform Reference Locator",
            "Universal Reference Link"
        ],
        answer: "Uniform Resource Locator"
    },
    {
        question: "Which device is used to connect a computer to the internet?",
        options: ["Scanner", "Printer", "Modem", "Speaker"],
        answer: "Modem"
    },
    {
        question: "What does AI stand for?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Internet", "Automatic Interface"],
        answer: "Artificial Intelligence"
    },
    {
        question: "Which company created the iPhone?",
        options: ["Samsung", "Google", "Apple", "Nokia"],
        answer: "Apple"
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