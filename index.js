const toogle = document.getElementById("toogle");
console.log(toogle);

const navbar = document.getElementById("navbar");
console.log(navbar);
toogle.addEventListener("click", function() {
    navbar.classList.toggle("navabr-mobile");
});