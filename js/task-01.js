// First

const categoryCount = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryCount.length}`);

//Second

categoryCount.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})