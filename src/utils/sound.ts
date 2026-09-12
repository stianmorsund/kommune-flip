const sources = {
  cardFlip: "/sounds/card-flip.mp3",
  match: "/sounds/match.mp3",
  gameDone: "/sounds/game-done.mp3",
  newRecord: "/sounds/new-record.mp3",
} as const;

type SoundName = keyof typeof sources;

const cache = new Map<SoundName, HTMLAudioElement>();

export const playSound = (name: SoundName, volume = 1) => {
  let audio = cache.get(name);
  if (!audio) {
    audio = new Audio(sources[name]);
    audio.preload = "auto";
    cache.set(name, audio);
  }

  // Clone so rapid repeats can overlap instead of restarting each other.
  const instance = audio.cloneNode() as HTMLAudioElement;
  instance.volume = volume;
  instance.play().catch(() => undefined);
};
