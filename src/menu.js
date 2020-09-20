export default function loadMenu(content) {
    content.innerHTML = "";
    content.setAttribute("style", "text-align: center; white-space: pre");

    const appetizers = [
        "Bruschetta", 
        "Canapes",
        "Caviar",
        "Deviled eggs",
        "Pickles",
        "Smoked egg"
    ];
    const mains = [
        "Butter Chicken",
        "Palak Paneer",
        "Rogan Josh",
        "Spicy Pork Vindaloo",
        "Bombay Sloppy Joes"
    ];
    const desserts = [
        "Tiramisu",
        "Pannacotta",
        "Fruit Jelly with Ice Cream",
        "Custard",
        "Cheesecake"
    ];
    const appetizerDisplay = createMenuSection("Appetizers", appetizers);
    const mainCourseDisplay = createMenuSection("Main Course", mains);
    const dessertDisplay = createMenuSection("Dessert", desserts);

    content.appendChild(appetizerDisplay);
    content.appendChild(mainCourseDisplay);
    content.appendChild(dessertDisplay);
}

function createMenuSection(headingName, items) {
    const display = document.createElement("div");

    const heading = document.createElement("p");
    heading.textContent = headingName;
    heading.setAttribute("style", 
        "font-size: 24px;\
            font-weight: bold;\
            margin: 30px auto 10px");

    const content = document.createElement("ul");
    content.setAttribute("style", "list-style-type: none;");
    for (let item of items) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        content.appendChild(listItem);
    }

    display.appendChild(heading);
    display.appendChild(content);
    return display;
}