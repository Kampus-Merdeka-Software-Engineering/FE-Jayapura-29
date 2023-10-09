document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email_pasien = loginForm.elements.email_pasien.value;
    const password = loginForm.elements.password.value;

    try {
      const response = await fetch(
        "https://be-jayapura-29-test.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_pasien, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Successful login
        alert(data.message); // You can replace this with your desired behavior
        // window.location.href = "/index.html"; // Redirect to the desired page after login
      } else {
        // Login failed
        alert(data.error); // You can display an error message to the user
      }
    } catch (error) {
      // console.error("Error:", error);
      // Handle other errors, e.g., network issues
      alert("An error occurred. Please try again later.");
    }
  });
});
