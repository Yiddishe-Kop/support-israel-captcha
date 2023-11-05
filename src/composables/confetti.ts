import Confetti from "canvas-confetti";

const themeColors = ["#d61f69", "#fff", "#0038B8"];

const randomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const confettiBurst = (
  el: HTMLElement | null = null,
  short = false,
  particleCount: number | null = null
) => {
  const origin = { x: 0.5, y: 0.6 };
  if (el) {
    const box = el.getBoundingClientRect();

    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;

    origin.x = centerX / window.innerWidth;
    origin.y = centerY / window.innerHeight;
  }

  particleCount = particleCount === null ? 20 : particleCount;

  if (short) {
    Confetti({
      particleCount,
      spread: 70,
      origin,
      colors: themeColors,
      gravity: 0.5,
      startVelocity: 25,
      // drift: 1,
      shapes: ["star", "circle", "square"],
      scalar: 0.95,
    });
  } else {
    Confetti({
      particleCount: 300,
      spread: 80,
      origin,
      colors: themeColors,
      gravity: 0.5,
    });
  }
};

export const fireworks = () => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    Confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    Confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

export const schoolPride = () => {
  const end = Date.now() + 15 * 1000;

  // go Buckeyes!
  const colors = ["#d61f69", "#ffffff"];

  (function frame() {
    Confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    Confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export const fireRandomConfetti = (el: HTMLElement | null = null) => {
  const confettiType = randomBetween(0, 100);
  if (confettiType <= 60) {
    confettiBurst(el);
  } else if (confettiType <= 80) {
    fireworks();
  } else {
    schoolPride();
  }
};
