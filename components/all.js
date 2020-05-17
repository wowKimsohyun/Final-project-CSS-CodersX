/*-------------------------------------------------------------------------------*/
/*---------------------------Handle onClick Shop sub-menu------------------------*/
/*-------------------------------------------------------------------------------*/

// Click drop down
document.addEventListener("DOMContentLoaded", function () {

    var button = document.getElementById('tle'),
        drop = document.getElementById('drop-down');
    console.log(button);
    button.onclick = function () {
        drop.classList.toggle('show');
    }
}, false);

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