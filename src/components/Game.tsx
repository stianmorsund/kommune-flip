import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { Kommune, randomKommuner } from "../assets/kommuner";
import { shuffleArray } from "../utils/utils";
import Card from "./Card";
import { NamePrompt } from "./NamePrompt";
import { Result, TopList } from "./TopList";
import Timer from "./Timer";
import {
  readTop10,
  writeTop10,
} from "../utils/storage";

type GameProps = {
  numberOfCards: number;
  cardFlipDuration: number;
};

const Game = ({ numberOfCards, cardFlipDuration }: GameProps) => {
  const pickedKommuner = randomKommuner(numberOfCards / 2);
  const [cards, setCards] = useState<Kommune[]>([
    ...pickedKommuner,
    ...pickedKommuner,
  ]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [annoncePairs, setannoncePairs] = useState("");
  const [playerName, setPlayername] = useState("");
  const [top10, setTop10] = useState<Result[]>(readTop10());

  useEffect(() => {
    shuffleArray(cards);
    setCards(cards);
  }, [cards]);

  useEffect(() => {
    if (!isGameFinished) {
      const elapsedFixed = +((Date.now() - startTime) / 1000).toFixed(2);
      const interval = setInterval(() => setElapsedTime(elapsedFixed), 100);
      return () => clearInterval(interval);
    }
  }, [startTime, elapsedTime, setElapsedTime, isGameFinished]);

  const isCardsEqual = (firstCard: Kommune, secondCard: Kommune) => {
    return firstCard.image === secondCard.image;
  };

  const handleMatch = (firstIndex: number, secondIndex: number) => {
    setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
    setannoncePairs(`Du fant et et par! ` + cards[firstIndex].navn);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setFlippedIndices([]);
  };

  const handleNonMatch = () => {
    setannoncePairs("Det var ikke et par.");
    setTimeout(() => setFlippedIndices([]), cardFlipDuration * 2);
  };

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index)) return;

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      if (isCardsEqual(cards[firstIndex], cards[secondIndex])) {
        handleMatch(firstIndex, secondIndex);
      } else {
        handleNonMatch();
      }
    }
  };

  const shouldAddToTop10 = (time: number) => {
    return top10.length < 10 || time < top10[top10.length - 1].time;
  };

  const handleSubmitName = (name: string) => {
    setPlayername(name);
    if (shouldAddToTop10(elapsedTime)) {
      const newTop10 = [...top10, { name, time: elapsedTime }].sort(
        (a, b) => a.time - b.time
      ).slice(0, 10);
      setTop10(newTop10);
      writeTop10(newTop10);
    }
  };

  useEffect(() => {
    if (
      matchedIndices.length > 0 &&
      cards.length > 0 &&
      matchedIndices.length === cards.length
    ) {
      setIsGameFinished(true);
    }
  }, [matchedIndices, cards]);

  return (
    <>
      <div className="fixed top-0 right-0 z-10">
        <Timer time={elapsedTime} />
      </div>
      <div aria-live="polite" aria-atomic={true} className="sr-only">
        {annoncePairs}
      </div>
      <ul className="grid gap-4 grid-cols-4 w-full h-full p-4 pt-8">
        {cards.map((card, index) => (
          <li key={index}>
            <Card
              index={index}
              kommune={card}
              isFlipped={
                flippedIndices.includes(index) || matchedIndices.includes(index)
              }
              cardFlipDuration={cardFlipDuration}
              handleClick={handleCardClick}
            />
          </li>
        ))}
      </ul>
      {isGameFinished && !playerName && (
        <NamePrompt
          time={elapsedTime}
          onTypedName={(name) => handleSubmitName(name)}
        />
      )}
      {playerName && (
        <TopList currentResult={{ name: playerName, time: elapsedTime }} top10={top10} />
      )}
    </>
  );
};

export default Game;
