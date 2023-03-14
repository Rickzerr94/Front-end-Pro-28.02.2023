
const firstNumber = parseInt(prompt('enter first number')) || 0;

const secondNumber = parseInt(prompt('enter second number')) || 22;

let thirdNumber;
    if(firstNumber && secondNumber){
        thirdNumber = 80;
    } else{
        thirdNumber = 40;
    };

const emptyObject = {}
    if (firstNumber >= 90){
        emptyObject.size = 'big';
    } else if(firstNumber <= 40){
        emptyObject.size = 'small';
    }else{
        emptyObject.size = 'medium';
    };

let fourNumber;
    switch (emptyObject.size){
        case 'big':
            fourNumber = 1000;
            break;
        case 'medium':
            fourNumber = 100;
            break;
        case 'small':
            fourNumber = 10;
            break;
    };

const result = firstNumber*secondNumber*thirdNumber*fourNumber;
    if (result % 2 !== 0){
        console.log('Your never seen this');
    } else{
        if(secondNumber > 50){
            alert(secondNumber);
        } else{
            alert('Not match to conditions');
        };
    };

































// const nameJs = prompt('What official name JavaScript?');
//
// if (nameJs === 'ECMAScript') {
//     alert('Your dammit rigth!');
// } else {
//     alert('Are you fucking dont know ECMAScript??');
// };

// const num = +prompt('enter hte number');
//
// if ( num > 0){
//     alert('1');
// } else if(num < 0){
//     alert('-1');
// } else if(num === 0){
//     alert('0');
// };

// let result = a + b < 4 ? 'lower' : 'upper';

// let message = (login == 'worker') ? 'hi' :
//     (login == 'director') ? 'Hello' :
//     (login == '') ? 'no login' :
//     '';


// if(age >= 14 && age <= 90){
//
// }

// if(!(age >= 14 && age <= 90)){
//
// };

// const userName = prompt('Who is there?');
//
// if(userName === 'Admin'){
//
//     let pass = prompt('Hello, Admin! Please, enter your password!');
//
//     if(pass === "TheMaster"){
//         alert('Welcome, my dungeon Master!');
//     } else if(pass === '' || pass === null){
//         alert('Canceled');
//     } else{
//         alert('Wrong password, motherfucker!!!');
//     }
//
// } else if(userName === '' || userName === null){
//     alert('Canceled');
// } else{
//     alert('I dont know you!');
// };

// if(browser === 'Edge'){
//     alert( "you've got hge Edge!");
// } else if(browser === 'Chrome'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === 'Opera'){
//     alert("we're support this browsers too");
// } else{
//     alert("We hope, this page looking good")
// };

// const a = +prompt('a?')
//
// switch (a){
//     case 0:
//         alert(0);
//         break;
//
//     case 1:
//         alert(1);
//         break;
//
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }  ;