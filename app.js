const h1 = document.querySelector("h1");

function clickTitle() {
    if(h1.style.color === "blue"){
        h1.style.color = "black";
    }else{
        h1.style.color = "blue";
    }
}

function mouseEnter() {
    h1.innerText = "mouse is here!"
}

function mouseLeave() {
    h1.innerText = "mouse is gone!"
}

function windowResize() {
    document.body.style.backgroundColor = "tomato";
}

function windowCopy() {
    alert("copier!");
}

function windowOffline() {
    alert("WiFi offline!");
}

function windowOnline() {
    alert("WiFi connected");
}

h1.addEventListener("click", clickTitle);
h1.addEventListener("mouseenter", mouseEnter);
h1.addEventListener("mouseleave", mouseLeave);

window.addEventListener("resize", windowResize);
window.addEventListener("copy", windowCopy);
window.addEventListener("offline", windowOffline);
window.addEventListener("online", windowOnline);