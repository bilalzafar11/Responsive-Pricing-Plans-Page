// 🌐 Toggle Pricing Plan (Monthly ↔ Yearly)
const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".plan-price");

toggle.addEventListener("change", () => {
  prices.forEach(price => {
    const newPrice = toggle.checked
      ? price.getAttribute("data-yearly")
      : price.getAttribute("data-monthly");
    price.textContent = newPrice;
  });
});

// ⭐ Select Plan Card Highlight
const planCards = document.querySelectorAll(".pricing-card");

planCards.forEach(card => {
  card.addEventListener("click", () => {
    planCards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
  });
});

// 📦 Modal Popup on Plan Selection
const chooseBtns = document.querySelectorAll(".plan-btn");
const modal = document.getElementById("planModal");
const modalHeading = document.getElementById("modalPlanName");
const closeBtn = document.getElementById("closeModal");

chooseBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedPlan = btn.closest(".pricing-card")?.querySelector(".plan-title")?.textContent || "Unknown Plan";
    modalHeading.textContent = `Plan Selected: ${selectedPlan}`;
    modal.style.display = "flex";
  });
});

closeBtn?.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// 🔼 Scroll-to-Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
