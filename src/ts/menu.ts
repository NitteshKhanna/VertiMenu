document.addEventListener("DOMContentLoaded",nav_vert_init)
//Initiates the nav-vert
function nav_vert_init()
{
    var nav_vert: Element | null = document.querySelector("nav-vert");
    //checks if there is actually a nav-vert in the html file
    if(nav_vert == null)
    {
        console.log("no nav-vert :(");
        return;
    }
    //adding the eventlisteners onto all the nav-items
    let nav_items: NodeListOf<Element> = nav_vert.querySelectorAll("nav-item");
    for(let i=0; i<nav_items.length; i++)
    {
        let nav_item: Element =  nav_items[i];
        nav_item.addEventListener("click", (event)=>{
            menuItemClicked(event);
        });
    }
}
//when an item in the menu is clicked
function menuItemClicked(event: Event)
{
    const clickedItem: HTMLElement = <HTMLElement>event.target;
    let currentElement = removeAlreadyCurrent(clickedItem);
    //adding the current class to the clicked item
    if(currentElement)
    {
        currentElement.classList.add("current");

        if(currentElement.parentElement)
        {
            let parentElement = currentElement.parentElement;
            if(parentElement.tagName == "SUB-NAV")
            {
                subNavInit(currentElement);
            }
        }
    }
    //hiding or displaying the submenu appropirately
    let subMenu: HTMLElement | null = document.querySelector(".Store-sub");
    if(subMenu && currentElement?.parentElement?.tagName == "NAV-VERT")
    {
        if(currentElement?.classList[0] == "Store")
        {
            (<HTMLElement>subMenu).style.display = "block";
        }
        else
        {
            (<HTMLElement>subMenu).style.display = "none";
        }
    }
}

function removeAlreadyCurrent(currentItem: HTMLElement)
{
    let parentElementTobeCleared: HTMLElement | null = null;
    let currentNavItem: HTMLElement | null = null;
    let temp: HTMLElement | null = currentItem;
    while(temp)
    {
        if(temp?.tagName == "NAV-ITEM")
        {
            parentElementTobeCleared = temp.parentElement;
            currentNavItem = temp;
            break;
        }
        temp = <HTMLElement> temp.parentElement;
    }
    
    if(parentElementTobeCleared)
    {
        let alreadyCurrent = parentElementTobeCleared?.querySelectorAll(".current");
        
        alreadyCurrent.forEach((current)=>{
            current.classList.remove("current");
        })
        
        return currentNavItem;
    }
    else{
        console.log("something terribly went wrong");
        return null;
    }
}

function subNavInit(subNavItem: HTMLElement)
{
    // console.log("SubNavInit", subNavItem);
    
    let parentSubNav: HTMLElement | null = subNavItem.parentElement;
    if(parentSubNav)
    {
        let connectedNavs = parentSubNav.querySelectorAll(".connected");
        for(let i =0; i<connectedNavs.length; i++)
        {
            setTimeout(() =>{
                connection?.classList.add("connected");
            } ,250)
            connectedNavs[i].classList.remove("connected");
        }
    }

    let navItems: HTMLElement[] = Array.from(<NodeListOf<HTMLElement>>parentSubNav?.querySelectorAll("NAV-ITEM"));
    let connections: HTMLElement[] = Array.from(<NodeListOf<HTMLElement>>parentSubNav?.querySelectorAll(".connection"));
    let connection: HTMLElement | null = connections[navItems.indexOf(subNavItem)];
    
    if(connection)
    {
        //timing the change, have to make it a bit more smoother than this 
        setTimeout(() =>{
            connection?.classList.add("connected");
        } ,250)
        
    }
}