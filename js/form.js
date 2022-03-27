const form = document.querySelector(".form");
const input = document.querySelector(".form__uzs-input");

const usdResult = document.querySelector(".usd-result");
const eurResult = document.querySelector(".eur-result");
const rubResult = document.querySelector(".rub-result");

const USD = 11560;

form.addEventListener("submit", function (evt){
    evt.preventDefault(); 

    const inputValue = input.value;
    console.log(inputValue);

    usdResult.textContent = `USD:  ${inputValue / USD}`;
}) ; 