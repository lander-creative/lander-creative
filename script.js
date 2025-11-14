const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");
const waLink = "https://wa.me/6282394263103";

openMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
    navbar.classList.remove("backdrop-blur");
    document.body.classList.add("max-md:overflow-hidden");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
    navbar.classList.add("backdrop-blur");
    document.body.classList.remove("max-md:overflow-hidden");
});

const mobileLinks = mobileMenu.querySelectorAll('a[href^="#"]');

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("-translate-x-full");
        navbar.classList.add("backdrop-blur");
        document.body.classList.remove("max-md:overflow-hidden");
    });
});