import React, { useEffect, useState } from "react";
import "./style.css";

export default function GuessColor() {
  const [letter, setLetter] = useState("");
  const [answer, setAnswer] = useState("");
  const [loadCharc, setLoadCharac] = useState(false);
  const [buttonList, setButtonList] = useState([letter]);

  useEffect(() => {
    setLetter(generateRandomCharac);
    setButtonList([letter, generateRandomCharac, generateRandomCharac]);
  }, [loadCharc]);

  console.log("buttonList", buttonList);

  function generateRandomCharac() {
    return String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
  }

  function checkAnswer(e) {
    let buttonText = e.target.innerHTML.toUpperCase();

    if (buttonText === letter) {
      setAnswer("CORRECT");
      setLoadCharac(!loadCharc);
    } else {
      setAnswer("WRONG ANSWER");
    }
  }

  const buttonOptions = buttonList.map((charc, idx) => {
    return (
      <button key={idx} onClick={(e) => checkAnswer(e)}>
        {charc}
      </button>
    );
  });

  return (
    <div className="game-container">
      <div className="color-block">
        <h3>{letter}</h3>
      </div>
      <div className="button-row">{buttonOptions}</div>
      <p>{answer}</p>
    </div>
  );
}
