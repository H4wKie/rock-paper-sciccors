let playerOne = document.getElementsByClassName('playerOne');
let playerOneChosen = playerOne[0].getElementsByClassName('chosenItem');
let playerOnePick = playerOne[0].getElementsByClassName('pickableItem');
let playerTwo = document.getElementsByClassName('playerTwo');
let playerTwoChosen = playerTwo[0].getElementsByClassName('chosenItem');
let scoreDoc = document.getElementsByClassName('score');
let scoreJs = [0, 0];
let numberTwo;

function addEventListener() {
    for(let index = 0; index<playerOnePick.length; index++) {
        playerOnePick[index].addEventListener('click', function eventFunction() {
            let numberTwo = Math.floor(Math.random()*3);
            userEvent(playerOneChosen, index, 50);
            userEvent(playerTwoChosen, numberTwo, 100);
            setTimeout(()=> {
                console.log(checkWinner(index, numberTwo));
            },250);
            checkPointLimit(500);
})}}

function userEvent(player, decider, delay) {
        //empty the box
        for(let i = 0; i<player.length; i++) {
            player[i].classList.remove('visible');
        }

        setTimeout(() => {
            for(let i = 0; i<player.length; i++) {
                player[i].classList.remove('visible');
            }
            //show the item that was picked
            if(decider === 0) {
                let number = Math.floor(Math.random()*10);
                if(number >= 8) {
                    player[3].classList += ' visible';
                }else {
                    player[decider].classList += ' visible';
                }
            }else {
                player[decider].classList += ' visible';
            }
        }, delay);
    }

function checkWinner(x, y) {
    if(y == x) {
        return 'draw';
    }else if(x == 0) {
        if(y === 1) {
            scoreJs[1] = scoreJs[1] +=1;
            scoreDoc[1].innerHTML = scoreJs[1];
            return 'player two wins';
        }else if(y === 2) {
            scoreJs[0] = scoreJs[0] +=1;
            scoreDoc[0].innerHTML = scoreJs[0];
            return 'player one wins';
        }
    }else if(x === 1){
        if(y === 0) {
            scoreJs[0] = scoreJs[0] +=1;
            scoreDoc[0].innerHTML = scoreJs[0];
            return 'player one wins';
        }else if(y === 2) {
            scoreJs[1] = scoreJs[1] +=1;
            scoreDoc[1].innerHTML = scoreJs[1];
            return 'player two wins';
        }
    }else if(x === 2){
        if(y === 0) {
            scoreJs[1] = scoreJs[1] +=1;
            scoreDoc[1].innerHTML = scoreJs[1];
            return 'player two wins';
        }else if(y === 1) {
            scoreJs[0] = scoreJs[0] +=1;
            scoreDoc[0].innerHTML = scoreJs[0];
            return 'player one wins';
        }
    }
}

function checkPointLimit(timeout) {
    let winScreen = document.getElementById('winner');
    let gameBox = document.getElementById('gameFlex');
    let playerWon = document.getElementsByClassName('playerWon');
    let playerMessage = document.getElementsByClassName('message');
    let numMessage = Math.floor(Math.random()*5);
    const winMessages = [
        "You came, you saw, you conquered!",
        "You triumphed today, a testament to your hard work.",
        "A well-deserved win; your efforts paid off.",
        "You rose to the challenge and claimed victory!",
        "Success! Your persistence led you to victory."
      ];
    const lossMessages = [
    "Defeat stings, but resilience will carry you forward.",
    "You gave your all; today just wasn't your day.",
    "A tough loss, but the lessons will make you stronger.",
    "You fell short, but your spirit remains unbroken.",
    "You fought hard, but victory slipped away this time."
    ];
      
    setTimeout(() => {
        if(scoreJs[0] >= 5) {
            playerWon[0].innerHTML = 'player one won';
            playerMessage[0].innerHTML = winMessages[numMessage];
            gameBox.style.display = 'none';
            winScreen.style.display = 'block';
            console.log('player one won!!');
        }else if(scoreJs[1] >= 5) {
            playerWon[0].innerHTML = 'player two won';
            playerMessage[0].innerHTML = lossMessages[numMessage];
            gameBox.style.display = 'none';
            winScreen.style.display = 'block';
            console.log('player two won!!');
        }
    }, timeout)
}

function reset() {
    let winScreen = document.getElementById('winner');
    let gameBox = document.getElementById('gameFlex');

    scoreJs = [0, 0];
    scoreDoc[0].innerHTML = scoreJs[1];
    scoreDoc[1].innerHTML = scoreJs[1];

    for(let i = 0; i<playerOneChosen.length; i++) {
        playerOneChosen[i].classList.remove('visible');
    }

    for(let i = 0; i<playerOneChosen.length; i++) {
        playerTwoChosen[i].classList.remove('visible');
    }

    winScreen.style.display = 'none';
    gameBox.style.display = 'flex';
}


addEventListener ();









// function addEventListener() {
//     for(let index = 0; index<playerOnePick.length; index++) {
//         playerOnePick[index].addEventListener('click', function eventFunction() {
//             // console.log(`congratulations, you picked ${outcomes[index]}`);
            
//             //empty the box
//             for(let i = 0; i<playerOneChosen.length; i++) {
//                 playerOneChosen[i].classList.remove('visable');
//             }

//             //show the item that was picked
//             if(index === 0) {
//                 let number = Math.floor(Math.random()*10);
//                 if(number >= 8) {
//                     playerOneChosen[3].classList += ' visable';
//                 }else {
//                     playerOneChosen[index].classList += ' visable';
//                 }
//             }else {
//                 playerOneChosen[index].classList += ' visable';
//             }

//             //empty box 2
//             for(let i = 0; i<playerTwoChosen.length; i++) {
//                 playerTwoChosen[i].classList.remove('visable');
//             }

//             let numberTwo = Math.floor(Math.random()*3);
//             //chose a random item for player two
//             setTimeout(() => {
//                 //remove button functionality


//                 //show the item that was picked
//                 if(numberTwo === 0) {
//                     let number = Math.floor(Math.random()*3);
//                     if(number = 1) {
//                         playerTwoChosen[3].classList += ' visable';
//                     }else {
//                         playerTwoChosen[numberTwo].classList += ' visable';
//                     }
//                 }else {
//                     playerTwoChosen[numberTwo].classList += ' visable';
//                 }

//                 console.log(checkWinner(index, numberTwo));
//             },1000);
//         });
//     }
// }