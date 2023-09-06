const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  span.textContent = event.currentTarget.value;

  if ((span.textContent = event.currentTarget.value.trim())) {
    console.log(event.currentTarget.value.trim());
  } else if ((event.currentTarget.value = " ")) {
    return (span.textContent = "Anonymous");
  }
}
