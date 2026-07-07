// ============================================
// Wells Fargo Credit Connect - Shared Nav Logic
// Used on: dashboard, deposit, pay-transfer, explore, menu
// ============================================

(function () {
  "use strict";

  // Guard: redirect to login if not authenticated
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
    return;
  }

  const signOffBtn = document.getElementById("signOffBtn");
  if (signOffBtn) {
    signOffBtn.addEventListener("click", function () {
      localStorage.removeItem("loggedIn");
      window.location.href = "index.html";
    });
  }

  // Notification button interaction
  const notificationBtn = document.querySelector(".notification-btn");
  if (notificationBtn) {
    notificationBtn.addEventListener("click", function () {
      alert("You have 9+ new notifications.");
    });
  }
})();
