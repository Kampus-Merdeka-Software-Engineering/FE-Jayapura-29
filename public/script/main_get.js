const backendUrl = `http://localhost:3000`; // Ganti dengan URL backend Anda

// Misalnya, jika Anda ingin mengambil halaman `/index` setelah halaman dimuat
fetch(`${backendUrl}/index`)
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Failed to fetch index");
    }
  })
  .then((html) => {
    // Manipulasi DOM atau tampilkan halaman HTML di dalam elemen yang sesuai
    const container = document.getElementById("content-container");
    container.innerHTML = html;
  })
  .catch((error) => {
    console.error(error);
  });

// Untuk mengambil halaman `/index2` setelah login
fetch(`${backendUrl}/index2`)
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Failed to fetch index2");
    }
  })
  .then((html) => {
    // Manipulasi DOM atau tampilkan halaman HTML di dalam elemen yang sesuai
    const container = document.getElementById("content-container2");
    container.innerHTML = html;
  })
  .catch((error) => {
    console.error(error);
  });
//
// Fetch GET untuk halaman sign up
fetch(`${backendUrl}/signup`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman sign up ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("signup-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

// Fetch GET
fetch(`${backendUrl}/article1`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman sign up ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("article1-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
//
fetch(`${backendUrl}/article2`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman sign up ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("article2-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

fetch(`${backendUrl}/article3`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman sign up ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("article3-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

fetch(`${backendUrl}/article4`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman sign up ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("article4-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

fetch(`${backendUrl}/team`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman sign up ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("team-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

//
fetch(`${backendUrl}/login`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((data) => {
    // Manipulasi data sesuai kebutuhan Anda
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Fetch GET untuk halaman appointment
fetch(`${backendUrl}/appointment`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman appointment ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("appointment-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

//
// Fetch GET untuk halaman pembayaran
fetch(`${backendUrl}/pembayaran`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman pembayaran ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("pembayaran-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

//
// Fetch GET untuk halaman profile
fetch(`${backendUrl}/profile`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman profile ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("profile-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

//
// Fetch GET untuk halaman edit profil
fetch(`${backendUrl}/edit_profile`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((html) => {
    // Memasukkan HTML halaman edit profil ke dalam elemen DOM yang sesuai, misalnya:
    document.getElementById("edit-profile-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

// Check Login Status
// fetch(`${backendUrl}/check-login-status`, {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => {
//     const isLoggedIn = data.isLoggedIn;
//     if (isLoggedIn) {
//       // Pengguna sudah login, lakukan aksi yang sesuai
//       // Contoh: tampilkan navbar setelah login
//       fetch("${backendUrl}/navbar-after-login")
//         .then((response) => response.text())
//         .then((html) => {
//           const navbarContainer2 = document.getElementById("navbar-container");
//           navbarContainer2.innerHTML = html;
//         });
//     } else {
//       // Pengguna belum login, lakukan aksi yang sesuai
//       // Contoh: tampilkan navbar sebelum login
//       fetch(`${backendUrl}/navbar-before-login`)
//         .then((response) => response.text())
//         .then((html) => {
//           const navbarContainer = document.getElementById("navbar-container");
//           navbarContainer.innerHTML = html;
//         });
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });
