const recipes =
    [
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ];
// Function to create recipe cards
    function createRecipeCard(recipe) {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
          <img src="${recipe.imageSrc}" alt="${recipe.name}">
          <h3 class="name">${recipe.name}</h3>
          <p class="type"> ${recipe.type}</p>
          <p class="time"> ${recipe.time}</p>
          <p class="rateing"> ${recipe.rating}</p>
          <button class="like" onclick="toggleLike(${recipe.name})">Like</button>
        `;
        return card;
      }

       // Function to display all recipes
    function displayAllRecipes() {
        const recipeContainer = document.getElementById("recipeContainer");
        recipeContainer.innerHTML = "";
        recipes.forEach(recipe => {
          const card = createRecipeCard(recipe);
          recipeContainer.appendChild(card);
        });
      }
  
      // Function to filter recipes by name
      function filterRecipesByName(searchQuery) {
        const filteredRecipes = recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const recipeContainer = document.getElementById("recipeContainer");
        recipeContainer.innerHTML = "";
        filteredRecipes.forEach(recipe => {
          const card = createRecipeCard(recipe);
          recipeContainer.appendChild(card);
        });
      }
  
      // Function to toggle recipe type (veg, non-veg)
      function filterRecipes(type) {
        if (type === "all") {
          displayAllRecipes();
        } else {
          const filteredRecipes = recipes.filter(recipe => recipe.type === type);
          const recipeContainer = document.getElementById("recipeContainer");
          recipeContainer.innerHTML = "";
          filteredRecipes.forEach(recipe => {
            const card = createRecipeCard(recipe);
            recipeContainer.appendChild(card);
          });
        }
      }
  
      // Function to filter recipes by rating
      function filterByRating(ratingFilter) {
        const filteredRecipes = recipes.filter(recipe => {
          if (ratingFilter === "above-4.5") {
            return recipe.rating > 4.5;
          } else if (ratingFilter === "below-4.0") {
            return recipe.rating < 4.0;
          }
        });
        const recipeContainer = document.getElementById("recipeContainer");
        recipeContainer.innerHTML = "";
        filteredRecipes.forEach(recipe => {
          const card = createRecipeCard(recipe);
          recipeContainer.appendChild(card);
        });
      }
  
      // Function to toggle recipe like
      function toggleLike(recipeName) {
        const recipe = recipes.find(recipe => recipe.name === recipeName);
        if (recipe) {
          recipe.isLiked = !recipe.isLiked;
        }
        // You can add visual changes to the like button here if needed
      }
  
      // Initial display of all recipes
      displayAllRecipes();