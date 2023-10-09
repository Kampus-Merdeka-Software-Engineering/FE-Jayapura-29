// document.addEventListener("DOMContentLoaded", function () {
//   const menuBtn = document.getElementById("menu-btn");
//   const navbar = document.querySelector(".navbar");

//   if (menuBtn && navbar) {
//     // Add a click event listener to the menu button
//     menuBtn.addEventListener("click", function () {
//       navbar.classList.toggle("active");
//     });
//   }
// });

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "header") {
//     x.className += " responsive";
//   } else {
//     x.className = "header";
//   }
// }
// frontend.js

// frontend.js

document.addEventListener("DOMContentLoaded", () => {
  // Get a reference to the "Login" button in your navigation bar
  const loginButton = document.querySelector(".login");

  // Add a click event listener to the "Login" button
  loginButton.addEventListener("click", () => {
    // Navigate to the login page
    window.location.href = "/login.html"; // Adjust the path as needed
  });
});
