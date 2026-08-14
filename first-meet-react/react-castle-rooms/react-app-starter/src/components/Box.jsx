import React from "react";

function Box(props) {
  return props.btn ? (
    <div className={`${props.bg} p-6 text-white text-center font-bold`}>
      {props.children}
    </div>
  ) : (
    <div className={`${props.bg} p-6 text-white text-center font-bold`}>
      <p>Message From Secret Room : {props.reply}</p>
      <h2 className="text-2xl mb-2">{props.name}</h2>
      {props.children}
    </div>
  );
}

export default Box;
