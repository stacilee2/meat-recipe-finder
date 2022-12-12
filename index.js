document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded and parsed');
});

const dropdown = document.querySelector("select")
dropdown.addEventListener("change", getMeat)

const recipeList = document.querySelector("#recipe-list")

function getMeat(event){
    let meat = event.target.value

    fetch(`http://localhost:3000/${meat}`)
    .then (res => res.json())
    .then ((recipeInfo) => {
        
        recipeInfo.forEach( (recipe) => {
                renderRecipe(recipe)
            })
            
        })
        .catch(function() {
            console.log("error");
        });  
        
    }

function renderRecipe(meal) {
    const recipeCard = document.createElement("div")
                recipeCard.className = "card"

                const h2 = document.createElement("h2")
                h2.textContent = meal.name 

                const image = document.createElement("img")
                image.src = meal.imageURL
                image.className = "recipe-image"

                const p = document.createElement("p")
                p.textContent += `${meal.ingredients}`

                //Create likes element, update DOM with the amount of likes in the database
                const likes = document.createElement("p")
                likes.textContent = `Likes: ${meal.likes}`
    
                //Create button, add "like" to button, add classname "like-btn", for each 
                //button id attach to meal id
                //Update likes with each event
                const button = document.createElement("button")
                button.textContent = "like"
                button.className = "like-btn"
                button.id = `${meal.id}`

                recipeCard.append(h2, image, p, likes, button)
                recipeList.append(recipeCard)
}
    
// function updateLikes(){
//     //Selecting "like-btn" from the DOM, adding a click event, and incrementing recipe.likes by 1
//     recipeCard.querySelector("like-btn").addEventListener("click", () => {
//         recipe.likes += 1
//         recipeCard.querySelector("#collect-likes").textContent = recipe.likes
//     });
// }
                
