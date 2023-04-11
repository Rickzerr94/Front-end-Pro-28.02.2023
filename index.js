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

function solutionWorld(sentence){
    sentence = sentence.replace(/,/g, '').replace(/!/g, '').replace(/\.{3}/g, '');

    let words = sentence.split(' ');
    let averageLength = words.reduce((acc, cur) => acc + cur.length, 0) / words.length;
    let result = words.filter(word => word.length > averageLength);
    return result;
}

console.log(solutionWorld("This is a sample string"));
console.log(solutionWorld("Some another sample"));
console.log(solutionWorld("Do, do, do, do... do it!"));

////

const database = {
    adminPassword: 'password',
    users: []
};

const user = {
    email: '',
    getAdminEmail: function () {
        return 'admin@example.com'
    }
};

const verifiedUser = Object.create(user);
verifiedUser.isVerified = true;

const guest = Object.create(user);
guest.register = function () {
    database.users.push(this);
};

const databaseObject = Object.create(guest);
databaseObject.adminPassword = database.adminPassword;
databaseObject.getAdminEmail = user.getAdminEmail;
databaseObject.getUsers = function () {
    return database.users;
};

const user1 = Object.create(user);
user1.email = "user1@example.com";

const verifiedUser1 = Object.create(verifiedUser);
verifiedUser1.email = "verifieduser1@example.com";

const guest1 = Object.create(guest);
guest1.email = "guest1@example.com";

guest1.register();

const databaseUsers = databaseObject.getUsers();





























































// let head = {
//     glasses: 1
// };
//
// let table = {
//     pen: 3,
//     __proto__: head
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
//
// let pockets = {
//     money: 2000,
//     __proto__: bed
// };
//
// console.log(pockets.pen);
// console.log(pockets.glasses);
// console.log(head.glasses);


