const form = document.getElementById("exchange-form");
const amountPLN = document.getElementById("PLN");
const currency = document.getElementById("currency");
const input = document.getElementById("amount");
const loader = document.getElementById("loader");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  loader.style.display = "block";

  fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency.value}/today/`)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[0].mid;
      const result = input.value * rate;
      amountPLN.innerHTML = result.toFixed(2);
    })
    .catch((error) => {
      console.error(error);
      amountPLN.innerHTML = "No actual data available for today";
    })
    .finally(() => {
      loader.style.display = "none";
    });
});
