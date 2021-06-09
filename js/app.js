'use strict';
let userName = prompt('Whats Your Name?');
alert('Welcome ' + userName);
let score = 0;

function userQuestion1(question, correctAns, unCorrectAns) {
    let userInput;
    do {
        userInput = prompt(question).toLowerCase();
    } while (userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n');

    if (userInput === 'yes' || userInput === 'y') {

        alert('correct answer');
        score++;
    } else {

        alert('wrong answer');
    }

}




function Question6() {


    let s = 10
    for (let i = 1; i <= 4; i++) {
        let num = parseInt(prompt('can you guess what is my Number'))
        if (num === s) {
            alert('your answer is correct Great');
            score++;

            break;
        }
        else if (num > s) {
            alert('too high')
        }

        else if (num < s) {
            alert('too low')
        }
    }
    alert('correct number is 10')
}

function Question7()
 {
    let numPlayers = [15, 11, 20, 12];
    

    
    for (let i = 1; i <= 6; i++) {

       let qe7 = prompt('How many Players in the Rugby Team ?');
       
        for (let m = 0; m < numPlayers.length; m++) {
            if (qe7 === numPlayers[m]) {
                score++;
                break;
            }

        }

    }
}

userQuestion1('Do you Think I Like footBall?');
userQuestion1('Do you Think My favourite Color is Red?');
userQuestion1('Do you THink I like dancing');
userQuestion1('Do you Think I like Drink coffie?');
userQuestion1('Do you Think I like Video Games?');
Question6();
Question7();

alert('you\'r score is ' + score)

alert('Welcome ' + userName + "Thank you Goregis of your Time");
