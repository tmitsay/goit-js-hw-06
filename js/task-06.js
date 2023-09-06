const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);

  if (
    event.currentTarget.value.trim().length === Number(input.dataset.length)
  ) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}
// console.log(Number(input.dataset.length));
