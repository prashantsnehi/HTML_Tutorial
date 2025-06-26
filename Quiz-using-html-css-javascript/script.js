const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Lisbon"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None"],
    answer: "Hyper Text Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
    optionsEl.appendChild(li);
  });
}

nextBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) return alert("Please select an option");

  if (selectedOption.value === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = score;
  }
});

loadQuestion();
