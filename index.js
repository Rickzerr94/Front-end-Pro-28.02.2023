function solution(str){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i <alphabet.length; i++){
        if(str.indexOf(alphabet[i]) === -1){
            return false;
        }
    }
    return true;
}

console.log(solution("wyyga"));
console.log(solution("qwertyuioplkjhgfdsazxcvbnm"));
console.log(solution("ejuxggfsts"));
console.log(solution("qpwoeirutyalskdjfhgmznxbcv"));
console.log(solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv"));
console.log(solution("0123456789abcdefghijklmnop"));

////

