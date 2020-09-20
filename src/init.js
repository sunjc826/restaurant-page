// initial page-load

export default function loadInit(content) {
    content.innerHTML = "";
    content.setAttribute("style", "text-align: center;");
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Food Haven";
    content.appendChild(restaurantName);

    const foodImage = document.createElement("img");
    foodImage.setAttribute("src", "../src/foodiesfeed.com_friends-having-pizza-in-a-restaurant.jpg");
    foodImage.setAttribute("style", "width: 1000px; height: auto;");
    content.appendChild(foodImage);

    const restaurantDescription = document.createElement("p");
    restaurantDescription.textContent = "The freshest ingredients makes the finest food on Earth.";
    content.appendChild(restaurantDescription);
}

