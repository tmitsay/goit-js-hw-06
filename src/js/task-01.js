const container = document.querySelector("#categories");
const listEl = container.children;
const listItem = document.querySelector(".item");

const tagText = listItem.children.textContent;

console.log("Number of categories:", listEl.length);
console.dir(tagText);
