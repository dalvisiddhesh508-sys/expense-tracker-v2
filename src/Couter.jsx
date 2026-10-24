import { useState } from "react";

function Counter() {
  let basicCount = 0;
  const [count, setCount] = useState(0);

  const [rows, setRows] = useState(Array(10).fill(""));
  const [cols, setCols] = useState(Array(10).fill(""));

  function reduceCount() {
    setCount(count - 1);
  }

  function increseCount() {
    console.log("start", basicCount);
    setCount(count + 1);
    basicCount = basicCount + 1;
    console.log("end", basicCount);
  }
  return (
    <div>
      <h1>
        Counter - {count} = {basicCount}
      </h1>
      {count > 4 && <h2>Dont Go over 5</h2>}
      <button onClick={reduceCount} disabled={count < 1}>
        Reduce
      </button>
      <button onClick={increseCount} disabled={count > 4}>
        Increse
      </button>

      {rows.map((row, rowIndex) => (
        <div key={"r" + rowIndex} className={`r${rowIndex}`}>
          {cols.map((col, colIndex) => (
            <div
              key={"r" + rowIndex + "c" + colIndex}
              className={`r${rowIndex}c${colIndex} box`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Counter;
