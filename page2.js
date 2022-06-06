const navbar = document.querySelector(".navbar");
const navlinks = document.querySelector(".nav_links");
const icon = document.querySelector(".icon");
const searchbar = document.querySelector(".searchbar");

navbar.addEventListener("click", () => {
    navlinks.classList.toggle('show');
});

icon.addEventListener("click", () => {
    searchbar.classList.toggle('getlong');
});
