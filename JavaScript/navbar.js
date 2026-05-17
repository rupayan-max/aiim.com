/* ========================================= */
/* NAVBAR FUNCTIONALITY */
/* ========================================= */

const menuBtn = document.getElementById("menuBtn");

const offcanvasMenu = document.getElementById("offcanvasMenu");

const closeBtn = document.getElementById("closeBtn");

const overlay = document.getElementById("overlay");

const dropdownBtn = document.querySelector(".dropdown-btn");

const mobileDropdown = document.querySelector(".mobile-dropdown");

/* ========================================= */
/* OPEN MENU */
/* ========================================= */

menuBtn.addEventListener("click", () => {

  offcanvasMenu.classList.add("active");

  overlay.classList.add("active");

});

/* ========================================= */
/* CLOSE MENU */
/* ========================================= */

closeBtn.addEventListener("click", () => {

  offcanvasMenu.classList.remove("active");

  overlay.classList.remove("active");

});

/* ========================================= */
/* OVERLAY CLOSE */
/* ========================================= */

overlay.addEventListener("click", () => {

  offcanvasMenu.classList.remove("active");

  overlay.classList.remove("active");

});

/* ========================================= */
/* MOBILE DROPDOWN */
/* ========================================= */

dropdownBtn.addEventListener("click", () => {

  mobileDropdown.classList.toggle("active");

});