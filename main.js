
const categories = document.querySelectorAll('.category');
const subcategories = document.querySelectorAll('.subcategory');
const categorylist = document.querySelectorAll('.stufflist');


categories.forEach((category, index) => {
    category.addEventListener('click', () => {
        subcategories.forEach((subcategory) => {
            subcategory.classList.add('hidden');
        });
        subcategories[index].classList.remove('hidden');
    });
});

subcategories.forEach((subcategory, index) => {
    subcategory.addEventListener('click', () => {
        categorylist.forEach((stufflist) => {
            stufflist.classList.add('hidden');
        });
        categorylist[index].classList.remove('hidden');
    });
});