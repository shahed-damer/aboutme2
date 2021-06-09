'use strict';
let userName = prompt('Whats Your Name?');
alert('Welcome '+userName);
let score = 0;

function userQuestion1(question,correctAns, unCorrectAns){
    let userName;
    do{
        userNamet = prompet (question);
    } while (userName !== 'yes' && userName ! 'y' && userName !== 'no' && userName !== 'n');

    if(userName === 'yes' || userName === 'y') {
        console.log(correctAns);
        score++;
    } else {
        console.log(unCorrectAns);
    }

}
   userQuestion1('Do you Think I Like footBall?', 'yes' , 'no');
   userQuestion1('Do you Think My favourite Color is Red?', 'yes' , 'no'); 
   userQuestion1('Do you THink I like dancing', 'yes' , 'no');
   userQuestion1('Do you Think I like Drink coffie?', 'yes' , 'no');
   userQuestion1('Do you Think I like Video Games?', 'yes' , 'no');  

     alert('Welcome '+ userName + "Thank you Goregis of your Time");

    

    

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

