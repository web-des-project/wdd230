let temperature = 33;
let windSpeed = 2.5;
let windChillValue = document.getElementById("windChill");
buildWchill(windSpeed, temperature);
windChillValue.innerHTML = buildWchill(windSpeed, temperature);


function buildWchill(windSpeed, temperature) {
    if((temperature <= 50) & (windSpeed > 3)) {
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;
        
        windChill = Math.floor(windChill);
        
        return windChill
    } 
    else {
        return "N/A";
    }
}


