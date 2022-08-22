hamburger = () => {
    document.querySelector('#ham').addEventListener("Click", function(e) {
        e.preventDefault();
        let menu = document.createElement('ul');
        menu.setAttribute('id', 'menu-list');
        document.querySelector('#side').append(menu);
    })
}