let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");
// };

// get the navbar
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((navbarHTML) => {
      document.getElementById("navbar-container").innerHTML = navbarHTML;
    });
});

// get the footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((navbarHTML) => {
      document.getElementById("footer-container").innerHTML = navbarHTML;
    });
});
