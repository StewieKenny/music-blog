/*alert("First Big One!");*/

/* Navbar functionality 

var openSidebar = document.querySelector(".openSidebar");

openSidebar.addEventListener("click", function (){
document.querySelector(".sidebar").style.display="flex";
});

var closeSidebar = document.querySelector(".closeSidebar");
closeSidebar.addEventListener("click", function (){
document.querySelector(".sidebar").style.display="none";
});

/* Navbar and heading functionality */

/*var navButton = document.querySelectorAll(".li-button");

navButton.forEach(x => {
    x.addEventListener("click", (e)=>{
        /*var clicked = e.target.id;
        window.location.assign(clicked + ".html");*/
       /* const action = x.dataset.action;
        window.location.assign(action + ".html");
    })
}); */



/* Slidebar functionality */

document.addEventListener("DOMContentLoaded", () => {

    var openMenu = document.querySelector(".hamburger2");
    var closeMenu = document.querySelector(".hamburger");
    var menu = document.querySelector(".navbar");
    var navBlock = document.querySelector(".navbar-block");

    openMenu.addEventListener("click",()=>{
        navBlock.style.overflowX="visible"
        menu.style.top="0px"
        closeMenu.classList.toggle("open")
        
    });

    closeMenu.addEventListener("click",()=>{
        menu.style.top="-100px"
        navBlock.style.overflowX="hidden"
        
    }); 

    const slider = document.querySelector(".flex-container");
    const leftBtn = document.querySelector(".left-button");
    const rightBtn = document.querySelector(".right-button");

    const scrollAmount = 270;

    leftBtn.addEventListener("click", ()=>{
        slider.scrollBy({left: -scrollAmount, behavior: "smooth"});
    });

    rightBtn.addEventListener("click", () => {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    /*var openMenu = document.querySelector(".logo");
    var closeMenu = document.querySelector(".logo");
    var menu = document.querySelector(".navbar");

    openMenu.addEventListener("click",()=>{
        menu.style.top="0"
    });

    closeMenu.addEventListener("click",()=>{
        menu.style.top="-100px"
        
    });*/

    });