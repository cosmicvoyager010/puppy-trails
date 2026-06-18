// world.js — controls atmosphere/mood, reflected via body[data-mood] in css/themes.css.

import { appState } from "../state.js";

const MOODS = ["CALM", "BRIGHT", "QUIET", "MYSTERIOUS"];

export function setWorldMood(mood) {
  appState.world.mood = mood;
  document.body.setAttribute("data-mood", mood);
}

export function cycleWorldMood() {
  const next = MOODS[Math.floor(Math.random() * MOODS.length)];
  setWorldMood(next);
}

export function resetWorldMood() {
  setWorldMood("CALM");
}
