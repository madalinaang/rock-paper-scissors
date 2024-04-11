import React from "react";

interface RulesProps {
  closeModal: () => void;
}

const Rules: React.FC<RulesProps> = ({ closeModal }) => {
  return (
    <section className="rules-modal">
      <div className="top-bar">
        <p>Rules</p>
        <button onClick={closeModal}>
          <img src={process.env.PUBLIC_URL + "/images/icon-close.svg"} />
        </button>
      </div>
      <img
        className="rules-img"
        src={process.env.PUBLIC_URL + "/images/image-rules-bonus.svg"}
      />
      <button className="close-mobile" onClick={closeModal}>
        <img src={process.env.PUBLIC_URL + "/images/icon-close.svg"} />
      </button>
    </section>
  );
};

export default Rules;
