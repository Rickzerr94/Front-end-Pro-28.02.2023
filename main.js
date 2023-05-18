
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

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // const productName = button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        // alert(`${productName} придбано`);
        openModal();
    });
});

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
    document.getElementById('modal').style.display = 'none';
    document.getElementById('orderConfirmedModal').style.display = 'block';
    // setTimeout(function () {
    //     closeOrderConfirmedModal();
    // }, 2000);
}

function closeOrderConfirmedModal() {
    document.getElementById('orderConfirmedModal').style.display = 'none';
    document.getElementById('modalBackground').style.display = 'none';
}


