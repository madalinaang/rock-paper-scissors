import React from "react";

interface TokenProps {
  move: Move;
}

const Token: React.FC<TokenProps> = ({ move }) => {
  return (
    <article className={"token " + move}>
      <div className="white">
        <img src={`${process.env.PUBLIC_URL}/images/icon-${move}.svg`} />
      </div>
      <div className="color" />
    </article>
  );
};

export default Token;
