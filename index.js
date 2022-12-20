const recipeList = document.querySelector("#recipe-list")

const dropdown = document.querySelector("select")
dropdown.addEventListener("change", getMeat)

function getMeat(event){
    let meat = event.target.value
    recipeList.innerHTML = ""

    fetch(`http://localhost:3000/${meat}`)
    .then (res => res.json())
    .then ((recipeInfo) => {

        recipeInfo.forEach( (recipe) => {
            
                renderRecipe(recipe)
            })
        })
        .catch(() => {
            console.log("error")
    
        })

    }

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

        const likes = document.createElement("p")
        likes.id = `meal-likes-${meal.id}`
        likes.textContent = "Like this recipe?"

        const button = document.createElement("button")
        button.textContent = "like"
        button.className = "like-btn"
        button.id = `${meal.id}`
        
        recipeCard.append(h2, image, p, likes, button)
        recipeList.append(recipeCard)

        button.addEventListener("click", () => {
            likes.textContent = "LIKED!"
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


