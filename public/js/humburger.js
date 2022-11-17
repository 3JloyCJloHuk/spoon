const humburger = document.querySelector(".header__humburger");
const menu = document.querySelector(".header__menu");
const listItems = document.querySelectorAll(".header__item-link");
const path = document.querySelector(".header__menu-close")

humburger.addEventListener("click", () => {
    menu.classList.add("header__menu--active");
});

const clickCloseMenu = () => {
    if (menu.classList[1] === "header__menu--active") {
        menu.classList.remove("header__menu--active");
    };
};

listItems.forEach((link) => {
    link.addEventListener("click", clickCloseMenu);
});

path.addEventListener("click", clickCloseMenu);

