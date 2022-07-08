(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuCloseRef = document.querySelector(".mob-menu__close");
  const mobileMenuRef = document.querySelector(".mob-menu");

  menuBtnRef.addEventListener("click", toggleMenu);
  mobileMenuCloseRef.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-hidden");
  }
})();
