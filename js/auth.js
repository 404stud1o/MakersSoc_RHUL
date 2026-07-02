/* =========================================================
   Password gate logic (index.html)

   IMPORTANT — how this works and its limits:
   This is a client-side (front-end only) lock. The correct
   password is never stored in plain text here — only its
   SHA-256 hash — so a casual look at the page source won't
   reveal it. However, because everything runs in the
   visitor's browser, a technically determined person could
   still find ways around it (e.g. reading browser dev tools).
   This is fine for keeping resources tidy and away from
   search engines/casual sharing, but it is NOT bank-level
   security. If you ever need to protect genuinely sensitive
   material, ask about a server-side (PHP/login) version instead.

   HOW TO CHANGE THE PASSWORD:
   1. Pick a new password.
   2. Generate its SHA-256 hash — e.g. open a terminal and run:
        python3 -c "import hashlib;print(hashlib.sha256('yourNewPassword'.encode()).hexdigest())"
      or use any trustworthy "SHA-256 generator" website.
   3. Paste the resulting hash below as PASSWORD_HASH.
   ========================================================= */

const PASSWORD_HASH = "9a21c42bdeb194f335299f4f7b4591ca4844b80ba75da4d11a5ad10f72e4facd"; // default password: makers2026

async function sha256(message) {
  const data = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-password");
  const error = document.getElementById("gate-error");

  // If already unlocked this session, skip straight through.
  if (sessionStorage.getItem("rhsu_authenticated") === "true") {
    window.location.href = "home.html";
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const enteredHash = await sha256(input.value);

    if (enteredHash === PASSWORD_HASH) {
      sessionStorage.setItem("rhsu_authenticated", "true");
      window.location.href = "home.html";
    } else {
      error.textContent = "Incorrect password. Please try again.";
      input.value = "";
      input.focus();
    }
  });
});
