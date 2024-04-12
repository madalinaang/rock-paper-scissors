import React, { useState, useEffect } from "react";
import MovesContainer from "./MovesContainer";
import Header from "./Header";
import Rules from "./Rules";
import Battle from "./Battle";

const Game: React.FC = () => {
  const [showRules, setShowRules] = useState<boolean>(false);
  const [playerMove, setPlayeMove] = useState<Move | null>(null);
  const [houseMove, setHouseMove] = useState<Move | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [score, setScore] = useState<number>(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore ? parseInt(savedScore, 10) : 0;
  });

  const openModal = (): void => {
    setShowRules(true);
  };

  const closeModal = (): void => {
    setShowRules(false);
  };

  const chooseMove = (move: Move): void => {
    setPlayeMove(move);
  };

  const randomHouseMove = (): void => {
    setHouseMove(
      ["rock", "paper", "scissors", "lizard", "spock"][
        Math.floor(Math.random() * 5)
      ] as Move
    );
  };

  const playGame = (): void => {
    switch (playerMove) {
      case "paper":
        switch (houseMove) {
          case "paper":
            setResult(0);
            break;
          case "rock":
            setResult(1);
            break;
          case "scissors":
            setResult(-1);
            break;
          case "lizard":
            setResult(-1);
            break;
          case "spock":
            setResult(1);
            break;
        }
        break;
      case "rock":
        switch (houseMove) {
          case "paper":
            setResult(-1);
            break;
          case "rock":
            setResult(0);
            break;
          case "scissors":
            setResult(1);
            break;
          case "lizard":
            setResult(1);
            break;
          case "spock":
            setResult(-1);
            break;
        }
        break;
      case "scissors":
        switch (houseMove) {
          case "paper":
            setResult(1);
            break;
          case "rock":
            setResult(-1);
            break;
          case "scissors":
            setResult(0);
            break;
          case "lizard":
            setResult(1);
            break;
          case "spock":
            setResult(-1);
            break;
        }
        break;
      case "lizard":
        switch (houseMove) {
          case "paper":
            setResult(1);
            break;
          case "rock":
            setResult(-1);
            break;
          case "scissors":
            setResult(-1);
            break;
          case "lizard":
            setResult(0);
            break;
          case "spock":
            setResult(1);
            break;
        }
        break;
      case "spock":
        switch (houseMove) {
          case "paper":
            setResult(-1);
            break;
          case "rock":
            setResult(1);
            break;
          case "scissors":
            setResult(1);
            break;
          case "lizard":
            setResult(-1);
            break;
          case "spock":
            setResult(0);
            break;
        }
        break;
    }
  };

  const reset = (): void => {
    setPlayeMove(null);
    setHouseMove(null);
    setResult(null);
  };

  useEffect(() => {
    randomHouseMove();
  }, [playerMove]);

  useEffect(() => {
    if (playerMove && houseMove) playGame();
  }, [houseMove]);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setScore((prevScore) => prevScore + result);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [result]);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <main className="game">
      <Header score={score} />
      {playerMove && houseMove && result ? (
        <Battle
          playerMove={playerMove}
          houseMove={houseMove}
          result={result}
          reset={reset}
        />
      ) : (
        <MovesContainer chooseMove={chooseMove} />
      )}
      <button className="rules" onClick={openModal}>
        Rules
      </button>
      <div className={"overlay " + (showRules && "visible")} />
      <Rules closeModal={closeModal} active={showRules ? "visible" : ""} />
    </main>
  );
};

export default Game;
