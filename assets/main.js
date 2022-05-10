var bar = document.getElementById("open-mnav");
var mobileNav = document.getElementById("nav-details");
let textDiv = document.querySelector(".coming-soon");
const btnAward = document.querySelector(".award__btn");
const btnClose = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
let checkNav = 0;
bar.addEventListener("click", () => {
  if (checkNav === 0) {
    mobileNav.style.display = "flex";
    checkNav = 1;
  } else {
    mobileNav.style.display = "none";
    checkNav = 0;
  }
});

let size = window.matchMedia("(min-width: 900px)");
function reszieScreen(size) {
  if (size.matches) {
    mobileNav.style.display = "flex";
    checkNav = 1;
  } else {
    mobileNav.style.display = "none";
    checkNav = 0;
  }
}
reszieScreen(size);
size.addEventListener("change", reszieScreen);

// Set the date we're counting down to
var countDownDate = new Date("May 24, 2022 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
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

let text = `Coming soon... `;
let i = 0;
(function type() {
  if (i < text.length) {
    textDiv.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, Math.floor(Math.random() * 400) + 50);
    if (i === text.length) {
      textDiv.innerHTML = "";
      i = 0;
    }
  }
})();

togglePopup = () => {
  modal.classList.toggle("active");
  overlay.classList.toggle("active");
};

btnClose.addEventListener("click", togglePopup);
btnAward.addEventListener("click", togglePopup);

window.addEventListener("click", (e) => {
  if (e.target == overlay) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
});
