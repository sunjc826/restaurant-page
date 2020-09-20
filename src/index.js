import loadInit from "./init.js";
import loadContact from "./contact.js";
import loadMenu from "./menu.js";

const body = document.querySelector("body");
const tabPanel = document.createElement("div");
tabPanel.setAttribute("style", 
    "display: flex;\
    flex-direction: row;");
const tabs = [];
tabs.push(createTab("Homepage", loadInit));
tabs.push(createTab("Contact Us", loadContact));
tabs.push(createTab("Menu Selection", loadMenu));
for (let tab of tabs) {
    tabPanel.appendChild(tab);
}

const content = document.querySelector("#content");
body.insertBefore(tabPanel, content);

let selectedTab = tabs[0];
toggleTab(selectedTab);
loadInit(content);

function createTab(tabName, fn) {
    const tab = document.createElement("div");
    tab.textContent = tabName;
    tab.setAttribute("style", "text-align: left");
    tab.addEventListener("click", tabEvent);
    tab.classList.add("tab");
    tab.classList.add("tab-deselected");

    function tabEvent(event) {
        toggleTab(selectedTab);
        toggleTab(this);
        selectedTab = this;
        fn(content);
    }

    return tab;
}

function toggleTab(tab) {
    tab.classList.toggle("tab-deselected")
    tab.classList.toggle("tab-selected");
}