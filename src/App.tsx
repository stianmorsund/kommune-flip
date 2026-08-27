import { useState } from "react";
import Game from "./components/Game";
import SplashScreen from "./components/SplashScreen";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <main className="relative isolate h-screen mx-auto bg-[url('/bg2026.png')] bg-no-repeat bg-cover">
      <div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-color opacity-45"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, #6fd8ff 0%, #17a6e8 45%, #0a4fb0 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(130,225,255,0.04) 0%, rgba(18,146,222,0.10) 35%, rgba(6,74,168,0.20) 70%, rgba(2,22,78,0.34) 100%)",
        }}
      />
      {!gameStarted ? (
        <SplashScreen onStartGame={handleStartGame} />
      ) : (
        <Game numberOfCards={16} cardFlipDuration={400} />
      )}
      <Analytics />
    </main>
  );
};

export default App;
