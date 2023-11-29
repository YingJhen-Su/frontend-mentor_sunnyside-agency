const app = () => {
    const menuBtn = document.querySelector('#menu__btn');
    const menuMobile = document.querySelector('#menu__mobile');

    const menuToggle = () => {
        menuMobile.classList.toggle('active');
    }
    
    menuBtn.addEventListener('click', menuToggle);
    menuMobile.addEventListener('click', menuToggle);
}

document.addEventListener('DOMContentLoaded', app);