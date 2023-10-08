const backendUrl = `http://localhost:3000`;
// Ambil data formulir dari elemen HTML, misalnya:
const nama_pasien = document.getElementById("nama_pasien").value;
const email_pasien = document.getElementById("email_pasien").value;
const gender = document.getElementById("gender").value;
const nomor_ponsel = document.getElementById("nomor_ponsel").value;
const alamat = document.getElementById("alamat").value;

// Buat objek data untuk mengirim data formulir
const data = {
  nama_pasien,
  email_pasien,
  gender,
  nomor_ponsel,
  alamat,
};

// Fetch POST untuk mengirim perubahan profil
fetch(`${backendUrl}/edit_profile`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (response.ok) {
      // Perubahan profil berhasil, lakukan tindakan yang sesuai di sini
      // Sebagai contoh, Anda bisa me-redirect ke halaman profil atau melakukan tindakan lain sesuai kebutuhan.
      window.location.href = "/profile"; // Ganti dengan URL tujuan setelah perubahan profil berhasil.
    } else {
      // Gagal mengirim perubahan profil, Anda bisa menampilkan pesan kesalahan atau melakukan tindakan lain sesuai kebutuhan.
      console.error("Gagal mengirim perubahan profil.");
    }
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
