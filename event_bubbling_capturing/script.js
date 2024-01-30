document.querySelector("#grandparent")
.addEventListener("click", (e) => {
    console.log("Grandparent clicked!!");
    e.stopPropagation();
}, true); //capturinng

document.querySelector("#parent")
.addEventListener("click", (e)  => {
    console.log("Parent clicked!!");
}, true); //capturing

document.querySelector("#child")
.addEventListener("click", (e) => {
    console.log("Child clicked!!");
    
}, true); //capturing