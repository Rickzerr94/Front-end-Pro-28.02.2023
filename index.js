function  solution(arr) {
    const freq = {};

    for (let num of arr) {
        freq [num] = (freq[num] || 0) +1;
    }

    const result = [];

    for (let key in freq) {
        if (freq[key] % 2 !== 0) {
            result.push(parseInt(key));
        }
    }
    return result;
}

console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));
console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100]));
console.log(solution([3, 3, 4, 6, 5, 4, 9, 9, 21, 9]));
console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));
console.log(solution([2, 2, 44, 44]));

////

function ezjQuery(tag) {
    let htmlString = [{tag, content: ''}];

    function add(tagName, text = '') {
        htmlString.push({tag: tagName, content: text});
        return this;
    }

    function render() {
        let result = '';
        htmlString.reverse().forEach(({tag, content}) => {
            result = `<${tag}>${content}${result}</${tag}>`;
        });
        htmlString = [{tag, content: ''}];
        return result;
    }

    return { add, render };
}



let helloList = ezjQuery('body')
    .add('div')
    .add('ul')
    .add('li', 'Hello')
    .render();

console.log(helloList);

let bodyDiv = ezjQuery('body')
    .add('div')
    .render();

console.log(bodyDiv)


// class Counter {
//     #count
//     constructor(counter) {
//         this.countElement = counter.querySelector('span')
//         this.buttonElement = counter.querySelector('button')
//
//         this.#count = parseInt(this.countElement.textContent)
//
//         this.buttonElement.addEventListener('click', this.increaseCount)
//     }
//
//     increaseCount = () => {
//         this.#count = this.#count + 1
//         this.updateCount()
//     }
//
//     updateCount () {
//         this.countElement.textContent = this.#count
//     }
// }
//
// const counter = new Counter(document.querySelector('.counter'));

// function Counter (counterElement) {
//     const countElement = counterElement.querySelector('span')
//     const buttonElement = counterElement.querySelector('button')
//
//     let count = parseInt(countElement.textContent)
//
//     const counter = {
//         increaseCount () {
//             count = count + 1
//             counter.updateCount()
//         },
//
//         updateCount() {
//             countElement.textContent = count
//         }
//     }
//
//     buttonElement.addEventListener('click', counter.increaseCount)
// }
//
// const counter = Counter(document.querySelector('.counter'))