
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log("atual:", currentScrollPos)
    console.log("anterior:", prevScrollPos)
    if (prevScrollPos < currentScrollPos || currentScrollPos < '5' || (prevScrollPos/3) > (currentScrollPos/2)) {
        document.getElementById("navbar").style.bottom = "0";
    } else {
        document.getElementById("navbar").style.bottom = "-4em";
    }
    prevScrollPos = currentScrollPos;
}


var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
