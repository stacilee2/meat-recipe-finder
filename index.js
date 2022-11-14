const BASE_URL = "http://localhost:3000"

//button variables for different meat selections
const beefBtn = document.querySelector("#beef-button") 
const chickenBtn = document.querySelector("#chicken-button")
const porkBtn = document.querySelector("#pork-button")
const seafoodBtn = document.querySelector("#seafood-button")

//event listeners for buttons
beefBtn.addEventListener("click", getBeef);
chickenBtn.addEventListener("click", getChicken);
porkBtn.addEventListener("click", getPork);
seafoodBtn.addEventListener("click", getSeafood);

// function getRecipes() {
//     recipe.forEach(meal => renderOneRecipe(meal))
// }

//functions that contain fetch GET requests for meat objects
function getBeef() {
    fetch("http://localhost:3000/beef")
    .then (res => res.json())
    .then ((recipeInfo) => recipeInfo.forEach(meal => renderOneRecipe(meal)))
}

//for each object in the array, I need to render the meal, imageURL, ingredients, likes onto the DOM. 
//How do I grab each object in an array and put each object into its own recipe card
//I need to grab each object by it's id
//The DOM needs to have a container for each meal to store the meal data

//getBeef()

function getChicken() {
    fetch("http://localhost:3000/chicken")
    .then (res => res.json())
    .then ((recipeInfo) => recipeInfo.forEach(meal => renderOneRecipe(meal)))
}

function getPork() {
    fetch("http://localhost:3000/pork")
    .then (res => res.json())
    .then ((recipeInfo) => recipeInfo.forEach(meal => renderOneRecipe(meal)))
}

function getSeafood() {
    fetch("http://localhost:3000/seafood")
    .then (res => res.json())
    .then ((recipeInfo) => recipeInfo.forEach(meal => renderOneRecipe(meal)))
}

function renderOneRecipe(recipe) {
    let recipeCard = document.createElement('li')
    recipeCard.classname = 'recipe'
    recipeCard.innerHTML = `
        <div class="title">
            <h1>${recipe.meal}</h1>
        </div>
        <img src="${recipe.imageURL}">
        <div class="content">
            <h4>${recipe.ingredients}</h4>
        <div id="heart">
            <button> ${recipe.likes}</button>
        </div>
    `
    document.querySelector("#recipe-list").appendChild(recipeCard)
}

//toggle page

