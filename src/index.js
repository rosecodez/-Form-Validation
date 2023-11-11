import country from 'country-list-js';
import "./style.css";
import image from "../src/high-five.png";
const form = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.getElementById("emailError");
const zipCode = document.getElementById('zipCode');
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const passwordConfirmation = document.getElementById('passwordConfirmation');
const passwordConfirmationError = document.getElementById('passwordConfirmationError')
var country_names = country.names();
let sortedCountries = country_names.sort();

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
appendCountries();

//email
function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    emailError.textContent = "Entered value needs to be an email address. Example: " + "name@gmail.com";
  }
  emailError.className = "error active";
}
email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error"; 
  } else {
    showEmailError();
  } 
});

//password
function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
  passwordError.className = "error active";
}
password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error"; 
  } else {
    showPasswordError();
  }
});
//password confirmation
let confirmation = false;
function confirmPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("passwordConfirmation").value;
  if(password != confirmPassword) {
    passwordConfirmationError.textContent = "Email is not matching"
  } else if (password = confirmPassword) {
    confirmation = true;
    console.log(confirmation)
  }

}

//form
form.addEventListener("submit", (event) => {
  confirmPassword();
  event.preventDefault();
  if (!email.validity.valid) {
    showEmailError();
  }
  if (!password.validity.valid) {
    showPasswordError();
  }
  if (confirmation = true) {
    const success = document.createElement('p');
    success.textContent = "Data was successfully registered!";
    form.appendChild(success)
    const img = new Image();
    img.src = image;
    form.appendChild(img)
  }
});