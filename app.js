const a = document.querySelector("h1");

function clickTitle() {
    if(a.style.color === "blue"){
        a.style.color = "black";
    }else{
        a.style.color = "blue";
    }
}

function mouseEnter() {
    a.innerText = "mouse is here!"
}

function mouseLeave() {
    a.innerText = "mouse is gone!"
}

a.addEventListener("click", clickTitle);
a.addEventListener("mouseenter", mouseEnter);
a.addEventListener("mouseleave", mouseLeave);