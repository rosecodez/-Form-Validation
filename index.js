const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

window.intlTelInput(input, {
  utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
});
// get the country data from the plugin
const countryData = window.intlTelInputGlobals.getCountryData();
const input = document.querySelector('#phone');
const addressDropdown = document.querySelector('#address-country');

// init plugin
const iti = window.intlTelInput(input, {
  utilsScript: '/intl-tel-input/js/utils.js?1695806485509', // just for formatting/placeholders etc
});

// populate the country dropdown
for (let i = 0; i < countryData.length; i++) {
  const country = countryData[i];
  const optionNode = document.createElement('option');
  optionNode.value = country.iso2;
  const textNode = document.createTextNode(country.name);
  optionNode.appendChild(textNode);
  addressDropdown.appendChild(optionNode);
}
// set it's initial value
addressDropdown.value = iti.getSelectedCountryData().iso2;

// listen to the telephone input for changes
input.addEventListener('countrychange', () => {
  addressDropdown.value = iti.getSelectedCountryData().iso2;
});

// listen to the address dropdown for changes
addressDropdown.addEventListener('change', () => {
  iti.setCountry(this.value);
});
