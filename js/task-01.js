const container = document.querySelector("#categories");
const listEl = container.children;

// const listItem = document.querySelector(".item");

let message;

[...container.children].forEach((elements) => {
  //   console.dir(elements);
  const titleEl = elements.firstElementChild;
  console.log("Category: ", titleEl.textContent);
  const list = elements.lastElementChild.children;
  console.log("Elements: ", list.length);
  //   message = `Category: ${titleEl.textContent}
  //   Elements: ${list.length}`;
});

console.log("Number of categories:", listEl.length);
// console.dir(listItem);
// console.log(message);
