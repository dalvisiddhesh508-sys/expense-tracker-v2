import { useEffect, useState } from "react";
import "./title.css";

function Title({ label = "", color }) {
  console.log('start')
  const [letterList, setLetterList] = useState(label.split(""));

  useEffect(()=>{
    console.log('letterList updated', letterList)
  },[letterList])
  useEffect(()=>{
    console.log('label',label);
    setLetterList(label.split(""));
  },[label])
  useEffect(()=>{
    console.log('color',color)
  },[color])
   useEffect(()=>{
    console.log('init');
   
  },[])
  return (
    <div className="title">
      <h1 style={{ color: color }}>
        {letterList.map((letter,index) => (
          <span key={letter+index}>{letter}</span>
        ))}
      </h1>
    </div>
  );
}

export default Title;
