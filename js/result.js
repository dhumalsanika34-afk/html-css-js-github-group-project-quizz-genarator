// Quizz js logic
let score = 0;
let totalQuestions = 10;
let wrong = totalQuestions - score;
let percentage = Math.round((score / totalQuestions) * 100);


document.getElementById("correct").innerText = score;
document.getElementById("wrong").innerText = wrong;
document.getElementById("total").innerText = totalQuestions;
document.getElementById("percentage").innerText = percentage + "%";
document.getElementById("percentText").innerText = percentage + "%";
document.getElementById("time").innerText = timeTaken + "seconds" ;

function goHome(){
    window.location.href = "index.html";
}