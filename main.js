const myInput = document.getElementById('myInput');
const ghostDiv = document.createElement('div');
ghostDiv.innerText = 'Ghost div';

myInput.addEventListener('focus', () => {
    document.body.appendChild(ghostDiv);
});

myInput.addEventListener('blur', () => {
    document.body.removeChild(ghostDiv);
});