let num1 = '';
for(let i = 10; i <= 20; i++){
    num1 += i + ',';
};
console.log(num1);

/////////

let num2 = '';
for(let y = 10; y <= 20; y++){
    num2 += Math.pow(y, 2) + ','
};
console.log(num2);

/////////

let num3 = 1
for(let x = 15; x <= 35; x++){
    num3 *= x;
};
console.log(num3);

/////////

let sum = 0;
let count = 0
for(let i = 1; i <= 500; i++) {
    sum += i
    count += 1
};
console.log(sum/count);

/////////

for(let z = 30; z <= 80; z++){
    if(z % 2 !== 0) continue;
    console.log(z);
};

/////////

for(let i = 100; i <= 300; i++) {
    if(i % 3 === 0)
        console.log(i);
}

/////////

// const num4 = parseInt(prompt('Enter number!'));
//
// let item = 0;
// for(let i = 2; i <= num4; i++) {
//     if(num4 % i === 0){
//         item += 1;
//     };
// };
// console.log(item === 1) ? 'try number' : 'not a try number');

const number = parseInt(prompt('Enter a positive number'));
let isPrime = true;
if(number === 1){
    alert('Please, enter number biggest, than 1')
} else if(number > 1){
    for(let i =2; i < number; i++){
        if(number % i === 0){
            isPrime = false;
            break;
        }
    }
    isPrime ? alert(`${number} is a prime number`) : alert(`${number} is a not prime number`);
};