// window.onload = function() {
//     console.log("show document loaded");
// }

const sketch = document.querySelector("#sketch");
sketch.addEventListener('click', (e => {
    e.preventDefault();

    console.log("sketch clicked");

    var target = document.getElementsByClassName('sketch');

    if (target.style.display === "none") 
    {
        target.style.display = "block";
    } else {
        target.style.display = "none";
    }

}));