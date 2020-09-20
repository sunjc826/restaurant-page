// initial page-load

export default function loadInit(content) {
    content.innerHTML = "";
    content.setAttribute("style", "text-align: center; white-space: pre;");
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Food Haven";
    restaurantName.setAttribute("style", 
        "font-size: 38px;\
            font-style: italic;\
            font-weight: bold;");
    content.appendChild(restaurantName);

    const foodImage = document.createElement("img");
    foodImage.setAttribute("src", "./foodiesfeed.com_friends-having-pizza-in-a-restaurant.jpg");
    foodImage.setAttribute("style", 
        "width: auto;\
            height: 65vh;\
            margin: 5vh auto");
    content.appendChild(foodImage);

    const restaurantDescription = document.createElement("p");
    restaurantDescription.textContent = "The freshest ingredients makes the finest food on Earth.\nVisit us today.";
    content.appendChild(restaurantDescription);
}

