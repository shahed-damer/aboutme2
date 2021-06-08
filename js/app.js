'use strict';
let userName = prompt('Whats Your Name?');
alert('Welcome '+userName);
let score = 0;

function Question1(){


let videoGame = prompt('Do you Think I like Video Games?').toLowerCase();
if (videoGame =='yes' || videoGame == 'y') {
alert('thats Answer is yes '+userName);
score++;
} else {
    alert('your Answer is no');
}

}



function Question2(){


    let likeFoot =prompt('Do you Think I like FootBall?').toLowerCase();
    if (likeFoot == 'yes' || likeFoot == 'y') {
    alert('thats Answer is yes '+userName);
    score++;
    } else {
        alert('your Answer is no');
    }
    
    }


    

function Question3(){


    let favColor = prompt('Do you Think My Favourite color is Red?').toLowerCase();
    if (favColor == 'yes' || favColor == 'y') {
    alert('thats Answer is yes '+userName);
    score++;
    } else {
        alert('your Answer is no');
    }
    
    }

    

function Question4(){


    let likeDan = prompt('Do you Think I like Dancing?').toLowerCase();
    if (likeDan == 'yes' || likeDan == 'y') {
    alert('thats Answer is yes '+userName);
    score++;
    } else {
        alert('your Answer is no');
    }
    
    }

    

function Question5(){


    let likeDri = prompt('Do you Think I like FootBall?').toLowerCase();
    if (likeDri == 'yes' || likeDri == 'y') {
    alert('thats Answer is yes '+userName);
    score++;
    } else {
        alert('your Answer is no');
    }
     alert('Welcome '+ userName + "Thank you Goregis of your Time");

    }

    

function Question6(){


    let s = 10
    for (let i = 1; i < 4; i++) {
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

 function Question7(){
     let qe7 = prompt('How many Players in the Rugby Team ?');
     let numPlayers = [15,11,20,12];

     for (let m = 0; m <numPlayers.length; m++) {
         if (qe7 == numPlayers[m]) {
             score++;
             break;
         } else {
            for (let i = 1; i <= 6; i++) {
                ask7 = prompt('How many Players in the Rugby Team ?');

                break;
            }
        }
    }
}

Question1();
Question2();
Question3();
Question4();
Question5();
Question6();
Question7();

alert('you\'r score is ' + score)

