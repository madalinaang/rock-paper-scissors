import React, { useState, useEffect } from "react";
import Token from "./Token";

interface BattleProps {
  playerMove: Move;
  houseMove: Move;
  result: Result;
  reset: () => void;
}

const Battle: React.FC<BattleProps> = ({
  playerMove,
  houseMove,
  result,
  reset,
}) => {
  const [playerMoveVisible, setPlayerMoveVisible] = useState<boolean>(false);
  const [houseMoveVisible, setHouseMoveVisible] = useState<boolean>(false);
  const [conclusionVisible, setConclusionVisible] = useState<boolean>(false);
  const [resultString, setResultString] = useState<string>("");
  const [wonPlayerVisible, setWonPlayerVisible] = useState<boolean>(false);
  const [wonHouseVisible, setWonHouseVisible] = useState<boolean>(false);

  useEffect(() => {
    if (result === 1) setResultString("win");
    else if (result === -1) setResultString("lose");
    else setResultString("tie");

    const timer = setTimeout(() => {
      setPlayerMoveVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (playerMoveVisible) {
      const timer = setTimeout(() => {
        setHouseMoveVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [playerMoveVisible]);

  useEffect(() => {
    if (houseMoveVisible) {
      const timer = setTimeout(() => {
        setConclusionVisible(true);
        if (result === 1) setWonPlayerVisible(true);
        else if (result === -1) setWonHouseVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [houseMoveVisible]);

  return (
    <section className="battle">
      <div className={"your-move " + (conclusionVisible && "visible")}>
        <p>You picked</p>
        <div className="player-selection">
          <div className={"win " + (wonPlayerVisible && "circle-visible")}>
            <div className="layer-1" />
            <div className="layer-2" />
            <div className="layer-3" />
          </div>
          <Token move={playerMove} visible={playerMoveVisible} />
        </div>
      </div>
      <div className={"conclusion " + (conclusionVisible && "visible")}>
        <p>You {resultString}</p>
        <button className={resultString} onClick={reset}>
          Play again
        </button>
      </div>
      <div className={"house-move " + (conclusionVisible && "visible")}>
        <p>The house picked</p>
        <div className="token-placeholder">
          <div className="placeholder" />
          <div className={"win " + (wonHouseVisible && "circle-visible")}>
            <div className="layer-1" />
            <div className="layer-2" />
            <div className="layer-3" />
          </div>
          <Token move={houseMove} visible={houseMoveVisible} />
        </div>
      </div>
    </section>
  );
};

export default Battle;
