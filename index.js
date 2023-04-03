const arr = [1,2,3,4,5,1,2,3,4,5]

const yourFunc = (arr) => {
    return Array.from(new Set(arr));
};

yourFunc(arr);

////

function mostFrequent(arr) {
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (elem in count) {
            count[elem]++;
        } else {
            count[elem] = 1;
        }
    }

    let maxCount = 0;
    let mostCommon;
    for (let elem in count) {
        if (count[elem] > maxCount) {
            maxCount = count[elem];
            mostCommon = elem;
        }
    }

    return mostCommon;
}

console.log(mostFrequent(arr))

////

//Буде undefined, бо останній рядок викличе функцію z з аргументом x яка є сама функція без параметрів яка ж повертає
//значення змінної y
//через те що в подальшому викликаєтся аргумент t, котрий сам є функцією без параметрів, то на цбому ланцюжок завершиться і нічого
//не виведеться, а це значить що буде undefined

////

function debounce(f, ms) {
    let isCooldown = false;

    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };
}

let f = debounce(alert, 1000)

f(1);
f(2);

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);
























// function unique(arr) {
//     return Array.from(new Set(arr));
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) );

// function Accumulator(startingValue) {
//     this.value = startingValue;
//
//     this.read = function () {
//         this.value += parseInt(prompt('how to count?'));
//     }
// }
//
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
//
// alert(accumulator.value);

// function printNumbers(from, to){
//     let current = from;
//
//     let timerId = setInterval(function () {
//         alert(current);
//         if(current === to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }
//
// printNumbers(5, 12);

// function printNumbers(from, to) {
//     let current = from;
//
//     setTimeout(function go() {
//         alert(current);
//         if(current < to) {
//             setTimeout(go, 1000)
//         }
//         current++
//     }, 1000)
// }
//
// printNumbers(5, 11);