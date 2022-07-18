function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector(#boxes);
const createBtn = document.querySelector(["data-create"]);
const destroyBtn = document.querySelector(["data-destroy"]);