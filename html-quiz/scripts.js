const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);  
    }
}

function showQuestion(question) {
    // resetState();
    debugger
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        // button.classList.add('answer-btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;

        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function nextQuestion() {
    debugger
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function startGame() {
    debugger
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    nextQuestion();
    quizScore = 0;
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
        // quuzScore++;
    } else {
        element.classList.add('wrong');
    }
}


function selectAnswer(e) {
    debugger
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }

    if(selectedButton.dataset == correct) {
        quizScore++;
    }

    document.getElementById('right-answer').innerText = `Score: ${quizScore}`;
}




const questions = [
    { 
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Django", correct: false },
            { text: "Flask", correct: false },
            { text: "Laravel", correct: false }
        ]
    },
    { 
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Markup Language", correct: false },
            { text: "HyperText Machine Language", correct: false },
            { text: "HyperText Markup Link", correct: false }
        ]
    },
    { 
        question: "Which of the following is a CSS preprocessor?",
        answers: [
            { text: "Sass", correct: true },
            { text: "JavaScript", correct: false },
            { text: "HTML", correct: false },
            { text: "Python", correct: false }
        ]
    },
    { 
        question: "What is the purpose of the 'alt' attribute in an image tag?",
        answers: [
            { text: "To provide alternative text for the image", correct: true },
            { text: "To specify the image source", correct: false },
            { text: "To set the image width", correct: false },
            { text: "To link to another page", correct: false }
        ]
    },
    { 
        question: "Which of the following is a version control system?",
        answers: [
            { text: "Git", correct: true },
            { text: "FTP", correct: false },
            { text: "HTTP", correct: false },
            { text: "SMTP", correct: false }
        ]
    },
    { 
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    { 
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            { text: "<style>", correct: true },
            { text: "<css>", correct: false },
            { text: "<script>", correct: false },
            { text: "<link>", correct: false }
        ]
    },
    { 
        question: "What is the main purpose of JavaScript in web development?",
        answers: [
            { text: "To add interactivity to web pages", correct: true },
            { text: "To structure web content", correct: false },
            { text: "To style web pages", correct: false },
            { text: "To manage databases", correct: false }
        ]
    },
    { 
        question: "Which of the following is a JavaScript data type?",
        answers: [
            { text: "String", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "XML", correct: false }
        ]
    },
    { 
        question: "What is the purpose of the 'class' attribute in HTML?",
        answers: [
            { text: "To apply CSS styles to elements", correct: true },
            { text: "To define a JavaScript function", correct: false },
            { text: "To create a hyperlink", correct: false },
            { text: "To embed an image", correct: false }
        ]
    }
]

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});