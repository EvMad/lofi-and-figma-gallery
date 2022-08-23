// document.querySelector('#ham').addEventListener("Click", function() {
//     // e.preventDefault();
//     console.log("Hamburger clicked");
// });

window.onload = function() {
    console.log("document loaded");
}

const hamburger = document.querySelector("#ham");
hamburger.addEventListener('click', function() {

    let projects = ["Analog", "Digital", "Case Studies"];

    let menu = document.createElement('li');

     for (var i = 0; i < projects.length; i++) {
                menu.querySelectorAll("li").innerHTML = [i];
              };

    


});




// hamburger = () => {
//     document.querySelector('#ham').addEventListener("Click", function(e) {
//         e.preventDefault();
//         console.log("Hamburger clicked");
        // let menu = document.createElement('ul');
        // menu.setAttribute('id', 'menu-list');
        // document.querySelector('#side').append(menu);

        // populate = () => {

        

        //     for (let element of projects) {
        //         projects[element] = projects[element] + 1;
        //         if (projects.textContent = "") {
        //             let projectName = projects.createElement('li');
        //         }
                
        //     }

       


        //     menu.appendChild(projectName);
        // }

        // populate();
//     })
// };

