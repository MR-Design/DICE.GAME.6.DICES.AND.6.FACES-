
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

let player1 = 0; let player2 = 0; 
  player1 = prompt("Player 1:Enter Your Name Please ");
  player2 = prompt("Player 2:Enter Your Name Please ");

  alert("Peerfect :" + player2 + " Goes First");

//     // document.getElementById("guess").innerHTML //= true;
//     // document.getElementById("notGuess").innerHTML  //= false;

function guessedYes() {

    let player2Gusses =  prompt(player2 +" Guess 6 numbers you think " +player1 +" will get from");
    player2Gusses = player2Gusses.split("");
    return player2Gusses;
    console.log(player2Gusses);
    console.log(typeof(player2Gusses));  
}

 let player2Gusses =  guessedYes();

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


function diceRolls() {
        let roll; let numberOfSides =6; let rollHoler =[]; let pointSum = 0; let points = 0;
    for (let i = 1; i < numberOfSides+1; i++) {
          roll = Math.ceil(Math.random()*6);  
          rollHoler.push(roll);
          alert( player1 + " you Got " + roll );
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
        pointSum += points
        console.log(roll);  
        console.log(typeof(roll));    

        console.log(rollHoler);  
        console.log(typeof(rollHoler));
    }
    console.log(pointSum)
    alert( player1 + " here's your total Point's " + pointSum );
}
diceRolls();


function comparingResults() {
    
}
//comparingResults();