import country from 'country-list-js';

const form = document.getElementById('form');
const email = document.getElementById('email');
const zipCode = document.getElementById('zipCode');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

var country_names = country.names();
let sortedCountries = country_names.sort();
console.log(sortedCountries);

let select = document.getElementById("country");

function appendCountries() {
  for (let i = 0; i < sortedCountries.length; i++) {
    let optn = sortedCountries[i];
    let el = document.createElement("option");
    el.textContent = optn;
    el.value = optn;
    select.appendChild(el);
  }
}
appendCountries()