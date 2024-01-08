document.addEventListener("DOMContentLoaded",nav_vert_init)
function nav_vert_init()
{
    var nav_vert: Element|null = document.querySelector("nav-vert");
    if(nav_vert == null)
    {
        console.log("no nav-vert :(");
        return;
    }
    else
    {
        nav_vert.addEventListener("load", nav_vert_init);
    }
    
    let nav_items: NodeListOf<Element> = nav_vert.querySelectorAll("nav-item");
    for(let i=0; i<nav_items.length; i++)
    {
        let nav_item:Element =  nav_items[i];
        nav_item.addEventListener("click", ()=>{
            let alreadyCurrent = nav_vert?.querySelectorAll(".current");
            alreadyCurrent?.forEach((current)=>{
                current.classList.remove("current");
            });
            nav_item.classList.add("current");
        });
    }
}