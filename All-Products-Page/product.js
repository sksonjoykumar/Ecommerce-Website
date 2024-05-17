// Product Page JS Script
const mainImg = document.getElementById("main-img");
const allImg = document.querySelectorAll("#img");

allImg.forEach(function (evt) {
  evt.addEventListener("click", function () {
    mainImg.src = evt.src;
  });
});
