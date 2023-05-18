
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
        const productName = button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        alert(`${productName} придбано`);
    });
});
