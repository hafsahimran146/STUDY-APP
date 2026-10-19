
const subjects = {
  "Biology": {
    icon: "✿",
    topics: {
      "Cells": [
        {
          q: "Which structure controls what enters and leaves a cell?",
          a: ["Cell membrane", "Cell wall", "Cytoplasm", "Ribosome"],
          correct: 0,
          explanation: "The cell membrane controls the movement of substances into and out of a cell."
        },
        {
          q: "Where does aerobic respiration mainly occur?",
          a: ["Nucleus", "Mitochondria", "Ribosomes", "Vacuole"],
          correct: 1,
          explanation: "Mitochondria are the main sites of aerobic respiration."
        },
        {
          q: "Which structure is present in plant cells but not animal cells?",
          a: ["Cell membrane", "Cytoplasm", "Cellulose cell wall", "Nucleus"],
          correct: 2,
          explanation: "Plant cells have a cellulose cell wall. Animal cells do not."
        }
      ],
      "Enzymes": [
        {
          q: "Enzymes are biological...",
          a: ["Fuels", "Catalysts", "Minerals", "Vitamins"],
          correct: 1,
          explanation: "Enzymes speed up chemical reactions without being used up."
        }
      ],
      "Nutrition": [
        {
          q: "Which substance is used to test for starch?",
          a: ["Benedict's solution", "Iodine solution", "Biuret reagent", "Ethanol"],
          correct: 1,
          explanation: "Iodine solution turns blue-black when starch is present."
        }
      ]
    }
  },

  "Mathematics": {
    icon: "∑",
    topics: {
      "Algebra": [
        {
          q: "Solve: 3x + 5 = 20.",
          a: ["x = 3", "x = 5", "x = 8", "x = 15"],
          correct: 1,
          explanation: "Subtract 5: 3x = 15. Divide by 3: x = 5."
        },
        {
          q: "Expand: 2(x + 4).",
          a: ["2x + 4", "x + 8", "2x + 8", "6x"],
          correct: 2,
          explanation: "Multiply both terms by 2 to get 2x + 8."
        }
      ],
      "Coordinates": [
        {
          q: "Find the gradient through (0, 2) and (2, 6).",
          a: ["1", "2", "3", "4"],
          correct: 1,
          explanation: "Gradient = (6 - 2) / (2 - 0) = 2."
        }
      ],
      "Geometry": [
        {
          q: "The angles in a triangle add up to...",
          a: ["90°", "180°", "270°", "360°"],
          correct: 1,
          explanation: "The interior angles of a triangle add up to 180°."
        }
      ]
    }
  },

  "Chemistry": {
    icon: "⚗",
    topics: {
      "Atoms": [
        {
          q: "Which subatomic particle has a negative charge?",
          a: ["Proton", "Neutron", "Electron", "Nucleus"],
          correct: 2,
          explanation: "Electrons are negatively charged."
        }
      ],
      "Bonding": [
        {
          q: "What type of bond forms when electrons are shared?",
          a: ["Ionic", "Covalent", "Metallic only", "Nuclear"],
          correct: 1,
          explanation: "Covalent bonds form when atoms share electron pairs."
        }
      ]
    }
  },

  "Physics": {
    icon: "⌁",
    topics: {
      "Forces": [
        {
          q: "What is the SI unit of force?",
          a: ["Joule", "Watt", "Newton", "Pascal"],
          correct: 2,
          explanation: "Force is measured in newtons (N)."
        }
      ],
      "Electricity": [
        {
          q: "What is the unit of electric current?",
          a: ["Volt", "Ampere", "Ohm", "Watt"],
          correct: 1,
          explanation: "Electric current is measured in amperes (A)."
        }
      ]
    }
  },

  "Computer Science": {
    icon: "⌘",
    topics: {
      "Algorithms": [
        {
          q: "What is an algorithm?",
          a: [
            "A computer screen",
            "A sequence of steps to solve a problem",
            "A storage device",
            "A type of keyboard"
          ],
          correct: 1,
          explanation: "An algorithm is a sequence of steps designed to solve a problem."
        }
      ]
    }
  },

  "English": {
    icon: "Aa",
    topics: {
      "Vocabulary": [
        {
          q: "Which word is closest in meaning to reluctant?",
          a: ["Unwilling", "Excited", "Certain", "Careless"],
          correct: 0,
          explanation: "Reluctant means unwilling or hesitant."
        }
      ]
    }
  },

  "History": {
    icon: "◷",
    topics: {
      "Historical causes": [
        {
          q: "What makes a historical explanation convincing?",
          a: [
            "Listing dates only",
            "Explaining how evidence supports a cause",
            "Giving an unrelated opinion",
            "Ignoring the question"
          ],
          correct: 1,
          explanation: "A strong explanation links accurate evidence to the historical event."
        }
      ]
    }
  },

  "Geography": {
    icon: "◎",
    topics: {
      "Weather and climate": [
        {
          q: "What is climate?",
          a: [
            "The weather in one hour",
            "Long-term weather patterns",
            "The temperature at noon only",
            "Wind speed only"
          ],
          correct: 1,
          explanation: "Climate describes weather patterns over a long period."
        }
      ]
    }
  },

  "Economics": {
    icon: "↗",
    topics: {
      "Scarcity": [
        {
          q: "Why does scarcity exist?",
          a: [
            "Resources are limited relative to wants",
            "All goods are free",
            "Wants never change",
            "Resources are unlimited"
          ],
          correct: 0,
          explanation: "Resources are limited while human wants are effectively unlimited."
        }
      ]
    }
  },

  "Business": {
    icon: "◇",
    topics: {
      "Marketing": [
        {
          q: "Which is part of the traditional marketing mix?",
          a: ["Promotion", "Gravity", "Cell division", "Evaporation"],
          correct: 0,
          explanation: "Promotion is one of the traditional four Ps of marketing."
        }
      ]
    }
  },

  "Accounting": {
    icon: "▤",
    topics: {
      "Trial balance": [
        {
          q: "What does a trial balance compare?",
          a: [
            "Assets and customers",
            "Total debit and credit balances",
            "Sales and weather",
            "Employees and products"
          ],
          correct: 1,
          explanation: "A trial balance checks whether total debit balances equal total credit balances."
        }
      ]
    }
  },

  "Other subjects": {
    icon: "✳",
    topics: {
      "Exam technique": [
        {
          q: "What should you check before practising a past paper?",
          a: [
            "The relevant syllabus and exam session",
            "Only the cover colour",
            "Another subject's syllabus",
            "Nothing at all"
          ],
          correct: 0,
          explanation: "Check that the paper matches your qualification and syllabus."
        }
      ]
    }
  }
};

let currentSubject = "Biology";
let currentTopic = "";
let questions = [];
let questionIndex = 0;
let score = 0;
let chosenAnswer = null;
let checked = false;
let lastMode = "topic";

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  showPage("home");
}

function renderSubjects() {
  const grid = document.getElementById("subjectGrid");

  grid.innerHTML = Object.entries(subjects).map(([name, data]) => `
    <button class="subject-card"
      style="--card-color:${colorFor(name)}"
      onclick="openSubject('${name}')">
      <span class="symbol">${data.icon}</span>
      <strong>${name}</strong>
      <small>${Object.keys(data.topics).length} topic areas · Open door ↗</small>
    </button>
  `).join("");
}

function colorFor(name) {
  const colors = {
    "Biology": "#ff80bc",
    "Mathematics": "#73d9ed",
    "Chemistry": "#ffb66d",
    "Physics": "#9de6bb",
    "Computer Science": "#c1a5ff",
    "English": "#ff91d0",
    "History": "#ffbd79",
    "Geography": "#85e5d2",
    "Economics": "#93b8ff",
    "Business": "#ff9a9a",
    "Accounting": "#d4a4ff",
    "Other subjects": "#e8d58d"
  };

  return colors[name] || "#c1a5ff";
}

function openSubject(name) {
  currentSubject = name;
  document.getElementById("subjectTitle").textContent = name;

  const topicList = document.getElementById("topicList");
  const topics = subjects[name].topics;

  topicList.innerHTML = Object.keys(topics).map((topic, index) => `
    <button class="topic-card"
      onclick="startQuiz('${topic}')">
      <strong>${String(index + 1).padStart(2, "0")} · ${topic}</strong>
      <small>${topics[topic].length} practice questions · Start challenge ↗</small>
    </button>
  `).join("");

  document.getElementById("progressText").textContent =
    "Your best scores are saved on this device.";

  showPage("topics");
}

function startQuiz(topic) {
  currentTopic = topic;
  lastMode = "topic";
  questions = subjects[currentSubject].topics[topic].slice();
  beginQuiz();
}

function startMixed() {
  lastMode = "mixed";
  currentTopic = "Mixed challenge";

  questions = Object.values(subjects[currentSubject].topics)
    .flat()
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  beginQuiz();
}

function beginQuiz() {
  questionIndex = 0;
  score = 0;
  chosenAnswer = null;
  checked = false;

  document.getElementById("quizLabel").textContent =
    currentSubject.toUpperCase() + " · " + currentTopic.toUpperCase();

  document.getElementById("scoreLabel").textContent = "SCORE: 0";

  showPage("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[questionIndex];

  chosenAnswer = null;
  checked = false;

  document.getElementById("questionNumber").textContent =
    `QUESTION ${questionIndex + 1} / ${questions.length}`;

  document.getElementById("question").textContent = q.q;
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").classList.remove("visible");

  document.getElementById("progressBar").style.width =
    `${questionIndex / questions.length * 100}%`;

  document.getElementById("nextBtn").disabled = true;
  document.getElementById("nextBtn").textContent = "CHECK ANSWER ↗";

  const letters = ["A", "B", "C", "D"];

  document.getElementById("answers").innerHTML =
    q.a.map((answer, index) => `
      <button class="answer" onclick="chooseAnswer(${index})">
        <b>${letters[index]}.</b> &nbsp; ${answer}
      </button>
    `).join("");
}

function chooseAnswer(index) {
  if (checked) return;

  chosenAnswer = index;

  document.querySelectorAll(".answer").forEach((button, i) => {
    button.classList.toggle("selected", i === index);
  });

  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  if (!checked) {
    if (chosenAnswer === null) return;

    checked = true;

    const q = questions[questionIndex];
    const correct = chosenAnswer === q.correct;

    if (correct) score++;

    document.querySelectorAll(".answer").forEach((button, i) => {
      button.disabled = true;

      if (i === q.correct) {
        button.classList.add("correct");
      } else if (i === chosenAnswer) {
        button.classList.add("wrong");
      }
    });

    const feedback = document.getElementById("feedback");

    feedback.textContent =
      (correct ? "✦ Correct! " : "↗ Not quite. ") + q.explanation;

    feedback.classList.add("visible");

    document.getElementById("scoreLabel").textContent =
      `SCORE: ${score}`;

    document.getElementById("progressBar").style.width =
      `${(questionIndex + 1) / questions.length * 100}%`;

    document.getElementById("nextBtn").textContent =
      questionIndex === questions.length - 1
        ? "SEE MY RESULTS ↗"
        : "NEXT QUESTION ↗";

    saveAnswer(correct, q);
    return;
  }

  if (questionIndex < questions.length - 1) {
    questionIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

function saveAnswer(correct, question) {
  let history = {};

  try {
    history = JSON.parse(localStorage.getItem("wrongDoorProgress")) || {};
  } catch (error) {
    history = {};
  }

  if (!history[currentSubject]) {
    history[currentSubject] = {
      answered: 0,
      correct: 0,
      best: 0
    };
  }

  history[currentSubject].answered++;

  if (correct) {
    history[currentSubject].correct++;
  }

  localStorage.setItem("wrongDoorProgress", JSON.stringify(history));
}

function showResults() {
  const total = questions.length;
  const percentage = Math.round(score / total * 100);

  document.getElementById("finalScore").textContent =
    `${score} / ${total}`;

  document.getElementById("resultTitle").textContent =
    percentage === 100
      ? "Every door unlocked!"
      : percentage >= 60
        ? "Another door opened."
        : "A new path begins.";

  document.getElementById("resultMessage").textContent =
    `${percentage}% accuracy. ${
      percentage >= 60
        ? "Nice work! Review the explanations and try another challenge."
        : "Keep practising. Every mistake is a clue to what you can learn next."
    }`;

  let history = {};

  try {
    history = JSON.parse(localStorage.getItem("wrongDoorProgress")) || {};
  } catch (error) {
    history = {};
  }

  if (!history[currentSubject]) {
    history[currentSubject] = {
      answered: 0,
      correct: 0,
      best: 0
    };
  }

  history[currentSubject].best = Math.max(
    history[currentSubject].best || 0,
    percentage
  );

  localStorage.setItem("wrongDoorProgress", JSON.stringify(history));

  document.getElementById("savedResults").textContent =
    `Questions answered: ${history[currentSubject].answered} · ` +
    `Best score: ${history[currentSubject].best}%`;

  showPage("results");
}

function retryQuiz() {
  if (lastMode === "mixed") {
    startMixed();
  } else {
    startQuiz(currentTopic);
  }
}

renderSubjects();
