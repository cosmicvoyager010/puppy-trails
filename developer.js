// walk.js — walk activity engine. Today this is a simulated tick loop;
// this is the layer GPS/Health/Shortcuts integrations would plug into later.

import { appState } from "../state.js";
import { puppyTick, isExhausted } from "./puppy.js";
import { cycleWorldMood, resetWorldMood } from "./world.js";

export function startWalk() {
  if (appState.walk.active) return;
  if (isExhausted()) return; // can't start a walk while exhausted — let the puppy rest first
  appState.walk.active = true;
}

export function stopWalk() {
  appState.walk.active = false;
  resetWorldMood();
}

// Called once per game-loop tick (see js/app.js)
export function walkTick() {
  if (!appState.walk.active) {
    puppyTick(); // still let the puppy recover energy while idle
    return;
  }

  const stepsThisTick = Math.floor(Math.random() * 4) + 2; // 2-5 steps/tick
  appState.walk.steps += stepsThisTick;
  appState.walk.distance += stepsThisTick * 0.75; // arbitrary meters-per-step

  puppyTick();

  // Shift the world's mood every so often during a walk, to make it feel alive
  if (appState.walk.steps % 8 < stepsThisTick) {
    cycleWorldMood();
  }

  if (isExhausted()) {
    stopWalk();
  }
}
