export default function loadMenu(content) {
    content.innerHTML = "";
    content.setAttribute("style", "text-align: center; white-space: pre");

    const appetizers = [];
    const mains = [];
    const desserts = [];
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
    heading.setAttribute("style", "font-weight: bold;");

    const content = document.createElement("ul");
    for (let item in items) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        content.appendChild(listItem);
    }

    display.appendChild(heading);
    display.appendChild(content);
    return display;
}