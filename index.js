let userName = prompt('Whats your name?');
let userSurname = prompt('Whats your surname?');
let userAge = parseInt(prompt('How old are you?'));
let userCity = prompt('Where are you from (city)?');

const user = {
    userName,
    userSurname,
    userAge,
    userCity,
}

let permission = confirm('Are you giving the permission to process your data?');

const consoleMessage = `Username: ${userName}, Surname: ${userSurname}, Age: ${userAge}, City: ${userCity}`;

permission ? console.log(consoleMessage) : alert('The user has forbidden to announce his data');