function Recipe(imgSrc, title, author, published, description, fullArticle){
    this.imgSrc = imgSrc;
    this.title = title;
    this.author = author;
    this.published = published;
    this.description = description;
    this.fullArticle = fullArticle;
}


const recipes = [
    new Recipe("./images/sausage-and-peppers.jpg", 
            "Sausage and Peppers",
            "Fred Savage",
            "02/2022",
            getLoremIpsum(250),
            "#",
    ),
    new Recipe("./images/grilled-cheese.webp", 
            "Grilled Cheese",
            "Corey Mathews",
            "01/2022",
            getLoremIpsum(250),
            "#",
    ),
    new Recipe("./images/mac-and-cheese-with-hotdogs.jpg", 
            "Mac and Cheese with Hotdogs",
            "Fat Albert",
            "12/2021",
            getLoremIpsum(250),
            "#",
    ),

];

const recipeCardTemplate = document.querySelector("#recipe-card-template");
const recipeCards = document.querySelector("#recipe-cards");
for (let recipe of recipes){
    let newCard = createNewRecipeCard(recipe, recipeCardTemplate);
    recipeCards.appendChild(newCard);
}

function createNewRecipeCard(recipe, node){
    const newCard = node.cloneNode(true);
    newCard.id = "";
    newCard.classList.add("recipe-card");

    const recipeImage = newCard.querySelector(".recipe-image");
    const title = newCard.querySelector(".title");
    const author = newCard.querySelector(".author");
    const date = newCard.querySelector(".date a");
    const description = newCard.querySelector(".description");
    const fullArticle = newCard.querySelector(".full-article");

    recipeImage.src = recipe.imgSrc;
    title.textContent = recipe.title;
    author.textContent = recipe.author;
    date.textContent = recipe.published;
    description.textContent = recipe.description;
    fullArticle.textContent = recipe.fullArticle;

    return newCard;

}