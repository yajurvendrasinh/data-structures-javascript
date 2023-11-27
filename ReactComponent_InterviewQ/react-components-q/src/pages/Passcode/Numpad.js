import { useEffect, useState } from "react";

const numpadNumbers = [...Array(10).keys()];
const passCode = [1, 2, 3, 4];

function Numpad() {
  const [enteredPasscode, setEnteredPasscode] = useState([]);
  const [correctPasscode, setCorrectPasscode] = useState(passCode);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (enteredPasscode.length === correctPasscode.length) {
      if (enteredPasscode.join("") === correctPasscode.join("")) {
        setResult("Correct");
      } else {
        setResult("Wrong Password");
        setEnteredPasscode([]);
      }
    }
  }, [enteredPasscode]);

  function pressedVal(e) {
    setEnteredPasscode((prev) => [...prev, e.target.value]);
  }

  let numPad = numpadNumbers.map((number) => {
    return (
      <button onClick={(e) => pressedVal(e)} value={number} key={number}>
        {number}
      </button>
    );
  });
  return (
    <div>
      {numPad}
      {result}
    </div>
  );
}

export default Numpad;
