// router.js — decides which .screen is visible. Only "home" exists today;
// future screens (walk/discoveries/settings/developer) plug in here.

export function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.remove("active");
  });
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

export function initRouter() {
  showScreen("home");
}
