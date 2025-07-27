const catsBtn = document.getElementById("cats");
const homeBtn = document.getElementById("home");
const interestsBtn = document.getElementById("interests");

catsBtn.addEventListener("click", function() {
    window.location.href = "/templates/cats.html";
});

homeBtn.addEventListener("click", function() {
    window.location.href = "/index.html";
});

interestsBtn.addEventListener("click", function() {
    window.location.href = "/templates/interests.html";
});

