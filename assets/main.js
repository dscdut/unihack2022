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

let size = window.matchMedia("(min-width: 900px)");
function reszieScreen(size){
    if(size.matches){
        mobileNav.style.display = "flex";
        checkNav = 1;
    }
    else {
        mobileNav.style.display = "none"; 
        checkNav = 0;
    }
}
reszieScreen(size);
size.addEventListener("change", reszieScreen);

// Set the date we're counting down to
var countDownDate = new Date("May 30, 2022 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("remain-day").innerHTML = "EXPIRED";
  }
}, 1000);