/ Quiz values
let score = 16;
let totalQuestions = 20;

let wrong = totalQuestions - score;
let percentage = Math.round((score / totalQuestions) * 100);

// Update UI
document.getElementById("correct").innerText = score;
document.getElementById("wrong").innerText = wrong;
document.getElementById("total").innerText = totalQuestions;
document.getElementById("percentage").innerText = percentage + "%";
document.getElementById("percentText").innerText = percentage + "%";

function goHome(){
    window.location.href = "index.html";
}