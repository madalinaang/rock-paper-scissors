import React from "react";

interface TokenProps {
  move: Move;
  chooseMove?: (move: Move) => void;
  visible?: boolean;
}

const Token: React.FC<TokenProps> = ({ move, chooseMove, visible = false }) => {
  const handleClick = (): void => {
    if (chooseMove) chooseMove(move);
  };
  return (
    <article
      className={
        "token " +
        move +
        " " +
        (!chooseMove && "selected") +
        " " +
        (visible && "visible")
      }
      onClick={handleClick}
    >
      <div className="white">
        <img src={`${process.env.PUBLIC_URL}/images/icon-${move}.svg`} />
      </div>
      <div className="color" />
    </article>
  );
};

export default Token;
