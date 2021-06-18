var readlineSync = require('readline-sync');
var chalk = require('chalk');

score = 0;
var userName = readlineSync.question("What is your name? ");

console.log("Welcome! " + chalk.bold.blueBright(userName) + " to HOW WELL DO YOU KNOW Urmil");
console.log("--------------------------------------");

var highScores= [{
  name: "Urmil",
  score: 10
}]




function play (question , answer)

{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("Correct!");
     score= score+1;
     
  }
  else{
    console.log("Wrong!");
  }
  console.log("current score: ", score);
     console.log("--------------------------------------");
}



var questions= [{
question: "Where do i live? " ,
 answer: "Rajkot"},
 {
question: "My fav sport? ",
  answer: "Cricket"
 },
 {
 question: "What is Urmil's favourite food? ",
 answer: "sandwich"
 },
 {
   question: "What is my favourite vacation destination? ",
   answer: "Goa"
 } ,
 {
   question: "what do i prefer: PizzaHut or Subway? ",
   answer: "Subway"
 },
 {
   question: "What do i prefer: Tea or coffee? ",
   answer: "Tea"
 },
 {
   question: "I prefer- French Fries  or Garlic Bread? ",
   answer: "Garlic Bread"
 },
 {
   question: "What is my birth date? (eg- 02-12):- ",
   answer: "22-08"
 },
 {
   question: "What genre of music i like to listen Jazz or Rock? ",
   answer: "Jazz"
 },
 {
   question:"What type of movie i like to watch Action or Comedy? ",
   answer: "Action"
 }
 ];

 for(i=0;i<questions.length; i++)
 {
   var currentQuestion = questions[i];
   play(chalk.yellow(currentQuestion.question),
   currentQuestion.answer)
 }

 console.log("YAY! you scored: )", score);
 console.log("Check out the highest scores");

 console.log("----------------");
 
 console.log("If you scored more than highest, then send me screenshot to update data");


 console.log("current highScore: " ,highScores);
