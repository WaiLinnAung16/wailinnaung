import React from "react";
import "./loading.css";
const Loading = () => {
  const words = ["W", "A", "I", "L", "I", "N", "N", "A", "U", "N", "G"];
  return (
    <div className=" flex justify-center items-center h-screen bg-white">
      <div className="h-20  overflow-hidden flex items-baseline page">
        {words.map((w, i) => {
          return (
            <h1 key={i} className="text font-Montserrat">
              {w}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
