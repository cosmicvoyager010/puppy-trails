// voice.js — Reserved for Version 3 (companion voice / dynamic dialogue).
// Kept separate from gameplay so the backing engine (browser TTS, OpenAI, ElevenLabs...)
// can be swapped later without touching puppy/walk/world logic.

export function speak(text, emotion = "neutral") {
  console.log(`[voice:${emotion}]`, text);
}
