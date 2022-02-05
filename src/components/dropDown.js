import React, { useState, useEffect } from "react";
import { tileTypeLabels } from "./titleTypes";
import imageData from "./imageData";

const DropDown = () => {
  const [selectedVal, setSelectedVal] = useState();
  const [finalData, setFinalData] = useState([]);
  const [codeData, setCodeData] = useState([]);

  useEffect(() => {
    setFinalData(
      tileTypeLabels.map((newData) =>
        selectedVal === newData.code
          ? newData.values.map((getData) => getData)
          : ""
      )
    );
  }, [selectedVal]);

  const clickHandler = (code) => {
   setCodeData(imageData.filter((img) => img[selectedVal] === code ? img.url:""));
  };

  
  
  return (
    <div style={{ textAlign: "center" }}>
      <div className="select-wrapper">
        <select onChange={(e) => setSelectedVal(e.target.value)}>
          <option value="select">----select----</option>;
          {tileTypeLabels.map((type) => {
            return <option value={type.code}>{type.name}</option>;
          })}
        </select>
      </div>
      {finalData.map(
        (data) =>
          data &&
          data.map((val) => (
            <button onClick={() => clickHandler(val.code)}>{val.name}</button>
          ))
      )}

      <div className="main-wrapper">
        {codeData.map((data) => {
          return (
            <div className="img-wrraper">
              <img src={`/assets/${data.url}`} alt={data.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
