
window.onload = function() {

    const menuBtn = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".overlay");

    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("is-active");
        mobileMenu.classList.toggle("is-active");
        overlay.classList.toggle("is-active");
    });
}