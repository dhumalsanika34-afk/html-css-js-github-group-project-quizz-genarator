const questions = [
    {
        question: "Who is known as the Father of the Indian Constitution?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"],
        answer: "B. R. Ambedkar"
    },
    {
        question: "Which Article of the Indian Constitution deals with Fundamental Rights?",
        options: ["Article 12-35", "Article 36-51", "Article 52-78", "Article 79-122"],
        answer: "Article 12-35"
    },
    {
        question: "Which is the highest mountain peak in India?",
        options: ["K2", "Kanchenjunga", "Nanda Devi", "Anamudi"],
        answer: "Kanchenjunga"
    },
    {
        question: "Who appoints the Chief Election Commissioner of India?",
        options: ["Prime Minister", "President", "Parliament", "Supreme Court"],
        answer: "President"
    },
    {
        question: "Which river is known as the 'Ganga of South India'?",
        options: ["Krishna", "Godavari", "Kaveri", "Tungabhadra"],
        answer: "Godavari"
    },
    {
        question: "The 'Quit India Movement' was launched in which year?",
        options: ["1940", "1942", "1945", "1947"],
        answer: "1942"
    },
    {
        question: "Which Constitutional Amendment lowered the voting age from 21 to 18 years?",
        options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        answer: "61st Amendment"
    },
    {
        question: "Which is the largest desert in India?",
        options: ["Thar Desert", "Sahara Desert", "Kalahari Desert", "Gobi Desert"],
        answer: "Thar Desert"
    },
    {
        question: "Who was the first President of independent India?",
        options: ["Rajendra Prasad", "Jawaharlal Nehru", "S. Radhakrishnan", "Zakir Husain"],
        answer: "Rajendra Prasad"
    },
    {
        question: "Which Schedule of the Indian Constitution contains the list of recognized languages?",
        options: ["Fifth Schedule", "Sixth Schedule", "Seventh Schedule", "Eighth Schedule"],
        answer: "Eighth Schedule"
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