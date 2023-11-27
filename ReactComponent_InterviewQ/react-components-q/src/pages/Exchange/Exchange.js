import React, { useState } from "react";
import "../Exchange/style.css";

export default function Exchange() {
  const [leftList, setLeftList] = useState([]);
  const [rightList, setRightList] = useState([]);
  const [counter, setCounter] = useState(0);

  function addItems() {
    setCounter((prev) => prev + 1);
    setLeftList((preList) => [...preList, counter]);
  }

  const leftItems = leftList.map((item, idx) => {
    return (
      <label className="inner-item" key={idx + `left`}>
        <input
          value={item}
          onChange={(e) => selectItem(e)}
          type="checkbox"
          key={idx}
        />
        {item}
      </label>
    );
  });

  const rightItems = rightList.map((item, idx) => {
    return (
      <label className="inner-item" key={idx + `right`}>
        <input value={item} onChange={(e) => selectItem(e)} type="checkbox" />
        {item}
      </label>
    );
  });

  function selectItem(e) {
    console.log(e.target.value);
  }

  function goRight() {
    let mostRecent = leftList.pop();
    setLeftList(leftList);
    setRightList((existing) => [...existing, mostRecent]);
  }

  function goLeft() {
    let mostRecent = rightList.pop();
    setRightList(rightList);
    setLeftList((existing) => [...existing, mostRecent]);
  }

  return (
    <div className="exchange-wrapper">
      <div className="box left">
        <h4>Left</h4>
        {leftItems}
        <button onClick={addItems}>Add</button>
      </div>
      <button onClick={goRight}>&gt;</button>
      <button onClick={goLeft}>&lt;</button>
      <div className="box right">
        <h4>Right</h4>
        {rightItems}
      </div>
    </div>
  );
}
