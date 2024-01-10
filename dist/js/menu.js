"use strict";
document.addEventListener("DOMContentLoaded", nav_vert_init);
//Initiates the nav-vert
function nav_vert_init() {
    //checks if there is actually a nav-vert in the html file
    let nav_verts = Array.from(document.querySelectorAll("NAV-VERT"));
    if (nav_verts) {
        nav_verts.forEach((nav_vert) => {
            if (!nav_vert) {
                console.log("no nav-vert :(");
                return;
            }
            //initializing all the sub-navs with connections
            subNavInit(nav_vert);
            //adding the eventlisteners onto all the nav-items
            let nav_items = nav_vert.querySelectorAll("NAV-ITEM");
            nav_items.forEach((nav_item) => nav_item.addEventListener("click", (event) => menuItemClicked(event)));
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
        let nav_vert = currentElement.closest("NAV-VERT");
        if (!nav_vert) {
            console.log("NAV-VERT not found :(");
            return;
        }
        subNavInit(nav_vert);
        currentElement.classList.add("current");
        if (currentElement.parentElement) {
            let parentElement = currentElement.parentElement;
            if (parentElement.tagName == "SUB-NAV") {
                connect(currentElement);
            }
        }
    }
    if (((_a = currentElement === null || currentElement === void 0 ? void 0 : currentElement.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) == "NAV-VERT") {
        let parentNav = currentElement.parentElement;
        let children = Array.from(parentNav.children);
        let position = children.indexOf(currentElement);
        if (children.length - 1 != position && children[position + 1].tagName == "SUB-NAV") {
            subNavInit(parentNav);
            let subNav = children[position + 1];
            subNav.style.display = "block";
            let navItems = Array.from(subNav.querySelectorAll("NAV-ITEM"));
            let defaultConnectionLength = (navItems[0].clientHeight * navItems.length) - (navItems[0].clientHeight / 2);
            subNav.querySelector(".connection").style.height = defaultConnectionLength + "px";
        }
        children.forEach((element, index) => {
            if (index != position + 1 && element.tagName == "SUB-NAV")
                element.style.display = "none";
        });
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
        console.log("Parent element of Nav-Item not found");
        return null;
    }
}
function subNavInit(parentNavVert) {
    let parentSubNavs = Array.from(parentNavVert.querySelectorAll("SUB-NAV"));
    parentSubNavs.forEach((parentSubNav) => {
        if (!parentSubNav) {
            console.log("Sub nav of the sub nav item was not found");
            return;
        }
        let navItems = Array.from(parentSubNav.querySelectorAll("NAV-ITEM"));
        let defaultConnectionLength = navItems[0].clientHeight * navItems.length;
        //remove existing connections 
        let connectionsArray = Array.from(parentSubNav.querySelectorAll(".connection"));
        connectionsArray.forEach((connection) => parentSubNav === null || parentSubNav === void 0 ? void 0 : parentSubNav.removeChild(connection));
        //remove existing connecteds
        let connectedsArray = Array.from(parentSubNav.querySelectorAll(".connected"));
        connectedsArray.forEach((connected) => connected.classList.remove("connected"));
        //create a new connection 
        let connection = document.createElement("div");
        connection.className = "connection";
        parentSubNav === null || parentSubNav === void 0 ? void 0 : parentSubNav.insertBefore(connection, parentSubNav.firstChild);
    });
}
function connect(subNavItem) {
    let parentSubNav = subNavItem.parentElement;
    if (!parentSubNav) {
        console.log("Sub nav parent of the sub nav was not found");
        return;
    }
    //calculating the subNacItem's position in the parentSubNav 
    let subNavItems = Array.from(parentSubNav.querySelectorAll("NAV-ITEM"));
    let subNavPosition = subNavItems.indexOf(subNavItem);
    //clearing all the existing connections
    let connects = parentSubNav.querySelectorAll(".connection");
    // if(connects.length>1)
    // subNavInit(parentSubNav);
    let connect = parentSubNav.querySelector(".connection");
    if (!connect) {
        console.log("connection div wasn't found ");
        return;
    }
    connect.classList.add("connected");
    //changing the height according the position of the nav-item that is being clicked
    let navItemHeight = subNavItem.clientHeight;
    let connectionHeight = 10 + (subNavPosition * navItemHeight);
    connect.style.height = connectionHeight.toString() + "px";
}
