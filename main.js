
/*  Project one MOHAMMED REDA MEDHI.

...Game Idea -------< DICE GAME >

- Numer Of Players is 2.

**Player 2 >Rulles.
-choose if he wanna guess or not 

-1- Choose To Not Guess
 a- His Score Will Stay As Current Score @ Game Start at Total Points of 0Pts 
 NOT @in this Version Player 2 Is Forced To Guess.

-2-If Choose to Guess Points will based as After.

  --1 Number Match = -50 Pts.
  --2 Number Match =  00 Pts.
  --3 Number Match =  25% Player1 Pts.
  --4 Number Match =  50% Player1 Pts.
  --5 Number Match =  75% Player1 Pts.
  --6 Number Match = 100% Player1 Pts.
  --0 Number Match = -100% Player1 Pnts
  Note@ Points are earned Based on Curent

**Player 1 >Rulles.

 points will be based on the die face.
    1=0 Pts,  2=5 Pts, 3=10 Pts, 4=15 Pts, 5=20 Pts, 6=100 Pts.

 @Next Version Getting  6 of 6 faces will have a jackpot = multiplay his Total points to a Random Number between (5 to 7)


 ** Game ends at anytime a player hit 10000 Pts.
*/

// playGame();

// function playGame() {
//     // global variables
//     // step 1
//     // step 2
//     // step 3
// }

let player1 = 0; let player2 = 0; let player2Gusses;
  player1 = prompt("Player 1:Enter Your Name Please ");
  player2 = prompt("Player 2:Enter Your Name Please ");

  alert("Peerfect :" + player2 + " Goes First");

//     // document.getElementById("guess").innerHTML //= true;
//     // document.getElementById("notGuess").innerHTML  //= false;

function guessedYes() {

     player2Gusses =  prompt(player2 +" Guess 6 numbers you think " +player1 +" will get from");
    player2Gusses = player2Gusses.split("");
    return player2Gusses;
    console.log(player2Gusses);
    console.log(typeof(player2Gusses));  
}

  player2Gusses =  guessedYes();

function chekingGussesAndDiceRolles(){
  let ifMatch; let numberOfSides =6;
    for (let i = 1; i < numberOfSides+1; i++) {

        ifMatch = [];
        ifMatch.push(player2Gusses);
        
        console.log(player2Gusses);
        console.log(typeof(player2Gusses));    
    };

    alert("Alright you choose :" + player2Gusses);
    alert("Le's see what :" + player1 + "will get !!!!");
    alert( player1 + "Go Ahead and roll...! Goood Luck.");
    

    for (let i = 0; i < player2Gusses.length-1; i++) {
        counter =[];


        /// i am here ..... Checking the two rolls
    }
  };
 chekingGussesAndDiceRolles();

//Next Version MokeUp!!!!!
    // function guessedNo() {
    //     event("alrighty ther's no points you'll lose or win ");
    // };
//guessedNo();
// let rollResuls =" ";
// let rollPoints ;
let pointSum 

let numberOfSides = 6; let roll; let rollHoler = [];
function diceRolls() {
    let pointSum = 0; let points = 0;
    for (let i = 1; i < numberOfSides+1; i++) {
          roll = Math.ceil(Math.random()*6);  
          rollHoler.push(roll);
          alert( player1 + "  you Got " + roll );
               switch (roll) {
                        case 1:
                        points = 0;
                        break;

                        case 2:
                        points = 5;
                        break;
                            
                        case 3:
                        points = 10;
                        break;

                        case 4:
                        points = 15;
                        break;
                        
                        case 5:
                        points = 20;
                        break;

                        case 6:
                        points  = 100;
                        break;
                        
                        default:
                        break;
                };    
        pointSum += points; ////////////
        console.log(roll);  
        console.log(typeof(roll));    

        console.log(rollHoler);  
        console.log(typeof(rollHoler));
    }
    console.log(pointSum)
    alert( player1 + " here's your total Point's " + pointSum );
}
diceRolls();

// compare Rolls and  Player2Gusses

function comparingResults() {
 let counter = 0; let pointSum2 = 0; let points2 =0;

 // let x=[1,2,3,4]
 // let y=[5,2,1,6]

    for (let i=0; i<numberOfSides; i++){
        for(let j = 0; j<numberOfSides; j++){
            if (rollHoler[i] == player2Gusses[j]){
                counter++
            };
        }        

  
    
    switch (counter) {
        case 0:
        points2 = -(pointSum);
        break;

        case 1:
        points2 = -50;
        break;

        case 2:
        points2 = 0;
        break;
            
        case 3:
        points2 = pointSum * 25;
        break;

        case 4:
        points2 = pointSum * 5;
        break;
        
        case 5:
        points2 = pointSum * 75;
        break;

        case 6:
        points2  = pointSum;
        break;
        
        default:
        break;
    };
    alert(" Awsome You Got " + counter + " Matches ") ; 
    console.log("counter", counter);  
    console.log("rollholder", rollHoler);


    
    
console.log("ponts sum 2",pointSum2);
alert("  You Got " + pointSum2 + "  PTS") ; 
}
pointSum2 += points2;
}


comparingResults();



let player1Score; let player2Score; 
function theWinner(){
let score = 0 ;
player1Score += pointSum;
player2Score += pointSum2;

alert( player1 + " your Score are " + player1Score + " Points " + "  " + " And "+ player1 +" Scored" +player2Score +"Points") ; 

if (player1Score>999){
    alert( player1 + "  Win")
} 
if (player2Score>999){
    alert( player2 + "  Win")
} 

if ((player1Score || playerScore)>999){

    return  
};


};
theWinner();


// diceRolls();

// // compare Rolls and  Player2Gusses

// function comparingResults() {
//  let numberOfSides = 6;
// let counter = 0; let p2matchs = 0 ; let roll = "111222"; 
// //roll = roll[0];
// let player2Gusses = "111222";

//     for (i=0; i<numberOfSides; i++){

//        if (roll[i] == player2Gusses[i]){
//             counter++;          
//     };

    
// };
// console.log(counter);  
// console.log(typeof(p2matchs));
// };
// comparingResults();