document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("action-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Button clicked!");
    });
  }

  // Capacitor native Android back-button handling
  if (window.Capacitor?.Plugins?.App) {
    window.Capacitor.Plugins.App.addListener("backButton", () => {
      window.Capacitor.Plugins.App.exitApp();
    });
  }
});
