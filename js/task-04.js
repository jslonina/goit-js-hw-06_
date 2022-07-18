let counterValue = 0;

const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

const counter = document.querySelector('#value');

counter.textContent = `${counterValue}`;

const functionDec = () => {
    counter.textContent = `${counterValue -= 1}`
};

const functionInc = () => {
    counter.textContent = `${counterValue += 1}`
};

decBtn.addEventListener("click", functionDec);
incBtn.addEventListener("click", functionInc);


