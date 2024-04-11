import React from "react";
import Token from "./Token";

const MovesContainer: React.FC = () => {
  return (
    <section className="moves-container">
      <img
        className="pentagon"
        src={process.env.PUBLIC_URL + "/images/bg-pentagon.svg"}
      />
      <Token move={"rock"} />
      <Token move={"paper"} />
      <Token move={"scissors"} />
      <Token move={"lizard"} />
      <Token move={"spock"} />
    </section>
  );
};

export default MovesContainer;
