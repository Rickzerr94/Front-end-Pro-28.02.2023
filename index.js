let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
for(let i = 0; i < arr.length; i++){
    // if(arr[i] > 0)
    sum += arr[i];
}
console.log(sum);
let positiveNumber = arr.filter(function (number){
    return number > 0
});
console.log (positiveNumber);
console.log(positiveNumber.length);

////

let minValue = arr [0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] <= minValue){
        minValue = arr[i]
    };
};
console.log(minValue);

////

let maxValue = arr [0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] >= maxValue){
        maxValue = arr[i]
    };
};
console.log(maxValue);

////

let negativeNumber = arr.filter(function (number){
    return number < 0
});
console.log(negativeNumber.length);

////

let notEvenNumber = arr.filter(function (number){
    return number > 0 && number % 2 !== 0
});
// console.log(notEvenNumber);
console.log(notEvenNumber.length);

////

let evenNumber = arr.filter(function (number){
    return number > 0 && number % 2 === 0
});
// console.log(evenNumber);
console.log(evenNumber.length);

////

let evenNumberSum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] % 2 === 0)
    evenNumberSum += arr[i];
};
console.log(evenNumberSum);

////

let notEvenNumberSum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] % 2 !== 0)
        notEvenNumberSum += arr[i];
};
console.log(notEvenNumberSum);

////

let productNumber = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0)
        productNumber *= arr[i];
};
console.log(productNumber);

































// let fruits = ['apples','pear','banana'];
// let shoppingCart = fruits;
// shoppingCart.push('oranges');
// console.log(fruits);
//
// let styles = ['jazz','blues'];
// alert(styles);
// let addStyle = styles;
// addStyle.push('rock-n-roll');
// alert(addStyle);
// let addStyleClassic = styles;
// addStyleClassic[Math.floor((styles.length - 1) / 2)] = 'classic';
// alert(addStyleClassic);
// let shiftStyle = styles;
// shiftStyle.shift();
// alert(shiftStyle);
// let unShiftStyle = styles;
// unShiftStyle.unshift('rap', 'reggae');
// alert(unShiftStyle);

// let arr = ['a', 'b'];
// arr.push(function () {
//     alert(this);
// });
//
// arr[2]();

// function sumInput(){
//     let numbers = [];
//     while(true){
//         let value = prompt('Enter the number');
//         if(value === '' || value === null || !isFinite(value)) break;
//         numbers.push(parseInt(value));
//     };
//     let sum = 0;
//     for(let number of numbers){
//         sum += number;
//     };
//     return sum;
// };
// alert( sumInput());


// let arr = [1,2];
//
// let arrLike = {
//     0: 'something',
//     length:1
// };
// alert(arr.concat(arrLike));

// let arr = [1,2];
//
// let arrLike = {
//     0: 'something',
//     1: 'else',
//     [Symbol.isConcatSpreadable]: true,
//     length:2
// };
// alert(arr.concat(arrLike));

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
// ];
//
// let user = users.find(item => item.id === 3);
//
// alert(user.name);

// let lengths = ["Bilbo", "Nazgul", "Gandalf"].map(item => item.length);
// alert(lengths);

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
//
// let arr = [ 3, 1, 15 ];
//
// arr.sort(compareNumeric);
//
// alert(arr);

// let countries = ['Österreich', 'Andorra', 'Vietnam'];
//
// // alert( countries.sort( (a, b) => a > b ? 1 : -1) );
//
// alert( countries.sort( (a, b) => b.localeCompare(a) ) );

// let names = 'Вася, Петя, Маша';
//
// let arr = names.split(', ');
//
// for (let name of arr) {
//     alert( `A message to ${name}.` );
// }

// let arr = 'Вася, Петя, Маша, Іван'.split(', ', 3);
//
// alert(arr);

// function camelize(str){
//     return str
//         .split('-')
//         .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//         .join('');
//
// }

// function filterRange (arr, a, b){
//     return arr.filter(item => (a <= item && item <= b));
// }
// let arr = [5,3,8,1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered);
// alert(arr);

// let arr = [5,1,2,-10,8];
// arr.sort((a, b) => b - a);
// alert(arr);

// function copySorted(arr){
//     return arr.slice().sort();
// }
// let arr = ['HTML', 'JavaScript', 'CSS'];
// let sorted = copySorted(arr);
// alert(sorted);
// alert(arr);
