const sources = {
  cardFlip: "/sounds/card-flip.mp3",
  match: "/sounds/match.mp3",
  gameDone: "/sounds/game-done.mp3",
  newRecord: "/sounds/new-record.mp3",
} as const;

type SoundName = keyof typeof sources;

// iOS Safari counts every HTMLAudioElement against a small per-page budget and
// refuses to play elements that were never started from a user gesture. A
// fixed pool keeps allocations bounded and lets us unlock every element on the
// first interaction.
const POOL_SIZE = 3;

const pools = new Map<SoundName, HTMLAudioElement[]>();
const cursors = new Map<SoundName, number>();

const getPool = (name: SoundName) => {
  let pool = pools.get(name);
  if (!pool) {
    pool = Array.from({ length: POOL_SIZE }, () => {
      const audio = new Audio(sources[name]);
      audio.preload = "auto";
      return audio;
    });
    pools.set(name, pool);
  }
  return pool;
};

const rewind = (audio: HTMLAudioElement) => {
  try {
    audio.currentTime = 0;
  } catch {
    // Not seekable until metadata has loaded.
  }
};

let unlocked = false;
const unlockEvents = ["pointerdown", "touchend", "keydown"] as const;

const unlock = () => {
  if (unlocked) return;
  unlocked = true;
  unlockEvents.forEach((event) => window.removeEventListener(event, unlock));

  (Object.keys(sources) as SoundName[]).forEach((name) => {
    getPool(name).forEach((audio) => {
      audio.muted = true;
      audio
        .play()
        .then(() => {
          audio.pause();
          rewind(audio);
          audio.muted = false;
        })
        .catch(() => {
          audio.muted = false;
        });
    });
  });
};

unlockEvents.forEach((event) =>
  window.addEventListener(event, unlock, { passive: true })
);

export const playSound = (name: SoundName, volume = 1) => {
  const pool = getPool(name);
  const cursor = cursors.get(name) ?? 0;
  cursors.set(name, (cursor + 1) % POOL_SIZE);

  // Rotate through the pool so rapid repeats can overlap instead of
  // restarting each other.
  const audio = pool[cursor];
  audio.pause();
  rewind(audio);
  audio.volume = volume;
  audio.play().catch(() => undefined);
};
