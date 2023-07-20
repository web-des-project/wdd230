
async function getFruitsData() {
    const response = await fetch("json/fruits.json");
    const data = await response.json();
    return data;
}
getFruitsData()

function fruitSelection(fruitData) {
    const selectFruits = document.querySelectorAll('select');
    fruitData.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.text = fruit.name;
        selectFruits.forEach(select => select.appendChild(option.cloneNode(true)));
    });

    return selectFruits
}
async function sumbition(event) {
    event.preventDefault();

    const date = new Date().toLocaleDateString();

    const fruitData = await getFruitsData();

    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const instruction = document.getElementById('instruction').value;

    const fruitsSelected = fruitData.filter(fruit => [fruit1, fruit2, fruit3].includes(fruit.name));
    let carbohydrates = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;

    fruitsSelected.forEach(fruit => {
        carbohydrates += fruit.nutritions.carbohydrates;
        protein += fruit.nutritions.protein;
        fat += fruit.nutritions.fat;
        sugar += fruit.nutritions.sugar;
        calories += fruit.nutritions.calories;
    });

    const finalSub = `
    <h2><strong>Name:</strong> ${firstName}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3><strong>Your Fruits Selected</strong></h3>
    <p>${fruit1}</p>
    <p>${fruit2}</p>
    <p>${fruit3}</p>
    <p>${date}</p>
    <p><strong>Special instructions: </strong> ${instruction}</p>
    <h4>Nutritional Information</h4>
    <p><strong>Total Carbohydrates:</strong> ${carbohydrates}</p>
    <p><strong>Total Proteins:</strong> ${protein}</p>
    <p><strong>Total Fat:</strong> ${fat}</p>
    <p><strong>Total Sugar:</strong> ${sugar}</p>
    <p><strong>Total Calories:</strong> ${calories}</p>
    `;

    document.getElementById('outputArea').innerHTML = finalSub;

}

window.addEventListener('load', async () => {
    const fruitData = await getFruitsData();
    fruitSelection(fruitData);

});


document.getElementById('mixFruitDrink').addEventListener('submit', sumbition);

