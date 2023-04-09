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

// function ezjQuery(tag) {
//     let htmlString = `<${tag}></${tag}>`;
//
//     function add(tag, text = '') {
//         htmlString = htmlString.replace(`</${tag}>`, `<${tag}>${text}</${tag}>`);
//         return this;
//     }
//
//     function render() {
//         return htmlString;
//     }
//
//     return { add, render };
// }

function ezjQuery(selector) {
    let elements = [document.querySelector(selector)];
    const createElement = (tag, content) => {
        const element = document.createElement(tag);
        element.innerHTML = content || '';
        return element;
    };
    return {
        add(tag, content) {
            const newElements = [];
            elements.forEach((element) => {
                const newElement = createElement(tag, content);
                element.appendChild(newElement);
                newElements.push(newElement);
            });
            elements = newElements;
            return this;
        },
        render() {
            const html = elements[0].outerHTML;
            elements = [elements[0].cloneNode(true)];
            return html;
        },
    };
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