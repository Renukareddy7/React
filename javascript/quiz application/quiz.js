window.onload = function () {
    show(0);
}

let questions = [
  {
    id: 1,
    question: "what is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "random Access Memory",
      "randomly Access Memory",
      "Run Access Memory",
      "none of these",
    ],
  },
  {
    id: 2,
    question: "what is the full form of RAM1 ?",
    answer: "Random Access Memory",
    options: [
      "random Access Memory",
      "randomly Access Memory",
      "Run Access Memory",
      "none of these",
    ],
  },
  {
    id: 3,
    question: "what is the full form of Ra ?",
    answer: "Random Access Memory",
    options: [
      "random Access Memory",
      "randomly Access Memory",
      "Run Access Memory",
      "none of these",
    ],
  },
  {
    id: 4,
    question: "How do you write Hello World in an alert box  ?",
    answer: "alert('hello world')",
    options: [
      "msgbox('hello world')",
      "alertbox('hello world')",
      "alert('hello world')",
      "msg(''hello world)",
    ],
  },
  {
    id: 3,
    question: "Javascript is an _______ language?",
    answer: "Object Oriented",
    options: ["Object Oriented",
      "Object_based",
      "Procedural",
      "none of these"],
  },
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
    options: [
      "<js>",
      "<javascript>",
      "<script>",
      "none of these"],
  },
];


function submitform(e) {
    e.preventDefault();
    let name = document.forms['welcome_form']['name'].value

    //Store player name
    sessionStorage.setItem('name',name)
    console.log(name)
    location.href="quiz.html"
}

let question_count = 0;
let points = 0;

function next() {
   let user_answer = document.querySelectorAll("li.option.active").innerHTML;
  //check ans by error
  if (user_answer == questions[count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }

  if (question_count == questions.length) {
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`)
    clearInterval(mytime)
    location.href = "end.html";
    return;
  }
 

  question_count++;
  show(question_count);
  // console.log(question_count)
}

function show(count) {
    let question = document.getElementById("questions")
    // question.innerHTML="<h2>"+questions[count].question+"<h2/>"
    question.innerHTML = `<h2>Q${question_count+1}${questions[count].question}</h2>
     <ul class="option_group">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul>`;
    
}

function togggleactive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++){
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++){
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active")
        }
      }
      option[i].classList.add("active")
    }
  }
}
