// app.js — App Shell. Loads saved state, starts the router, and runs the main game loop.

import { appState } from "./state.js";
import { loadState, saveState } from "./storage.js";
import { initRouter } from "./router.js";
import { walkTick } from "./modules/walk.js";
import { setWorldMood } from "./modules/world.js";
import { initHomeScreen, renderHome } from "./screens/home.js";

const TICK_MS = 1000;

window.addEventListener("load", () => {
  loadState(appState);
  setWorldMood(appState.world.mood || "CALM");

  initRouter();
  initHomeScreen();
  renderHome();

  // Single game loop tick — this is the heartbeat of the whole app.
  setInterval(() => {
    walkTick();
    renderHome();
    saveState(appState);
  }, TICK_MS);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch((err) => {
      console.warn("Service worker registration failed:", err);
    });
  }
});
