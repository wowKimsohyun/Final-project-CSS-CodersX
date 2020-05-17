/*-------------------------------------------------------------------------------*/
/*---------------------------Handle onClick Shop sub-menu------------------------*/
/*-------------------------------------------------------------------------------*/


document.addEventListener("DOMContentLoaded", function () {
    
    // Click drop down
    var button = document.getElementById('tle'),
        drop = document.getElementById('drop-down');
        console.log(button);
        button.onclick = function () {
        drop.classList.toggle('show');
    }

    // Close drop down
    window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("menu-layer2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
}, false);



/*-------------------------------------------------------------------------------*/
/*---------------------------Cart event open/close-------------------------------*/
/*-------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {

    var black = document.querySelector('.black-screen'),
        cart = document.querySelector('.content-cart'),
        button = document.querySelector('.cart'),
        overflow = document.querySelector('body'),
        close = document.querySelector('.close');

    // Open
    button.onclick = function () {
        black.classList.add('show');
        cart.classList.add('move-to-left');
        overflow.classList.add('remove-scroll');
    }

    // Close
    close.onclick = function () {
        black.classList.remove('show');
        cart.classList.remove('move-to-left');
        overflow.classList.remove('remove-scroll');
    }
}, false);