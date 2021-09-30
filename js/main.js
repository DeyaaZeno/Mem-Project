
let navColor = () =>{
    const navbar = document.querySelector('.page-header .navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
}

window.addEventListener('scroll', navColor);

let goUp = () => {
    const upBtn = document.querySelector('.page-header .up-btn');
    upBtn.classList.toggle('active', window.scrollY > 50);
}

window.addEventListener('scroll', goUp)


const menuToggle = document.querySelector('.navbar .btn.menu');
const navigation = document.querySelector('.navbar .navigation');
let toggleMenu = () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu)