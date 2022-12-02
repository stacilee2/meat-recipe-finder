document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM fully loaded and parsed', event);
  
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    const dropdown = document.querySelector("select")
    dropdown.addEventListener("change", getMeat)


    function getMeat(event){
        const recipeList = document.querySelector("#recipe-list")
        recipeList.innerHTML = ""
        let meat = event.target.value
        fetch(`http://localhost:3000/${meat}`)
        .then (res => res.json())
        .then ((recipeInfo) => {recipeInfo.map(recipe => {
                
                const recipeCard = document.createElement('div')
        
                recipeCard.innerHTML = `
                    <h2 id="meal-name">${recipe.meal}</h2>
                    <img src="${recipe.imageURL}">
                    <p id="ingredients">INGREDIENTS: ${recipe.ingredients}</p>
                    <button id=${recipe.id}-likes-button>${recipe.likes}</button>
                    <form id="get-ingredients">MISSING INGREDIENTS: 
                `
                recipeList.appendChild(recipeCard)
                document.getElementById(`${recipe.id}-likes-button`).addEventListener("click", () =>{
                    console.log("liked")
                })
            })
            
        })
        .catch(function() {
            console.log("error");
        });
    }


    // //function likeRecipe() {
    //         //console.log("liked")
    //     //     fetch("http://localhost:3000/" + `/${recipe.id}`), {
    //     //         method: "PATCH",
    //     //         headers: {
    //     //             'Content-Type': 'application/json'
    //     //         },
    //     //         body: JSON.stringify(recipeInfo)
    //     //     }
    //     //     .then (res => res.json())
    //     //     .then (recipeInfo => recipeInfo)
    //     //}
    // //}
});

