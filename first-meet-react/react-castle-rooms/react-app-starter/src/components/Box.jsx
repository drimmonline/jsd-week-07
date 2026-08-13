import React from "react";

const Box = (props) => {
  return (
    <div className={`${props.bg} p-6 text-white text-center font-bold`}>
      <h2 className="text-2xl mb-2">{props.name}</h2>
    </div>
  );
};

export default Box;
