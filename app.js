const menu = document.querySelector(".menu");
const dropDown = document.querySelectorAll(".dropdown");

menu.addEventListener("click", () => {
    menu.parentElement.classList.toggle("open");
    document.body.classList.toggle("nav-open");
});

dropDown.forEach(item) {
    item.addEventListener("click", () => {
        item.parentElement.classList.toggle("link-open");
    });
});