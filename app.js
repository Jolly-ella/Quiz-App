const questions = [
  {
      question: "What gamma energy emission turned Banner into hulk?",
      answers: ["X-ray", "Radiation", "Green light", "Helium"],
      correctAnswer: "Radiation",
      selectedAnswer: ''

  },
  {
      question: "What villainous robot was created by Tony Stark and Bruce Banner?",
      answers: ["Vision", "Friday", "Ultron", "Destroyer"],
      correctAnswer: "Ultron",
      selectedAnswer: ''
  },
  {
      question: "How many infinity stones are there?",
      answers: ["Six", "Three", "Five", "Seven"],
      correctAnswer: "Six",
      selectedAnswer: ''
  },
  {
      question: "who played the role of Thor?",
      answers: ["Chris Pratt", "Chris Evans", "Chris Hemsworth", "Chris Shawn"],
      correctAnswer: "Chris Hemsworth",
      selectedAnswer: ''
  },
  {
      question: "S.H.I.E.L.D's Enemy?",
      answers: ["Hydra", "Sam", "Black widow", "Falcon"],
      correctAnswer: "Hydra",
      selectedAnswer: ''
  },
  {
      question: "Captain America's shield is made of what?",
      answers: ["Steel", "Vibranium", "Metal", "Iron"],
      correctAnswer: "Vibranium",
      selectedAnswer: ''
  },
  {
      question: "Marvel Comic writer, known for movie cameos?",
      answers: ["Jet Lee", "Stan Lee", "Bruce Lee", "jackie Lee"],
      correctAnswer: "Stan Lee",
      selectedAnswer: ''
  },
  {
      question: "----- of Agamotto was the mystic amulet worn by Doctor Strange?",
      answers: ["Spear", "Teeth", "Sword", "Eye"],
      correctAnswer: "Eye",
      selectedAnswer: ''
  },
  {
      question: "What role did samuel L. Jackson play?",
      answers: ["Nick Fury", "Steve rogers", "Captain Marvel", "Tony Stark"],
      correctAnswer: "Nick Fury",
      selectedAnswer: ''
  },

  {
      question: "What was Thor's brother's name",
      answers: ["Tom", "Steve", "Loki", "Pepper"],
      correctAnswer: "Loki",
      selectedAnswer: ''
  },

];

let index = 0;

function display() {
  disp.innerHTML = ''
  let question = questions[index]
  disp.innerHTML += `<h3 class='mb-4'>${index + 1}. ${question.question}</h3>`
  disp.innerHTML += '<form>'
  question.answers.forEach((el, i) => {
      disp.innerHTML += `<p class='my-2'><input type='radio' ${el == question.selectedAnswer ? 'checked' : ''} name="name" class='me-3' onchange="checks('${el}')"><span>${el}</span></p>`
  })
  disp.innerHTML += '</form>'


}

function controls(param) {
  // console.log(param);
  if (param == 'next' && questions[index + 1]) {
      index++
  }
  else if (param == 'previous' && questions[index - 1]) {
      index--
  }
  display()
}

function checks(val) {
  questions[index].selectedAnswer = val
  // console.log(questions[index]);
}

// function yess() {
//     toSubmit = true;
//     submits(); 
//     submitPrompt.hidden = true; 

// }

// function noo() {
//     toSubmit = false;
//     submitPrompt.hidden = true; 
// }

function submitVal(param) {
  if (param == 'yess') {
      toSubmit = true;
      submits();
      submitPrompt.hidden = true;

  } else if (param == 'noo') {
      toSubmit = false;
      submitPrompt.hidden = true;
  }
}


let remainingTime = 120;
let toSubmit = ''

function submits() {
  let right = questions.filter((el) => { return el.correctAnswer == el.selectedAnswer })
  let unanswered = questions.filter((el) => { return el.selectedAnswer == '' })


  disp.hidden = true;
  resultBox.hidden = false;
  nextButton.hidden = true;
  prevButton.hidden = true;
  submitButton.hidden = true;


  resultBox.innerHTML += `You scored ${right.length}/${questions.length}`
  clearTimeout(timer);

}



function preSubmit() {

  unanswered = questions.filter((el) => el.selectedAnswer === '');
  let right = questions.filter((el) => { return el.correctAnswer == el.selectedAnswer })

  if (remainingTime > 0 && unanswered.length >= 1) {

      submitPrompt.hidden = false;
      msg.innerHTML = 'You have not completed your quiz, are you sure you want to submit?';

      if (toSubmit === true) {
          submits();
          submitPrompt.hidden = true;
      } else if (toSubmit === false) {
          submitPrompt.hidden = false;
      }
  } else {
      submits();
  }
}



function startQuiz() {
  startButton.style.display = 'none'
  display();
  nextButton.hidden = false;
  prevButton.hidden = false;
  submitButton.hidden = false;
  updateTimer();
}





function updateTimer() {

  if (remainingTime <= 10) {
      timerDisplay.style.color = 'red'
  }

  if (remainingTime <= 0) {
      submits()
      timerDisplay.innerHTML = `Time's up, your quiz has been submitted`;
      timerDisplay.style.color = 'black';
      return;
  }

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  timerDisplay.textContent = `Time Remaining: ${formattedTime}`;
  remainingTime--;
  timer = setTimeout(updateTimer, 1000);
  timerDisplay.hidden = false;
}




