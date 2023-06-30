const a = document.querySelector("h1");

function clickTitle() {
    if(a.style.color === "blue"){
        a.style.color = "black";
    }else{
        a.style.color = "blue";
    }
}

a.addEventListener("click", clickTitle);