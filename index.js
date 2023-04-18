const strs = ["programming", "product", "procrastination"];

function findPrefix(strs) {
    if (!strs || strs.length === 0) {
        return '';
    }

    const firstStr = strs[0];
    let prefix = '';

    for (let i = 0; i < firstStr.length; i++){
        const char = firstStr[i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix
            }
        }

        prefix += char;
    }

    return prefix;
}

const prefix = findPrefix(strs);
console.log(prefix);

////

function twoDimToThreeDim(arr) {
    let result = [];
    let tempArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (tempArr.length < 3) {
                tempArr.push(arr[i][j]);
            } else {
                result.push(tempArr);
                tempArr = [arr[i][j]];
            }
        }
    }

    if (tempArr.length > 0) {
        result.push(tempArr);
    }

    return result;
}

let arr1 = [[1,2], [3,4], [5,6]];
let result1 = twoDimToThreeDim(arr1);
console.log(result1);

let arr2 = [[1,2], [3,4], [5,6], [7]];
let result2 = twoDimToThreeDim(arr2);
console.log(result2);



function threeDimToTwoDim(arr) {
    return arr[0].map((_, index) => {
        return arr.reduce((tempArr, subArr) => {
            tempArr.push(subArr[index]);
            return tempArr;
        }, []);
    });
}

let arr3 = [[1,2,3], [4,5,6]];
let result3 = threeDimToTwoDim(arr3);
console.log(result3);

