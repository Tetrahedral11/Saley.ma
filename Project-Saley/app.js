const hamburger = document.querySelector('.header .nav-bar .nav-items .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-items ul');
const header =document.querySelector('.header.container');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});