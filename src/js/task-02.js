const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulContainer = document.querySelector("#ingredients");

const liElements = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  return liEl;
});

ulContainer.append(...liElements);

// console.log(ulContainer);
console.log(liElements);
