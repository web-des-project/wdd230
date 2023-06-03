const lastVisit = localStorage.getItem('lastVisit');
const timeStamp = new Date().getTime();

const msToDays = 86400000;

if (lastVisit) {
    const timeElapsed = timeStamp - lastVisit;
    const daysElapsed = Math.floor(timeElapsed / msToDays);

    let difference = ("Days since your last visit: " + daysElapsed);
    document.write(difference);

    document.getElementById("visits").innerHTML = difference;
}
else {
    document.getElementById("visits").innerHTML = "Welcome! This is your first time here! "
}

localStorage.setItem('lastVisit', timeStamp);