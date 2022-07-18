const fontSize = document.querySelector("#font-size-control");

const word = document.querySelector("#text");

fontSize.addEventListener("input", () =>{
    word.style.fontSize = fontSize.value +"px";
})