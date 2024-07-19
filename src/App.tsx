import { useState } from "react";
import Game from "./components/Game";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <main className="h-screen mx-auto bg-[url('/bg.png')] bg-no-repeat bg-cover">
      {!gameStarted ? (
        <SplashScreen onStartGame={handleStartGame} />
      ) : (
        <Game
          numberOfCards={16}
          cardFlipDuration={400}
          secondsToCompletion={10}
        />
      )}
    </main>
  );
};

export default App;
