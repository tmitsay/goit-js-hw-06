const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
spanText.style.fontSize = "16px";

input.addEventListener("input", onChangeSize);

function onChangeSize(event) {
  // console.dir(event.currentTarget);
  // console.dir(event.currentTarget.max);

  if (
    event.currentTarget.min >= input.min &&
    event.currentTarget.max <= input.max
  ) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
  }
}
