// window.onload = function() {
//     console.log("show document loaded");
// }

const sketch = document.querySelector("#sketch");
sketch.addEventListener('click', (e => {
    e.preventDefault();

    console.log("sketch clicked");

    document.getElementsByClassName('sketch').style.display = 'block';
}))