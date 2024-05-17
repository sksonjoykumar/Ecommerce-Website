// Navbar JS Script
const navbar = document.getElementById("navContent");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    navbar.classList.add("active");
    menuBtn.style.display = "none";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    menuBtn.style.display = "block";
    navbar.classList.remove("active");
  });
}

