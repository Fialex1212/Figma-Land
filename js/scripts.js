let openMenu = (button) => {
    const headerList = document.querySelector(".header__list");
    headerList.classList.toggle("active");
    button.classList.toggle("active");
}