const valueSpan = document.querySelector("#value");
// const counterButtonElem = document.querySelector("#counter");

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;
// console.log(btnIncrement);

btnIncrement.addEventListener("click", onIncrement);

function onIncrement(event) {
  counterValue += 1;
  valueSpan.textContent = counterValue;
}

btnDecrement.addEventListener("click", onDecrement);

function onDecrement(event) {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
}
