const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("remove");
  }, 500);
});

