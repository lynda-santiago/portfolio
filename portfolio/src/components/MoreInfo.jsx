import React from "react";
import { moreInfoData } from "../data.js";

function MoreInfo() {
  return (
    <div className="moreInfo-container">
      <div className="grid">
        {moreInfoData.map((item) => {
          return (
            <div>
              <img src={item.image} alt="vector icon" />
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoreInfo;
