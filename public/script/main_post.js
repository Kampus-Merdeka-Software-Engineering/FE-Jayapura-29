const backendUrl = `http://localhost:3000`;

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect atau tindakan lain setelah berhasil login
        window.location.href = "/index2";
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan dalam proses login");
    }
  });
});

//
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(signupForm);

    try {
      const response = await fetch(`${backendUrl}/signup`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const successMessage = await response.text();
        alert(successMessage);
        window.location.href = "/login"; // Redirect ke halaman login setelah pendaftaran berhasil
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan dalam proses pendaftaran");
    }
  });
});

//
// Ambil data formulir dari elemen HTML, misalnya:
const nama_pasien = document.getElementById("nama_pasien").value;
const nama_psikolog = document.getElementById("nama_psikolog").value;
const tanggal = document.getElementById("tanggal").value;
const waktu = document.getElementById("waktu").value;
const keluhan = document.getElementById("keluhan").value;

// Buat objek data untuk mengirim data formulir
const data = {
  nama_pasien,
  nama_psikolog,
  tanggal,
  waktu,
  keluhan,
};

// Fetch POST untuk membuat appointment
fetch(`${backendUrl}/appointment`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (response.ok) {
      // Appointment berhasil dibuat, lakukan tindakan yang sesuai di sini
      // Sebagai contoh, Anda bisa me-redirect ke halaman lain atau melakukan tindakan lain sesuai kebutuhan.
      window.location.href = "/index2"; // Ganti dengan URL tujuan setelah appointment berhasil dibuat.
    } else {
      // Gagal membuat appointment, Anda bisa menampilkan pesan kesalahan atau melakukan tindakan lain sesuai kebutuhan.
      console.error("Gagal membuat appointment.");
    }
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

//
