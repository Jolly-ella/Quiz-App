




const questions = [
    {
      question: "What is the capital of France?",
      answers: ["London", "Paris", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the chemical symbol for water?",
      answers: ["H2O", "CO2", "O2", "CH4"],
      correctAnswer: "H2O",
    },
    // Add more questions and answers as needed
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let isTestCompleted = false;
  
  function displayQuestion(index) {
    const questionBox = document.getElementById("questionBox");
    questionBox.innerHTML = "";
  
    const questionObj = questions[index];
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
  
    const questionText = document.createElement("p");
    questionText.textContent = `Q${index + 1}. ${questionObj.question}`;
    questionDiv.appendChild(questionText);
  
    const answersDiv = document.createElement("div");
    questionObj.answers.forEach((answer, i) => {
      const answerOption = document.createElement("label");
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "answer";
      radioInput.value = answer;
      answerOption.appendChild(radioInput);
      answerOption.append(` ${answer}`);
      answersDiv.appendChild(answerOption);
    });
  
    questionDiv.appendChild(answersDiv);
    questionBox.appendChild(questionDiv);
  }
  
  function changeQuestion(step) {
    currentQuestionIndex += step;
    if (currentQuestionIndex < 0) {
      currentQuestionIndex = questions.length - 1;
    } else if (currentQuestionIndex >= questions.length) {
      currentQuestionIndex = 0;
    }
    displayQuestion(currentQuestionIndex);
  }
  
  function submitTest() {
    if (!isTestCompleted) {
      // Check if the test is completed before allowing submission
      alert("You are not done yet. Please complete all questions.");
      return;
    }
  
    const answerInputs = document.querySelectorAll('input[name="answer"]');
    const selectedAnswer = Array.from(answerInputs).find((input) => input.checked);
  
    if (selectedAnswer && selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }
  
    displayScore();
  }
  
  function displayScore() {
    const questionBox = document.getElementById("questionBox");
    questionBox.style.display = "none";
  
    const scoreBox = document.getElementById("scoreBox");
    scoreBox.style.display = "block";
    scoreBox.textContent = `You got ${score} out of ${questions.length} questions right.`;
  }
  
  function startTest() {
    score = 0;
    currentQuestionIndex = 0;
    isTestCompleted = false;
    displayQuestion(currentQuestionIndex);
  
    const scoreBox = document.getElementById("scoreBox");
    scoreBox.style.display = "none";
  
    const questionBox = document.getElementById("questionBox");
    questionBox.style.display = "block";
  }
  
  function markTestCompleted() {
    isTestCompleted = true;
  }
  
  
  startTest();
  