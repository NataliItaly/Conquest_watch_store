/*---------burger-menu--------------*/

const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header-menu');
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active')
});





