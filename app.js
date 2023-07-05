const h1 = document.querySelector("h1");

function clickTitle() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", clickTitle);