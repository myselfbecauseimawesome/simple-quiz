const questions = [
    {
        question: "Who is the winner of rb battles season 1?",
        answers: [
            { text: "TanQR", correct: false},
            { text: "Kreekcraft", correct: true},
            { text: "Flamingo", correct: false},
            { text: "Denis", correct: false},
        ]
    },
    {
        question: "Who is the winner of rb battles season 2?",
        answers: [
            { text: "TanQR", correct: true},
            { text: "Kreekcraft", correct: false},
            { text: "Lisa Gaming", correct: false},
            { text: "IBella", correct: false},
        ]
    },
    {
        question: "Who is the winner of rb battles season 3?",
        answers: [
            { text: "TanQR", correct: true},
            { text: "Kreekcraft", correct: false},
            { text: "PinkLeaf", correct: false},
            { text: "Denis", correct: false},
        ]
    },
    {
        question: "Who is the person that always says Judges?",
        answers: [
            { text: "Russo", correct: false},
            { text: "DJ Monopoly", correct: false},
            { text: "Sabrina", correct: true},
            { text: "KreekCraft", correct: false},
        ]
    }
    ,
    {
        question: "What are the magical items in season 2?",
        answers: [
            { text: "Staff", correct: false},
            { text: "Bow and arrow", correct: false},
            { text: "Sword", correct: true},
            { text: "Axe", correct: false},
        ]
    },
    {
        question: "What are the magical items in season 3?",
        answers: [
            { text: "Hats", correct: false},
            { text: "Weapons", correct: false},
            { text: "Colors", correct: false},
            { text: "Instruments", correct: true},
        ]
    },
    {
        question: "Who sponsored RB battles when Roblox didn't?",
        answers: [
            { text: "Mcdonalds", correct: false},
            { text: "Walmart", correct: true},
            { text: "Target", correct: false},
            { text: "doors", correct: false},
        ]
    },
    {
        question: "What is the villians name?",
        answers: [
            { text: "JP", correct: true},
            { text: "TanQR", correct: false},
            { text: "Kreekcraft", correct: false},
            { text: "DJ Monopoly", correct: false},
        ]
    },
    {
        question: "Who is the blue talk show host?",
        answers: [
            { text: "Sabrina", correct: false},
            { text: "JP", correct: false},
            { text: "Russo", correct: true},
            { text: "DJ", correct: false},
        ]
    },
    {
        question: "What games had the bits?",
        answers: [
            { text: "Piggy, Adopt Me, and Shopping Wars", correct: false},
            { text: "Shopping Wars, Bloxburg, and Arsenal", correct: false},
            { text: "Funky Friday, Tower of Heck, and Adopt Me", correct: false},
            { text: "Build a Boat for Treasure, Shopping Wars, and Super Golf", correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}



function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();





