import React from "react";

interface HeaderProps {
  score: number;
}

const Header: React.FC<HeaderProps> = ({ score }) => {
  return (
    <header className="header">
      <img src={process.env.PUBLIC_URL + "/images/logo-bonus.svg"} />
      <section className="score">
        <p>Score</p>
        <h1>{score}</h1>
      </section>
    </header>
  );
};

export default Header;
