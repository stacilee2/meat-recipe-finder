

const recipeList = document.querySelector("#recipe-list")
heart = document.getElementById("heart")


// const form = document.getElementById("request-form")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
    
//     let comment = document.getElementById("request").value
//     let li = document.createElement("li")
//     const p = document.getElementById("requests-section")

//     p.append(li)
//     li.append(comment)
    
// })


function getMeat(event){
    let meat = event.target.value
    recipeList.innerHTML = ""

    fetch(`http://localhost:3000/${meat}`)
    .then (res => res.json())
    .then ((recipeInfo) => {
        //For each recipe object, one recipe will be rendered onto the DOM
        recipeInfo.forEach( (recipe) => {
                renderRecipe(recipe)
            })
        })
        .catch(() => {
            const error = document.getElementById("error")
            error.style.display = "block"
        })

    }

const dropdown = document.querySelector("select")
dropdown.addEventListener("change", getMeat)

function renderRecipe(meal) {
        const recipeCard = document.createElement("div")
        recipeCard.className = "card"

        const h2 = document.createElement("h2")
        h2.className = "h2-name"
        h2.textContent = `${meal.meal}` 

        const image = document.createElement("img")
        image.src = meal.imageURL
        image.id = `image-${meal.id}`
        image.className = "recipe-image"
        
         
        const p = document.createElement("p")
        p.className = "ingredients"
        p.textContent = `${meal.ingredients}`

        //Create likes element, update DOM with the amount of likes in the database
        const likes = document.createElement("p")
        likes.id = `meal-likes-${meal.id}`
        likes.textContent = "Like this recipe?"

        //Create button, add "like" to button, add classname "like-btn", for each 
        //button id attach to meal id
        //Update likes with each event
        const button = document.createElement("button")
        button.textContent = "like"
        button.className = "like-btn"
        button.id = `${meal.id}`
        

        recipeCard.append(h2, image, p, likes, button)
        recipeList.append(recipeCard)

        button.addEventListener("click", () => {
            heart = document.getElementById("heart")
            heart.style.display = "block" 
            likes.textContent = "LIKED!"
            document.getElementById(`meal-likes-${meal.id}`).appendChild(heart)
        })

        const photo = document.getElementById(`image-${meal.id}`)
        photo.addEventListener("mouseover", () => {
            photo.style.width = "550px",
            photo.style.height = "550px"
        })
        photo.addEventListener("mouseout", () => {
            photo.style.width = "500px",
            photo.style.height = "500px"
        })
}



