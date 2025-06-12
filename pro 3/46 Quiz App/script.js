const quizData = [
{
    question: "Who was the first man created by God according to the Bible?",
    a: "Noah", 
    b: "Adam", 
    c: "Moses",
    d: "Abraham", 
    correct: "B",
},
{
    question: "In which book of the Bible is the story of David and Goliath found?",
    a: "Exodus",
    b: "Samuel", 
    c: "Kings", 
    d: "Psalms", 
    correct: "B",
},
{
    question: "Who was the first man created by God according to the Bible?",
    a: "Noah", 
    b: "Adam", 
    c: "Moses",
    d: "Abraham", 
    correct: "B",
},
{
    question: "Who was the first man created by God according to the Bible?",
    a: "Noah", 
    b: "Adam", 
    c: "Moses",
    d: "Abraham", 
    correct: "B",
},
{
    question: "Who was the first man created by God according to the Bible?",
    a: "Noah", 
    b: "Adam", 
    c: "Moses",
    d: "Abraham", 
    correct: "B",
},
];
 
const quiz = document.getElementById('quiz') 
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
 
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// function deselectAnswers() {
//     answerEls.forEach(answerEl => answerEl.checked = false )
// }

// function getSelected() {
//     let answer

//     answerEls.forEach(answerEl => {
//         if (answerEl.checked) {
//             answer = answerEl.id
//         }
//     })

//     return answer
// }

// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()

//     if (answer) {
//         if (answer === quizData[currentQuiz].correct) {
//             score++
//         }

//         currentQuiz++

//         if (currentQuiz < quizData.length) {
//             loadQuiz
//         } else {
//             quiz.innerHTML = `
//             <h2>You answered at ${score}/${quizData.length} questions correctly</h2>

//             <button onclick="location.reload()">Reload</button>
//             `
//         }
//     }
// })