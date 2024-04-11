import React, { useState, useEffect } from "react";
import MovesContainer from "./MovesContainer";
import Header from "./Header";
import Rules from "./Rules";

const Game: React.FC = () => {
  const [showRules, setShowRules] = useState<boolean>(false);

  const openModal = (): void => {
    setShowRules(true);
  };

  const closeModal = (): void => {
    setShowRules(false);
  };

  return (
    <main className="game">
      <Header score={23} />
      <MovesContainer />
      <button className="rules" onClick={openModal}>
        Rules
      </button>
      {showRules && (
        <>
          <div className="overlay" />
          <Rules closeModal={closeModal} />
        </>
      )}
    </main>
  );
};

export default Game;
