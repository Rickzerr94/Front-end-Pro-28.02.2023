const emojis = document.querySelectorAll('.option');

function handleClick(event) {
    const emoji = event.currentTarget;
    const count = emoji.querySelector('.count');
    count.textContent = parseInt(count.textContent) + 1;
}

emojis.forEach((emoji) => {
    emoji.addEventListener('click', handleClick);
});