const arr = [[[[[[8]]]]]];

//this variant which il googled

// function factorialArray(arr){
//     if(typeof arr === 'number'){
//         if(arr <= 1){
//             return 1
//         }else{
//             return arr * factorialArray(arr - 1);
//         }
//     }else{
//         return factorialArray(arr[0]);
//     }
// }

//this variant from lection

const factorialArray = function (arr){
    if(arr === 1) return arr
    return arr * factorialArray(arr - 1)
}

console.log(factorialArray(arr[0]));

///////////////

let calculator = {
    a: 0,
    b: 0,
    read(){
        this.a = parseInt(prompt('enter first number'));
        this.b = parseInt(prompt('enter second number'));
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

