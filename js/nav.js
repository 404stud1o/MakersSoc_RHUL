/* =========================================================
   Shared nav bar behaviour for all members-only pages.
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  const logoutLink = document.getElementById("logout-link");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.removeItem("rhsu_authenticated");
      window.location.href = "index.html";
    });
  }
});
