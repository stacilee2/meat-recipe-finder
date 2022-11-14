const BASE_URL = "http://localhost:3000"

const beefBtn = document.querySelector("#beef-button")
const chickenBtn = document.querySelector("#chicken-button")
const porkBtn = document.querySelector("#pork-button")
const seafoodBtn = document.querySelector("#seafood-button")

beefBtn.addEventListener("click", getBeef);
chickenBtn.addEventListener("click", getChicken);
porkBtn.addEventListener("click", getPork);
seafoodBtn.addEventListener("click", getSeafood);

function getBeef() {
    fetch("http://localhost:3000/beef")
    .then (res => res.json())
    .then ((data) => console.log(data))
}

function getChicken() {
    fetch("http://localhost:3000/chicken")
    .then (res => res.json())
    .then ((data) => console.log(data))
}

function getPork() {
    fetch("http://localhost:3000/pork")
    .then (res => res.json())
    .then ((data) => console.log(data))
}

function getSeafood() {
    fetch("http://localhost:3000/seafood")
    .then (res => res.json())
    .then ((data) => console.log(data))
}