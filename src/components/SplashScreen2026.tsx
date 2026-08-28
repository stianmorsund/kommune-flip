import { useState } from "react";
import { Bubbles } from "./Bubbles";
import { Button } from "./Button";
import { Credits } from "./Credits";
import { Fishes } from "./Fishes";
import { SunBeams } from "./SunBeams";

interface SplashScreen2026Props {
  onStartGame: () => void;
}

const SplashScreen2026 = ({ onStartGame }: SplashScreen2026Props) => {
  const [showCredits, setShowCredits] = useState(false);
  return (
    <div className="flex flex-col items-center h-full overflow-hidden">
      <div className="fixed inset-0 z-0">
        {/* Recolours the background blue while keeping its contrast, so it doesn't go muddy. */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-color opacity-45"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, #6fd8ff 0%, #17a6e8 45%, #0a4fb0 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(130,225,255,0.04) 0%, rgba(18,146,222,0.10) 35%, rgba(6,74,168,0.20) 70%, rgba(2,22,78,0.34) 100%)",
          }}
        />
        <SunBeams />
        <Fishes />
        <Bubbles />
      </div>
      <h1 className="text-4xl font-bold mb-8 sr-only">Kommune Flip 2026</h1>
      <img
        src="/logo2026.svg"
        alt="Kommuneflip logo"
        className="z-20 w-[600px] mx-auto animate-wiggle p-8 pb-0 pt-56"
      />
      <Button onClick={onStartGame}>Start flippingen!</Button>
      <div className="absolute bottom-5 right-5 z-20 flex w-28 flex-col items-center gap-2 rounded-xl bg-white/60 p-2">
        {showCredits && <Credits onClose={() => setShowCredits(false)} />}
        <button
          type="button"
          aria-label="Vis credits"
          className="block w-full"
          onClick={() => setShowCredits(true)}
        >
          <img src="ksd2026.svg" alt="KS Digital logo" className="w-full" />
        </button>
      </div>
    </div>
  );
};

export default SplashScreen2026;
