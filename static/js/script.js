let iconsData = [];
// https://zeronime.netlify.app/
// Fungsi untuk fetch data JSON dan render elemen
async function fetchIconsData() {
  try {
    const response = await fetch('static/data.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    iconsData = await response.json();
    console.log("Data berhasil dimuat:", iconsData);

    const iconsContainer = document.querySelector(".items");

    iconsData.forEach(icon => {
      const anchor = document.createElement("a");
      anchor.href = icon.href;
      anchor.target = "_self";
      anchor.classList.add("item");

      const img = document.createElement("img");
      img.src = icon.imgSrc;
      img.alt = icon.text;

      const span = document.createElement("span");
      span.textContent = icon.text;

      anchor.appendChild(img);
      anchor.appendChild(span);
      iconsContainer.appendChild(anchor);
    });

  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

fetchIconsData(); // Panggil fungsi untuk mulai fetch

document.addEventListener("DOMContentLoaded", function () {
  const profiles = document.querySelectorAll(".profile");
  const footers = document.querySelectorAll("footer");

  profiles.forEach(profile => {
    // Menemukan semua elemen <a> di dalam elemen profile
    const links = profile.querySelectorAll("a");

    // Menambahkan atribut dan gaya pada setiap elemen <a>
    links.forEach(link => {
      link.target = "_self";
      link.rel = "noopener noreferrer";
      link.style.textDecoration = "none";
      link.style.color = "white";
    });
  });

  footers.forEach(footer => {
    footer.textContent = "© ZeronimeYT";
    footer.style.color = "white";
    // Gaya footer supaya nempel bawah tapi gak mepet
    footer.style.position = "fixed";
    footer.style.bottom = "10px";
    footer.style.left = "0";
    footer.style.width = "100%";
    footer.style.textAlign = "center";
    footer.style.padding = "10px 0";
    footer.style.backgroundColor = "transparent";
    footer.style.zIndex = "1000";
  });
});
