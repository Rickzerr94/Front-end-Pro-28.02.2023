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