function showTime() {
  // Mendapatkan waktu saat ini dalam UTC
  const now = new Date();

  // Mengonversi waktu ke zona waktu Bangkok (UTC+7)
  const bangkokTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Bangkok" }),
  );

  // Menampilkan waktu di elemen HTML
  document.getElementById("currentTime").innerHTML =
    bangkokTime.toLocaleString();
}

showTime();
setInterval(function () {
  showTime();
}, 1000);

// Ambil elemen modal dan komponennya
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");
const closeModalBtn = document.querySelector(".close-modal");

// Ambil semua gambar proyek yang memiliki class 'project-img'
const projectImages = document.querySelectorAll(".project-img");

// Daftarkan event klik untuk setiap gambar proyek
projectImages.forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    // Mengambil teks dari tag h3 terdekat di dalam card sebagai caption
    captionText.innerHTML = this.parentElement.querySelector("h3").innerText;
  });
});

// Fungsi untuk menutup modal saat tombol (X) diklik
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fungsi untuk menutup modal ketika user klik area luar gambar (latar belakang hitam)
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



const backToTopBtn = document.getElementById("backToTop");

// Pantau pergerakan scroll halaman browser
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Munculkan tombol jika user scroll lebih dari 300px ke bawah
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// Kembalikan ke halaman paling atas dengan transisi halus (smooth) saat diklik
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
