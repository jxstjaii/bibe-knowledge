
const questions = [
  {
    question: "Who built the ark?",
    options: ["Moses", "Noah", "Abraham", "David"],
    answer: "Noah"
  },
  {
    question: "What is the first book of the Bible?",
    options: ["Exodus", "Psalms", "Genesis", "Matthew"],
    answer: "Genesis"
  },
  {
    question: "How many days did God take to create the world?",
    options: ["3", "5", "6", "7"],
    answer: "6"
  },
  {
    question: "Who was swallowed by a great fish?",
    options: ["Elijah", "Jonah", "Paul", "Peter"],
    answer: "Jonah"
  },
  {
    question: "Where was Jesus born?",
    options: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
    answer: "Bethlehem"
  }
];

let currentQuestionIndex = -1;

function loadQuestion() {
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  const question = questions[currentQuestionIndex];
  document.getElementById('question').innerText = question.question;
  const answersElement = document.getElementById('answers');
  answersElement.innerHTML = '';
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.onclick = () => checkAnswer(option, question.answer, button);
    answersElement.appendChild(button);
  });
}

function checkAnswer(selected, correctAnswer, button) {
  if (selected === correctAnswer) {
    button.style.backgroundColor = 'green';
  } else {
    button.style.backgroundColor = 'red';
  }
  setTimeout(loadQuestion, 1000); // Load next question after 1 second
}

loadQuestion();
