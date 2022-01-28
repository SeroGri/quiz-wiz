const startButton = document.querySelector('#start');
const introText = document.querySelector('#intro');
const quizAnswers = [[ "a. var array()" , "b. var array = {}" , "c. var array = []" , "d. var array = () => {}"] , ["a. variable", "b. varsity", "c. variety", "d. varied"], ["a. function() {};", "b. function {};", "c. var function = [];", "d. var function = thisFunction;"], ["a. onclick", "b. onload", "c. onmouseover", "d. onfunction"], ["a. In the header", "b. In the footer", "c. At the end of the body tag", "d. In the main tag"]];
const quizQuestions = ["1. Which of these is an example of an array?", "2. What does the 'var' stand for?", "3. Which of these is the correct way to write a function?", "4. Which of these is not a DOM Event?", "5.Where is the preferred spot to place the <script> tags for Javascript in your HTML file?"];
const correctAnswers = ["c. var array = []", "a. variable", "a. function() {};", "d. onfunction", "c. At the end of the body tag"];
const listAnswer = document.querySelector('#answers');


function startQuiz() {
    startButton.disabled = true;
    // Clear the initial text to make way for quiz prompts and answers
introText.textContent = quizQuestions[0];
var option1 = document.createElement("li");
var option2 = document.createElement("li");
var option3 = document.createElement("li");
var option4 = document.createElement("li");


listAnswer.appendChild(option1);
listAnswer.appendChild(option2);
listAnswer.appendChild(option3);
listAnswer.appendChild(option4);


option1.textContent = quizAnswers[0][0];
option2.textContent = quizAnswers[0][1];
option3.textContent = quizAnswers[0][2];
option4.textContent = quizAnswers[0][3];



};


//When the "startButton" is clicked, startQuiz();
startButton.addEventListener("click", startQuiz);

