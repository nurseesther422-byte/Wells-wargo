// ============================================
// Wells Fargo - Login Logic
// ============================================

(function () {
  "use strict";

  // Dummy hardcoded credentials
  const VALID_USERNAME = "sophia";
  const VALID_PASSWORD = "sophia123456";

  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("errorMessage");
  const signOnBtn = document.getElementById("signOnBtn");
  const showPasswordBtn = document.getElementById("showPasswordBtn");

  // If already logged in, skip straight to dashboard
  if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "dashboard.html";
    return;
  }

  // ===== Enable Sign On only when both fields have values =====
  function updateSignOnState() {
    const hasUsername = usernameInput.value.trim().length > 0;
    const hasPassword = passwordInput.value.length > 0;
    const isReady = hasUsername && hasPassword;

    signOnBtn.disabled = !isReady;
    signOnBtn.classList.toggle("enabled", isReady);
  }

  usernameInput.addEventListener("input", updateSignOnState);
  passwordInput.addEventListener("input", updateSignOnState);

  // ===== Password show/hide toggle =====
  showPasswordBtn.addEventListener("click", function () {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    showPasswordBtn.textContent = isPassword ? "Hide" : "Show";
  });

  // ===== Form submit / dummy auth =====
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (signOnBtn.disabled) return;

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      errorMessage.textContent = "";
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      errorMessage.textContent = "Invalid username or password";
      passwordInput.value = "";
      updateSignOnState();
      passwordInput.focus();
    }
  });
})();
