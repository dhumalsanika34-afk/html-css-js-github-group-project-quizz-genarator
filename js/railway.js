const questions = [
    {
        question: "Which organization operates the railway network in India?",
        options: ["Indian Railways", "IRCTC", "NHAI", "Metro Rail Corporation"],
        answer: "Indian Railways"
    },
    {
        question: "What is the full form of IRCTC?",
        options: [
            "Indian Railway Catering and Tourism Corporation",
            "Indian Rail Transport Corporation",
            "Indian Rail Ticketing Corporation",
            "Indian Railway Travel Company"
        ],
        answer: "Indian Railway Catering and Tourism Corporation"
    },
    {
        question: "Which is the fastest train in India?",
        options: ["Rajdhani Express", "Vande Bharat Express", "Shatabdi Express", "Duronto Express"],
        answer: "Vande Bharat Express"
    },
    {
        question: "Which city has the headquarters of Indian Railways?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: "New Delhi"
    },
    {
        question: "What is the broad gauge width used by Indian Railways?",
        options: ["1435 mm", "1000 mm", "1676 mm", "762 mm"],
        answer: "1676 mm"
    },
    {
        question: "Which railway zone is the largest in India by route length?",
        options: ["Northern Railway", "Western Railway", "Central Railway", "Southern Railway"],
        answer: "Northern Railway"
    },
    {
        question: "What is the full form of RRB?",
        options: [
            "Railway Recruitment Board",
            "Railway Reservation Bureau",
            "Railway Revenue Board",
            "Railway Regional Branch"
        ],
        answer: "Railway Recruitment Board"
    },
    {
        question: "Which train is known as India's first semi-high-speed train?",
        options: ["Rajdhani Express", "Gatimaan Express", "Vande Bharat Express", "Shatabdi Express"],
        answer: "Gatimaan Express"
    },
    {
        question: "Which railway station has the longest platform in India?",
        options: ["Howrah Junction", "KSR Bengaluru", "Hubballi Junction", "New Delhi"],
        answer: "Hubballi Junction"
    },
    {
        question: "Who is known as the Father of Indian Railways?",
        options: ["Lord Dalhousie", "Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar"],
        answer: "Lord Dalhousie"
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