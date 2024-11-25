const currentLocation = location.href;
const menuItem = document.querySelectorAll(".nav-link");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].classList.add("active");
  }
}

window.addEventListener("scroll", function () {
  var navBar = this.document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});
