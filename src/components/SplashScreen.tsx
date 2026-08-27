import { useState } from "react";
import { Button } from "./Button";
import { Credits } from "./Credits";
import { Fishes } from "./Fishes";
import { SunBeams } from "./SunBeams";

interface SplashScreenProps {
  onStartGame: () => void;
}

const SplashScreen = ({ onStartGame }: SplashScreenProps) => {
  const [showCredits, setShowCredits] = useState(false);
  return (
    <div className="flex flex-col items-center h-full overflow-hidden">
      <div className="fixed inset-0 z-0">
        <SunBeams />
        <Fishes />
      </div>
      <h1 className="text-4xl font-bold mb-8 sr-only">Kommune Flip</h1>
      <img
        src="/logo.svg"
        alt="Kommuneflip logo"
        className="z-20 w-[600px] mx-auto animate-wiggle p-8 pb-0 pt-56"
      />
      <Button onClick={onStartGame}>Start flippingen!</Button>
      <div className="absolute bottom-5 right-5 z-20 flex w-28 flex-col items-center gap-2 rounded-xl bg-white/60 p-2">
        {showCredits && <Credits />}
        <img src="ksd.svg" alt="KS Digital logo" />
      </div>
    </div>
  );
};

export default SplashScreen;
