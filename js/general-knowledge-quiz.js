const questions = [
{
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi"
},
{
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
},
{
    question: "Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Sardar Patel"],
    answer: "Mahatma Gandhi"
},
{
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7"
},
{
    question: "Which is the largest ocean in the world?",
    options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
},
{
    question: "Which is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Leopard"],
    answer: "Tiger"
},
{
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Isaac Newton"],
    answer: "Alexander Graham Bell"
},
{
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Yangtze", "Nile", "Ganga"],
    answer: "Nile"
},
{
    question: "What is the currency of Japan?",
    options: ["Won", "Dollar", "Yuan", "Yen"],
    answer: "Yen"
},
{
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
}
];

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

function checkAnswer(clickedButton , selectedOption){
    if(answered) return;

    answered = true;

    let correctAnswer = questions[currentQuestion].answer;

    let options = document.querySelectorAll(".option");

    options.forEach(currentbutton =>{

        if(currentbutton.innerText === correctAnswer){
            currentbutton.classList.add("correct");
        }

        if(currentbutton === clickedButton && selectedOption !== correctAnswer){
            currentbutton.classList.add("wrong");
        } 
    });

    if(selectedOption === correctAnswer){
        score++;
        document.getElementById("result").innerHTML = "Correct Answer..!!!";
    }

    else{
        document.getElementById("result").innerHTML = "Incorrect Answer...";
    }
}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();
    }
    else{

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

function previousQuestion(){

    if(currentQuestion > 0){
        currentQuestion--;
        loadQuestion();
    }
}

loadQuestion();
