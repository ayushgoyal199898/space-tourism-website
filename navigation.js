const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if(visibility === "false") {
      nav.setAttribute("data-visible", "true");
      navToggle.style.backgroundImage = "url(./assets/shared/icon-close.svg)";
  } else {
    nav.setAttribute("data-visible", "false");
      navToggle.style.backgroundImage = "url(./assets/shared/icon-hamburger.svg)";
  }
});
