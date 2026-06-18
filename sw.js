// screens/developer.js — Reserved debug screen (state viewer, reset save, test tools).
// Not wired up yet — hook a hidden gesture/tap-count in router.js to reach it later.

import { appState } from "../state.js";
import { resetState } from "../storage.js";

export function initDeveloperScreen() {
  // Example future wiring:
  // document.getElementById("devReset").addEventListener("click", () => resetState(appState));
}
