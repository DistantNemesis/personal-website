const catsBtn = document.getElementById("cats");
const homeBtn = document.getElementById("home");

catsBtn.addEventListener("click", function() {
    window.location.href = "../templates/cats.html";
});

homeBtn.addEventListener("click", function() {
    window.location.href = "../templates/layout1.html";
});