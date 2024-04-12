import React from "react";
import Token from "./Token";

interface MovesContainerProps {
  chooseMove: (move: Move) => void;
}

const MovesContainer: React.FC<MovesContainerProps> = ({ chooseMove }) => {
  return (
    <section className="moves-container">
      <img
        className="pentagon"
        src={process.env.PUBLIC_URL + "/images/bg-pentagon.svg"}
      />
      <Token move={"rock"} chooseMove={chooseMove} />
      <Token move={"paper"} chooseMove={chooseMove} />
      <Token move={"scissors"} chooseMove={chooseMove} />
      <Token move={"lizard"} chooseMove={chooseMove} />
      <Token move={"spock"} chooseMove={chooseMove} />
    </section>
  );
};

export default MovesContainer;
