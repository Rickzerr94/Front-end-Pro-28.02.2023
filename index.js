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

const num4 = parseInt(prompt('Enter number!'));

if(num4 % 1 === 0 && num4 % num4 === 0){
    alert('try num');
} else(alert('not try num'));