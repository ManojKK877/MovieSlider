
/* auto slider*/
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter = counter + 1;
    if (counter > 3) {
        counter = 1;
    }
}, 3000);

/*ImageShow*/
var a;
function showImage() {
    if (a == 1) {
        document.getElementById("image1").style.display = "inline";
        document.getElementById("image2").style.display = "inline";
        document.getElementById("image3").style.display = "inline";
        document.getElementById("image4").style.display = "inline";
        document.getElementById("image5").style.display = "inline";
        return a = 0;
    }
    else {
        document.getElementById("image1").style.display = "none";
        document.getElementById("image2").style.display = "none";
        document.getElementById("image3").style.display = "none";
        document.getElementById("image4").style.display = "none";
        document.getElementById("image5").style.display = "none";
        return a = 1;

    }
}
/*Navbar*/
const toggleNav = document.getElementById('toggleNav');
const arrowMenu = document.getElementById('arrowMenu');
arrowMenu.addEventListener('click', e => {
    toggleNav.classList.toggle('activeMenu');
})


