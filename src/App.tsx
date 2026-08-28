import { useState } from "react";
import Game from "./components/Game";
import SplashScreen from "./components/SplashScreen";
import SplashScreen2026 from "./components/SplashScreen2026";
import { Analytics } from "@vercel/analytics/react";

const editions = {
  classic: { background: "bg-[url('/bg.png')]", Splash: SplashScreen },
  underwater: { background: "bg-[url('/bg2026.png')]", Splash: SplashScreen2026 },
};

const { background, Splash } = editions.underwater;

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <main
      className={`relative isolate h-screen mx-auto bg-no-repeat bg-cover ${background}`}
    >
      {!gameStarted ? (
        <Splash onStartGame={handleStartGame} />
      ) : (
        <Game numberOfCards={16} cardFlipDuration={400} />
      )}
      <Analytics />
    </main>
  );
};

export default App;
