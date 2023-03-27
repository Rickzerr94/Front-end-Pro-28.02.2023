const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item){
    const index = array.indexOf(item);
    if(index > -1){
        array.splice(index, 1);
    }
}
removeElement(array, 5);
console.log(array);

////

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters){
    let result = '';
    const  charactersLength = characters.length;
    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);

////

function removeChars(inputString = "hello world", charsToRemove = ['l', 'd']){
    let outputString = '';
    for(let i = 0; i < inputString.length; i++){
        let char = inputString[i];
        if(!charsToRemove.includes(char)){
            outputString += char;
        }
    }
    return outputString;
}
console.log(removeChars());

////

function counterCreator(){
    let value = 0;
    function sumOfCounter(num){
        return (value += num);
    }
    return sumOfCounter;
}

const counter = counterCreator()
console.log(counter(3));
console.log(counter(5));
console.log(counter(20));



































// function checkAge(age) {
//     return age > 18 ? true : confirm('Батьки дозволили?');
    // if (age > 18) {
    //     return true;
    // } else {
    //     return confirm('Батьки дозволили?');
    // }
// }

// function min(a, b){
//     return a < b ? a : b;
// }
// console.log(min(3, -1));

// function pow(x, n){
//     let result = x;
//     for(let i = 1; i < n; i++){
//         result *= x;
//     }
//     return result;
// }
// let x = prompt('x?');
// let n = prompt('n?');
//
// if(n < 1){
//     alert(`number ${n} is incorrect, use prime number`);
// }else{
//     alert(pow(x, n));
// }

// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask('Are you agree?', () => alert('You agree'), () => alert('You canceled'));


