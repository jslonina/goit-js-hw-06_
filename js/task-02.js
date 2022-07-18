const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

const makeList = element => {
  const ingMakeList = document.createElement("li");
  ingMakeList.classList.add("item");
  ingMakeList.textContent = element;
  return ingMakeList;
};

const ingRef = ingredients.map(makeList);

list.append(...ingRef);