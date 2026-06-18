// puppy.js — puppy behavior engine. Pure state changes; rendering happens in screens/home.js.

import { appState } from "../state.js";

const TIRED_THRESHOLD = 25;

export function puppyTick() {
  if (appState.walk.active) {
    appState.puppy.energy = Math.max(0, appState.puppy.energy - 2);
    appState.puppy.bond = Math.min(100, appState.puppy.bond + 1);
  } else {
    appState.puppy.energy = Math.min(100, appState.puppy.energy + 1);
  }

  appState.puppy.mood = appState.puppy.energy <= TIRED_THRESHOLD ? "tired" : "happy";
}

export function isExhausted() {
  return appState.puppy.energy <= 0;
}
