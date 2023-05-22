
const categories = document.querySelectorAll('.category');
const subcategories = document.querySelectorAll('.subcategory');
const categorylist = document.querySelectorAll('.stufflist');
const  buyButtons = document.querySelectorAll('.buy-button');


categories.forEach((category, index) => {
    category.addEventListener('click', () => {
        subcategories.forEach((subcategory) => {
            subcategory.classList.add('hidden');
        });
        subcategories[index].classList.remove('hidden');
    });
});

subcategories.forEach((subcategory, index) => {
    subcategory.addEventListener('click', (e) => {
        const currentIndex = e.target.id.split('_')[1];

        categorylist.forEach((stufflist, i) => {
            stufflist.classList.add('hidden');
        });
        categorylist[currentIndex].classList.remove('hidden');
    });
});

// ======new code========

// const buyButtons = document.querySelectorAll('.buy-button');
const modal2 = document.getElementById('modal2');
const cartItems = document.getElementById('cart-items');
const closeButton = document.querySelector('.close');

let cart = [];

function addToCart(item) {
    cart.push(item);
}

function updateCart() {
    cartItems.innerHTML = '';

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Ціна: ${item.price} грн - ${item.date} ${item.time}`;
        cartItems.appendChild(li);
    });
}

function handleBuyButtonClick(event) {
    const item = {
        name: event.target.parentElement.querySelector('h4').textContent,
        price: event.target.parentElement.querySelector('p:last-child').textContent.split(': ')[1],
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    };

    addToCart(item);
}

function handleCartButtonClick() {
    updateCart();
    modal2.style.display = 'block';
}

function handleCloseButtonClick() {
    modal2.style.display = 'none';
}

buyButtons.forEach((button) => {
    button.addEventListener('click', handleBuyButtonClick);
});

closeButton.addEventListener('click', handleCloseButtonClick);


window.addEventListener('click', (event) => {
    if (event.target === modal2) {
        handleCloseButtonClick();
    }
});

// ======new code end========

//======those piece of code for first modal

// buyButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         // const productName = button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
//         // alert(`${productName} придбано`);
//         openModal();
//     });
// });

function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalBackground').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalBackground').style.display = 'none';
}

function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const postOffice = document.getElementById('postOffice').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;

    if (!name || !city || !postOffice || !paymentMethod || !quantity) {
        alert('Будь ласка, заповніть всі обов\'язкові поля');
        return;
    }

    openOrderConfirmedModal()
}

function openOrderConfirmedModal() {
    document.getElementById('modal2').style.display = 'none';
    document.getElementById('orderConfirmedModal').style.display = 'block';
    // setTimeout(function () {
    //     closeOrderConfirmedModal();
    // }, 2000);
}

function closeOrderConfirmedModal() {
    document.getElementById('orderConfirmedModal').style.display = 'none';
    document.getElementById('modalBackground').style.display = 'none';
}


