const jsonData = "json/data.json";
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

async function getCompanies() {
    const response = await fetch(jsonData);
    const data = await response.json();
    //console.table(data.companies);
    displayCompanies(data.companies);
}
getCompanies();

  const displayCompanies = (companies) => {
    const cards = document.querySelector('div.cards'); 
  
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let email = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('p');
      let membership = document.createElement('p');
      let image = document.createElement('img');

      name.textContent = `${company.name}`;
      email.textContent = `${company.email}`;
      phone.textContent = `${company.phone}`;
      website.textContent = `${company.website}`;
      membership.textContent = `${company.membership}`;

      image.setAttribute('src', company.image);
      image.setAttribute('alt', ` ${company.name}`);
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '150');
      image.setAttribute('height', '150');

      card.classList.add("company-card");
      email.classList.add("company-email");
      phone.classList.add("phone-card");
      website.classList.add("company-web");
      image.classList.add("company-image");

      
      card.appendChild(name);
      card.appendChild(membership);
      card.appendChild(website);
      card.appendChild(image);
      card.appendChild(email);
      card.appendChild(phone);
      cards.appendChild(card);
    }
    )}
// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
