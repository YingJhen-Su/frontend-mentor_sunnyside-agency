const app = () => {
    const menuBtn = document.querySelector("#menu__btn");
    const menuMobile = document.querySelector("#menu__mobile");
    // const menuBar = document.querySelector('#menu__bar');

    const menuToggle = () => {
        menuMobile.classList.toggle("active");
        // menuBar.classList.toggle('toggle');
    };

    menuBtn.addEventListener("click", menuToggle);
    menuMobile.addEventListener("click", menuToggle);
};

document.addEventListener("DOMContentLoaded", app);
