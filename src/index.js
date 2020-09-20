import loadInit from "./init.js";
import loadContact from "./contact.js";
import loadMenu from "./menu.js";

const body = document.querySelector("body");
const tabs = [];
tabs.push(createTab("Homepage", loadInit));
tabs.push(createTab("Contact Us", loadContact));
tabs.push(createTab("Menu Selection", loadMenu));

const content = document.querySelector("#content");
for (let tab of tabs) {
    body.insertBefore(tab, content);
}

loadInit(content);

function createTab(tabName, fn) {
    const tab = document.createElement("div");
    tab.textContent = tabName;
    tab.setAttribute("style", "text-align: left");
    tab.addEventListener("click", tabEvent);

    function tabEvent(event) {
        fn(content);
    }

    return tab;
}