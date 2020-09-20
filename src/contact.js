export default function loadContacts(content) {
    content.innerHTML = "";
    content.setAttribute("style", "text-align: center; white-space: pre;");

    const addressDisplay = createInfoSection("Address", "Holy Roman Empire\n 5th Avenue")

    const numberDisplay = createInfoSection("Contact Number", "Office: 12345678\nFax: 87654321");

    const hourDisplay = createInfoSection("Opening Hours", "Weekdays: 10am - 8pm\nWeekends: 11am - 7pm");

    content.appendChild(addressDisplay);
    content.appendChild(numberDisplay);
    content.appendChild(hourDisplay);
}

function createInfoSection(headingName, text) {
    const display = document.createElement("div");
    //display.setAttribute("style", )
    
    const heading = document.createElement("p");
    heading.textContent = headingName;
    heading.setAttribute("style", 
        "font-weight: bold;\
            margin: 30px auto 10px;");

    const content = document.createElement("p");
    content.textContent = text;

    display.appendChild(heading);
    display.appendChild(content);
    return display;
}