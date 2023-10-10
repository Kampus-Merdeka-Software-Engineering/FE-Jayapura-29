document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar2.html")
    .then((response) => response.text())
    .then((navbarHTML) => {
      document.getElementById("navbar-container").innerHTML = navbarHTML;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((navbarHTML) => {
      document.getElementById("footer-container").innerHTML = navbarHTML;
    });
});
