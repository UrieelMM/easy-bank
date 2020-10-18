const btnHamburgerOpen = document.getElementById("btnMenuOpen");
const menu = document.getElementById("menuId");
const btnHamburgerClose = document.getElementById("btnMenuClose");
const links = document.querySelectorAll(".nav-menu > a");
btnHamburgerOpen.addEventListener("click", toggleMenuOpen);
btnHamburgerClose.addEventListener("click", toggleMenuClose);
function toggleMenuOpen() {
  menu.classList.toggle("isActive");
  btnHamburgerOpen.classList.add("iconActive");
  btnHamburgerClose.classList.remove("iconActive");
}
function toggleMenuClose() {
  menu.classList.toggle("isActive");
  btnHamburgerOpen.classList.remove("iconActive");
  btnHamburgerClose.classList.add("iconActive");
}

links.forEach((link) =>
  link.addEventListener("click", function () {
    menu.classList.toggle("isActive");
    btnHamburgerOpen.classList.remove("iconActive");
    btnHamburgerClose.classList.add("iconActive");
  })
);
