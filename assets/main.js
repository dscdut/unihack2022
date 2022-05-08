var bar = document.getElementById("open-mnav");
var mobileNav = document.getElementById("nav-details");
let checkNav = 0;
bar.addEventListener("click", () => {
    if (checkNav === 0) {
       mobileNav.style.display = "flex";
       checkNav = 1;
    }
    else {
        mobileNav.style.display = "none"; 
        checkNav = 0;
    }
})

let x = window.matchMedia("(min-width: 900px)");
function reszieScreen(x){
    if(x.matches){
        mobileNav.style.display = "flex";
        checkNav = 1;
    }
    else {
        mobileNav.style.display = "none"; 
        checkNav = 0;
    }
}
reszieScreen(x);
x.addEventListener("change", reszieScreen);