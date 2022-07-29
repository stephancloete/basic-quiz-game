var correctAnswers = [];
var quizAnswers = ["b", "c", "a", "d", "b", "b", "a", "a"];
var amountCorrect = 0;
 
function startQuiz(){    
    questionOne();
}

function questionOne(){
    
    userInput = prompt("1. What Swedish band is famous for winning Eurovision with Waterloo?\n(only enter A, B, C or D)\n\nA) Europe\nB) ABBA\nC) Ace of Base \nD) Roxette");
    
    userInput = userInput.toLowerCase();

    if(userInput == quizAnswers[0]){
        correctAnswers.push(userInput);
        amountCorrect = amountCorrect +1;
        alert("Right answer!")
    }/*else if(userInput !== "a" && userInput !== "b" && userInput !== "c" && userInput !== "d"){
        alert("Invalid Entry!\nPlease only enter A, B, C or D");
        questionOne();
    }else if(userInput != quizAnswers[0]){
       alert("Wrong answer!");
    }*/

    questionTwo();
}

function questionTwo(){

    userInput = prompt("2. Who was known as ‘The King of Pop’?\n(only enter A, B, C or D)\n\nA) George Michael\nB) Stevie Wonder\nC) Michael Jackson\nD) Rick Astley");

    userInput = userInput.toLowerCase();

    if(userInput == quizAnswers[1]){
        correctAnswers.push(userInput);
        amountCorrect = amountCorrect +1;
    }/*else if(userInput != "a" || userInput != "b" || userInput != "c" || userInput != "a" ){
        alert("Invalid Entry!\nPlease only enter A, B, C or D");
        questionTwo();
    }*/
    questionThree();
}

function questionThree(){

    userInput = prompt("3. What band released the 1969 album Abbey Road?\n(only enter A, B, C or D)\n\nA) The Beatles\nB) The Who \nC) The Beach boys \nD) The Rolling Stones");

    userInput = userInput.toLowerCase();

    if(userInput == quizAnswers[2]){
        correctAnswers.push(userInput);
        amountCorrect = amountCorrect +1;
    }/*else if(userInput != "a" || userInput != "b" || userInput != "c" || userInput != "a" ){
        alert("Invalid Entry!\nPlease only enter A, B, C or D");
        questionThree();
    }*/
    questionFour();
}

function questionFour(){

    userInput = prompt("4. What is the best selling album of all time?\n(only enter A, B, C or D)\n\nA) The White Album\nB) Rumours\nC) Back in Black\nD) Thriller");

    userInput = userInput.toLowerCase();

    if(userInput == quizAnswers[3]){
        correctAnswers.push(userInput);
        amountCorrect = amountCorrect +1;
    }/*else if(userInput != "a" || userInput != "b" || userInput != "c" || userInput != "a" ){
        alert("Invalid Entry!\nPlease only enter A, B, C or D");
        questionFour();
    }*/

    questionFive();
}

function questionFive(){

    userInput = prompt("5. Nirvana's former drummer went on to found what band?\n(only enter A, B, C or D)\n\nA) Arctic Monkeys\nB) Foo Fighters\nC) Audioslave\nD) Incubus;");

    userInput = userInput.toLowerCase();

    if(userInput == quizAnswers[4]){
        correctAnswers.push(userInput);
        amountCorrect = amountCorrect +1;
    }/*else if(userInput != "a" || userInput != "b" || userInput != "c" || userInput != "a" ){
        alert("Invalid Entry!\nPlease only enter A, B, C or D");
        questionFive();
    }*/

    questionSix();
}

function questionSix(){

    userInput = prompt("6. Red Hot Chilli Peppers bass guitarist, Flea, originally began playing what orchestral instrument?\n(only enter A, B, C or D)\n\nA) Tuba\nB) Trumpet\nC) Violin\nD) Oboe");

    userInput = userInput.toLowerCase();

    if(userInput == quizAnswers[5]){
        correctAnswers.push(userInput);
        amountCorrect = amountCorrect +1;
    }/*else if(userInput != "a" || userInput != "b" || userInput != "c" || userInput != "a" ){
        alert("Invalid Entry!\nPlease only enter A, B, C or D");
        questionSix();
    }*/

    questionSeven();
}

function questionSeven(){

    userInput = prompt("7. What Killers song has been in the UK charts for over 260 weeks since its release back in 2004?\n(only enter A, B, C or D)\n\nA) Mr. Brightside\nB) Human\nC) When You Were Young\nD) Caution");

    userInput = userInput.toLowerCase();

    if(userInput == quizAnswers[6]){
        correctAnswers.push(userInput);
        amountCorrect = amountCorrect +1;
    }/*else if(userInput != "a" || userInput != "b" || userInput != "c" || userInput != "a" ){
        alert("Invalid Entry!\nPlease only enter A, B, C or D");
        questionSeven();
    }*/

    questionEight()
}

function questionEight(){

    userInput = prompt("8. What is the name of the world’s largest music streaming service?\n(only enter A, B, C or D)\n\nA) Spotify\nB) Apple Music\nC) Deezer\nD) Youtube Music");

    userInput = userInput.toLowerCase();

    if(userInput == quizAnswers[7]){
        correctAnswers.push(userInput);
        amountCorrect = amountCorrect +1;
    }
    
    /*else if(userInput != "a" || userInput != "b" || userInput != "c" || userInput != "a" ){
        alert("Invalid Entry!\nPlease only enter A, B, C or D");
        questionEight();
    }*/
    
    console.log("The correct answers are: " + quizAnswers);
    //alert("Correct Answers: " + amountCorrect + "/8" );
    document.getElementById("result").innerHTML = "Correct Answers: " + amountCorrect + "/8";
}


