/**
 * build a component that take the height and width of whole window
 * on clicking at any point on that window, place a sphere
 * have a redo and undo button to undo the last action and redo the last undone action
 */

import React, { useState } from "react";
import "./style.css";

function PlaceSpheres() {
  const [spheres, setSpheres] = useState([]);
  const [popped, setPopped] = useState([]);

  function placeSphere(e) {
    const { clientX, clientY } = e; // objkect destruct
    setSpheres([...spheres, { x: clientX, y: clientY }]);
  }

  function handleUndo() {
    let newPop = spheres.pop();
    setSpheres([...spheres]);
    setPopped([...popped, newPop]);
  }

  function handleRedo() {
    let lastPop = popped.pop();
    setSpheres([...spheres, lastPop]);
    setPopped([...popped]);
  }
  return (
    <>
      <button
        disabled={spheres.length === 0}
        className="button-z"
        onClick={handleUndo}
      >
        Undo
      </button>
      <button
        className="button-z"
        disabled={popped.length === 0}
        onClick={handleRedo}
      >
        Redo
      </button>
      <div className="sphere-container" onClick={(e) => placeSphere(e)}>
        {spheres.map((sphere, idx) => {
          return (
            <span
              key={idx}
              className="sphere"
              style={{ left: `${sphere.x}px`, top: `${sphere.y}px` }}
            ></span>
          );
        })}
      </div>
    </>
  );
}
export default PlaceSpheres;
