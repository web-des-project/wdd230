function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("active");
    document.querySelector("#hamburgerBtn").classList.toggle("active");
}

const hamburgerMenu = document.querySelector("#hamburgerBtn");
hamburgerMenu.oneclick = toggleMenu;

