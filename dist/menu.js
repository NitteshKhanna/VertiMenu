"use strict";
document.addEventListener("DOMContentLoaded", nav_vert_init);
//Initiates the nav-vert
function nav_vert_init() {
    var nav_vert = document.querySelector("nav-vert");
    //checks if there is actually a nav-vert in the html file
    if (nav_vert == null) {
        console.log("no nav-vert :( ");
        return;
    }
    //adding the eventlisteners onto all the nav-items
    let nav_items = nav_vert.querySelectorAll("nav-item");
    for (let i = 0; i < nav_items.length; i++) {
        let nav_item = nav_items[i];
        nav_item.addEventListener("click", (event) => {
            menuItemClicked(event);
        });
    }
}
//when an item in the menu is clicked
function menuItemClicked(event) {
    var _a;
    const clickedItem = event.target;
    let currentElement = removeAlreadyCurrent(clickedItem);
    //adding the current class to the clicked item
    if (currentElement) {
        currentElement.classList.add("current");
        if (currentElement.parentElement) {
            let parentElement = currentElement.parentElement;
            if (parentElement.tagName == "SUB-NAV") {
                subNavInit(currentElement);
            }
        }
    }
    //hiding or displaying the submenu appropirately
    let subMenu = document.querySelector(".Store-sub");
    if (subMenu && ((_a = currentElement === null || currentElement === void 0 ? void 0 : currentElement.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) == "NAV-VERT") {
        if ((currentElement === null || currentElement === void 0 ? void 0 : currentElement.classList[0]) == "Store") {
            subMenu.style.display = "block";
        }
        else {
            subMenu.style.display = "none";
        }
    }
}
function removeAlreadyCurrent(currentItem) {
    let parentElementTobeCleared = null;
    let currentNavItem = null;
    let temp = currentItem;
    while (temp) {
        if ((temp === null || temp === void 0 ? void 0 : temp.tagName) == "NAV-ITEM") {
            parentElementTobeCleared = temp.parentElement;
            currentNavItem = temp;
            break;
        }
        temp = temp.parentElement;
    }
    if (parentElementTobeCleared) {
        let alreadyCurrent = parentElementTobeCleared === null || parentElementTobeCleared === void 0 ? void 0 : parentElementTobeCleared.querySelectorAll(".current");
        alreadyCurrent.forEach((current) => {
            current.classList.remove("current");
        });
        return currentNavItem;
    }
    else {
        console.log("something terribly went wrong");
        return null;
    }
}
function subNavInit(subNavItem) {
    // console.log("SubNavInit", subNavItem);
    let parentSubNav = subNavItem.parentElement;
    if (parentSubNav) {
        let connectedNavs = parentSubNav.querySelectorAll(".connected");
        for (let i = 0; i < connectedNavs.length; i++) {
            connectedNavs[i].classList.remove("connected");
        }
    }
    let navItems = Array.from(parentSubNav === null || parentSubNav === void 0 ? void 0 : parentSubNav.querySelectorAll("NAV-ITEM"));
    let connections = Array.from(parentSubNav === null || parentSubNav === void 0 ? void 0 : parentSubNav.querySelectorAll(".connection"));
    let connection = connections[navItems.indexOf(subNavItem)];
    console.log(connection);
    if (connection) {
        //timing the change, have to make it a bit more smoother than this 
        setTimeout(() => {
            connection === null || connection === void 0 ? void 0 : connection.classList.add("connected");
        }, 500);
    }
}
