const backendUrl = `http://localhost:3000`;
// Ambil data formulir dari elemen HTML, misalnya:
const id_pasien = document.getElementById("id_pasien").value;
const nama_pasien = document.getElementById("nama_pasien").value;
const email_pasien = document.getElementById("email_pasien").value;
const jumlah_biaya = document.getElementById("jumlah_biaya").value;
const metode_pembayaran = document.getElementById("metode_pembayaran").value;

// Buat objek data untuk mengirim data formulir
const data = {
  id_pasien,
  nama_pasien,
  email_pasien,
  jumlah_biaya,
  metode_pembayaran,
};

// Fetch POST untuk membuat pembayaran
fetch(`${backendUrl}/pembayaran`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (response.ok) {
      // Pembayaran berhasil, lakukan tindakan yang sesuai di sini
      // Sebagai contoh, Anda bisa me-redirect ke halaman lain atau melakukan tindakan lain sesuai kebutuhan.
      window.location.href = "/index2"; // Ganti dengan URL tujuan setelah pembayaran berhasil.
    } else {
      // Gagal membuat pembayaran, Anda bisa menampilkan pesan kesalahan atau melakukan tindakan lain sesuai kebutuhan.
      console.error("Gagal membuat pembayaran.");
    }
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
