// Navbar
const navbarNav = document.querySelector(".navbar-nav");

// Ketika mengklik menu
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik diluar sidebar
const menu = document.querySelector("#ham-menu");

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Button
const button = document.getElementById("btn");
const tabel1 = document.getElementById("tabel1");

const button2 = document.getElementById("btn2");
const tabel2 = document.getElementById("tabel2");

const button3 = document.getElementById("btn3");
const tabel3 = document.getElementById("tabel3");

button.addEventListener("click", () => {
  if (tabel1.style.display == "none") {
    tabel1.style.display = "block";
  } else {
    tabel1.style.display = "none";
  }
});

button2.addEventListener("click", () => {
  if (tabel2.style.display == "none") {
    tabel2.style.display = "block";
  } else {
    tabel2.style.display = "none";
  }
});

button3.addEventListener("click", () => {
  if (tabel3.style.display == "none") {
    tabel3.style.display = "block";
  } else {
    tabel3.style.display = "none";
  }
});
