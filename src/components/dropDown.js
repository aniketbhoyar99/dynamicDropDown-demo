import React, { useState, useEffect } from "react";
import { tileTypeLabels } from "./titleTypes";
import imageData from "./imageData";
console.log("imageData", imageData);
const DropDown = () => {
  const [selectedVal, setSelectedVal] = useState();
  const [finalData, setFinalData] = useState([]);
  const [codeData, setCodeData] = useState([]);
  console.log("selectedVal", selectedVal);

  useEffect(() => {
    setFinalData(
      tileTypeLabels.map((newData) =>
        selectedVal == newData.code
          ? newData.values.map((getData) => getData)
          : ""
      )
    );
  }, [selectedVal]);

  const clickHandler = (code) => {
    console.log("code", code);
    //   setCodeData(code);
    // imageData.filter((val)=>console.log(">>????",val))
    imageData.filter((o) =>
      console.log(Object.keys(o).filter((val) => val == selectedVal ? o : ""))
    );
  };
  return (
    <div>
      <select onChange={(e) => setSelectedVal(e.target.value)}>
        <option value="select">----select----</option>;
        {tileTypeLabels.map((type) => {
          return <option value={type.code}>{type.name}</option>;
        })}
      </select>
      {finalData.map(
        (data) =>
          data &&
          data.map((val) => (
            <button onClick={() => clickHandler(val.code)}>{val.name}</button>
          ))
      )}
    </div>
  );
};

export default DropDown;
