document.querySelector("#myYear").textContent = new Date().getFullYear();
document.querySelector("#lastUpdated").textContent = document.lastModified;

/**Banner */
const bannerElement = document.querySelector("#banner");
const today = new Date().getDay();

if (today === 1 || today === 2) {
	bannerElement.style.display = "block";
}
else {
	bannerElement.style.display = "none";
}

