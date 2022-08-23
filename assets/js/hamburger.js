
// window.onload = function() {
//     console.log("document loaded");
// }

const hamburger = document.querySelector("#ham");
hamburger.addEventListener('click', (e) => {

    e.preventDefault();

    console.log("hamburger clicked");

    let projects = ["Analog", "Digital", "Case Studies"];

    for (i = 0; i < projects.length; i++) {
        
        var menu = document.createElement('li');
        menu.innerText = projects[i];
        document.querySelector('#side').appendChild(menu);
    }

    

});



