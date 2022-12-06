document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded and parsed');

  
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    const dropdown = document.querySelector("select")
    dropdown.addEventListener("change", getMeat)

    //Meat recipes are rendered onto the DOM when the user selects a meat
    function getMeat(event){
        const recipeList = document.querySelector("#recipe-list")
        recipeList.innerHTML = ""
        let meat = event.target.value
        fetch(`http://localhost:3000/${meat}`)
        .then (res => res.json())
        .then ((recipeInfo) => {recipeInfo.map(recipe => {
                
                const recipeCard = document.createElement('div')
                //Recipe card is created with name of meal, photo, ingredients, like button
                recipeCard.innerHTML = `
                    <h2 id="meal-name">${recipe.meal}</h2>
                    <img src="${recipe.imageURL}">
                    <p id="ingredients" class ="contents">INGREDIENTS: ${recipe.ingredients}</p>
                    <p>Likes: </p>
                    <p id="collect-likes" class="collect">${recipe.likes}</p>
                    <button id="likes-button" data-meat=${meat} class="btn">Like</button> 
                `
                recipeList.appendChild(recipeCard)
                //When like button is clicked the server is notified and database is updated
                recipeCard.querySelector("#likes-button").addEventListener("click", (e) => {
                    recipe.likes += 1
                    recipeCard.querySelector("#collect-likes").textContent = recipe.likes
                    const meat = e.target.dataset.meat
                    updateLikes(recipe, meat)
                    console.log("Clicked")
                })

            })
            
        })
        .catch(function() {
            console.log("error");
        });  
        //PATCH request to update DOM and collect likes in database
        function updateLikes(recipe, meat){
            fetch(`http://localhost:3000/${meat}/${recipe.id}`), {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(recipe)
            }
            .then(res => {
                console.log(res)
            })
            
            // .catch(function (error) {
            //     alert("Error");
            //     console.log(error.message);
            //   });
        }
    }
});

