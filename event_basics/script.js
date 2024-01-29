// first approach for event handling

/* 
document.querySelector("#owl").onclick = () => {
    alert("owl clicked");
}
*/

// Best way for event handling

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

// document.querySelector("#owl").addEventListener('click', function(e) {
//     console.log(e);
// }, false);

// Event propogation. -> Two context -> 1. Event bubbling 2. Event Capturing

// document.getElementById("images").addEventListener('click', function(e){
//     console.log("clicked inside ul");
// }, false);

// document.getElementById("owl").addEventListener('click', function(e) {
//     console.log("owl clicked");
//     e.stopPropagation();
// }, false);

// document.getElementById("google").addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked...");
// }, false)


// EXERCISE TO REMOVE PHOTO ONCLICK 

document.querySelector("#images").addEventListener("click", (e) => {
    console.log(e.target.tagName);
    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove();
    }
}, false);

