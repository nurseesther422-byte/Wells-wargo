// ============================================
// Wells Fargo Credit Connect - Dashboard Logic
// (Shared nav/auth logic lives in nav.js)
// ============================================

(function () {
  "use strict";

  // Open new account card interaction
  const openAccountCard = document.querySelector(".open-account-card");
  if (openAccountCard) {
    openAccountCard.addEventListener("click", function () {
      alert("Open new account flow coming soon.");
    });
    openAccountCard.addEventListener("keypress", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        openAccountCard.click();
      }
    });
  }

  // ============================================
  // Transaction detail modal
  // ============================================

  // Data keyed by data-txn attribute on each .txn-row
  const transactions = {
    txn1: {
      merchant: "Whole Foods Market",
      amount: "-$64.28",
      positive: false,
      status: "Successful",
      date: "Jul 5, 2026",
      account: "Everyday Checking ...0987",
      id: "WF-8823914",
      category: "Groceries",
      icon: '<path fill="currentColor" d="M7 5h10l4 6-9 10L2 11z"/>'
    },
    txn2: {
      merchant: "Wire to Marcus T.",
      amount: "$3,000,000.00",
      positive: false,
      status: "Pending",
      date: "Jul 7, 2026",
      account: "Everyday Checking ...0987",
      id: "WF-8823811",
      category: "Person-to-person transfer",
      icon: '<path fill="currentColor" d="M9.01 14H2v2h7.01v3L13 15l-3.99-4zm5.98-1v-3H22V8h-7.01V5L11 9z"/>'
    },
    txn3: {
      merchant: "Mobile check deposit",
      amount: "+$5,000,000.00",
      positive: true,
      status: "Successful",
      date: "Jul 2, 2026",
      account: "Way2Save ...3478",
      id: "WF-8822190",
      category: "Deposit",
      icon: '<path fill="currentColor" d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m1 2v10h14V7z"/>'
    },
    txn4: {
      merchant: "Wire to Acme Corp. \u2013 PG&E",
      amount: "-$142,200.30",
      positive: false,
      status: "Successful",
      date: "Jul 1, 2026",
      account: "Everyday Checking ...0987",
      id: "WF-8821004",
      category: "Person-to-person transfer",
      icon: '<path fill="currentColor" d="M4 4h16v2H4zm2 4h12v2H6zm-2 4h16v2H4zm2 4h8v2H6z"/>'
    },
    txn5: {
      merchant: "Direct deposit \u2013 Payroll",
      amount: "+$2,300,150.00",
      positive: true,
      status: "Successful",
      date: "Jun 28, 2026",
      account: "Everyday Checking ...0987",
      id: "WF-8819432",
      category: "Payroll",
      icon: '<path fill="currentColor" d="M12 2 4 6v2h16V6zM4 10h2v7H4zm4 0h2v7H8zm4 0h2v7h-2zm4 0h2v7h-2zM3 19h18v2H3z"/>'
    },
    txn6: {
      merchant: "Amazon.com",
      amount: "-$38.99",
      positive: false,
      status: "Failed",
      date: "Jun 27, 2026",
      account: "Everyday Checking ...0987",
      id: "WF-8818765",
      category: "Shopping",
      icon: '<path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 8V6h16v2zm0 4h16v6H4z"/>'
    }
  };

  const modalOverlay = document.getElementById("modalOverlay");
  const modalIcon = document.getElementById("modalIcon");
  const modalAmount = document.getElementById("modalAmount");
  const modalMerchant = document.getElementById("modalMerchant");
  const modalStatusPill = document.getElementById("modalStatusPill");
  const modalStatusText = document.getElementById("modalStatusText");
  const modalDate = document.getElementById("modalDate");
  const modalAccount = document.getElementById("modalAccount");
  const modalTxnId = document.getElementById("modalTxnId");
  const modalCategory = document.getElementById("modalCategory");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalDoneBtn = document.getElementById("modalDoneBtn");
  const txnRows = document.querySelectorAll(".txn-row");

  function statusPillClass(status) {
    if (status === "Pending") return "status-pending";
    if (status === "Failed") return "status-failed";
    return "status-successful";
  }

  function openModal(txnKey) {
    const txn = transactions[txnKey];
    if (!txn || !modalOverlay) return;

    modalIcon.innerHTML =
      '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">' + txn.icon + "</svg>";
    modalAmount.textContent = txn.amount;
    modalAmount.style.color = txn.positive ? "#1a7a3c" : "#1a1a1a";
    modalMerchant.textContent = txn.merchant;
    modalDate.textContent = txn.date;
    modalAccount.textContent = txn.account;
    modalTxnId.textContent = txn.id;
    modalCategory.textContent = txn.category;
    modalStatusText.textContent = txn.status;

    modalStatusPill.textContent = txn.status;
    modalStatusPill.className = "status-pill " + statusPillClass(txn.status);

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  txnRows.forEach(function (row) {
    row.addEventListener("click", function () {
      const txnKey = row.getAttribute("data-txn");
      openModal(txnKey);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener("click", closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (event) {
      if (event.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modalOverlay && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });
})();


function getTimeOfDay() {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Afternoon";
  } else {
    return "Evening";
  }
}


document.getElementById("date").innerHTML = getTimeOfDay()
// Usage
console.log(getTimeOfDay()); // Returns: "Morning", "Afternoon", or "Evening"
