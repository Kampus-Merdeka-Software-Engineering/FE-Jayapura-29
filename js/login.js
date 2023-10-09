// login.js
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_pasien: email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login, e.g., redirect to a dashboard page.
        alert(data.message);
        window.location = "/dashboard"; // Replace with your dashboard URL.
      } else {
        const errorData = await response.json();
        // Handle login failure, e.g., show an error message.
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  });
});
