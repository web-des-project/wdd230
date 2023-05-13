document.querySelector("#myYear").textContent = new Date().getFullYear();
document.querySelector("#lastUpdated").textContent = document.lastModified;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}   

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;