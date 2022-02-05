function darkMode() {
  const body = document.body;
  const nav = document.getElementsByClassName("nav-container");
  const headerLink = document.getElementsByClassName("menu-item-text--center");

  body.classList.toggle("dark-background");
  body.classList.toggle("light-text");
  nav[0].classList.toggle("light-background");
  headerLink[0].classList.toggle("dark-text");
}
