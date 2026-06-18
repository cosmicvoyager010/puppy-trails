body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  transition: background 0.6s ease, color 0.6s ease;
}

.card {
  text-align: center;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  max-width: 360px;
  width: 100%;
  box-sizing: border-box;
}

button {
  margin-top: 12px;
  padding: 12px 18px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  background: #ff7a3d;
  color: white;
  transition: transform 0.1s ease, opacity 0.2s ease;
}

button:active {
  transform: scale(0.97);
  opacity: 0.9;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

#puppy {
  font-size: 80px;
  animation: breathe 2.5s infinite ease-in-out;
}

#puppy.walking {
  animation: bounce 0.4s infinite ease-in-out;
}

#puppy.tired {
  animation: breathe 4s infinite ease-in-out;
  filter: saturate(0.7);
}

#stats {
  margin-top: 14px;
  font-size: 13px;
  opacity: 0.75;
}

@keyframes breathe {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

@keyframes bounce {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.1); }
  100% { transform: translateY(0) scale(1); }
}
