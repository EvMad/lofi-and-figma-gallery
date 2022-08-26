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


const story = document.querySelector("#story");
sketch.addEventListener('click', (e => {
    e.preventDefault();

    console.log("story clicked");

    var target = document.getElementsByClassName('story');

    if (target.style.display === "none") 
    {
        target.style.display = "block";
    } else {
        target.style.display = "none";
    }

}));

const affinity = document.querySelector("#affinity");
sketch.addEventListener('click', (e => {
    e.preventDefault();

    console.log("affinity clicked");

    var target = document.getElementsByClassName('map');

    if (target.style.display === "none") 
    {
        target.style.display = "block";
    } else {
        target.style.display = "none";
    }

}));