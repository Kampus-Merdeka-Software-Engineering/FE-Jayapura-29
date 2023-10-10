document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector("form");

  signupForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(signupForm);

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Successful registration message
        window.location.href = "/login.html"; // Redirect to the login page after registration
      } else {
        const data = await response.json();
        alert(data.error); // Error message from the server
        // Handle registration failure
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
      // Handle other errors, e.g., network issues
    }
  });
});
