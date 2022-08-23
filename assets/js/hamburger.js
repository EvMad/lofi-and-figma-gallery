// document.querySelector('#ham').addEventListener("Click", function() {
//     // e.preventDefault();
//     console.log("Hamburger clicked");
// });

// window.onload = function() {
//     console.log("document loaded");
// }

const hamburger = document.querySelector("#ham");
hamburger.addEventListener('click', (e) => {

    e.preventDefault();

    console.log("hamburger clicked");

    let projects = ["Analog", "Digital", "Case Studies"];

    let menu = document.createElement('li');

        document.querySelector('#side').appendChild(menu);

      //populate each <li> with string from projects array

      

    


});



