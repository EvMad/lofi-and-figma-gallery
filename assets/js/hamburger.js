hamburger = () => {
    document.querySelector('#ham').addEventListener("Click", function(e) {
        e.preventDefault();
        let menu = document.createElement('ul');
        menu.setAttribute('id', 'menu-list');
        document.querySelector('#side').append(menu);

        populate = () => {

            let projects = ["Analog", "Digital", "Case Studies"];

            // for (let element of projects) {
            //     projects[element] = projects[element] + 1;
            //     if (projects.textContent = "") {
            //         let projectName = projects.createElement('li');
            //     }
                
            // }

            for (var i = 0; i < projects.length; i++) {
                menu.querySelectorAll("li").innerHTML = [i];
              }


            // menu.appendChild(projectName);
        }

        populate();
    })
};

hamburger();