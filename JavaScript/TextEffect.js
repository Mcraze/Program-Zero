const text = document.querySelector(".text");
var change = document.getElementById("change");

window.addEventListener("scroll", () => {
    let offset = text.offsetTop;
    let windowHeight = window.innerHeight;
    if (window.pageYOffset > offset - windowHeight + 250) {
        text.classList.add("glow");
        change.textContent = "ITS";
    }
    if (window.pageYOffset < offset - windowHeight) {
        text.classList.remove("glow");
        change.textContent = "IM";
    }
    if (window.pageYOffset > offset - windowHeight + 1000) {
        text.classList.remove("glow");
        change.textContent = "IM";
    }
});