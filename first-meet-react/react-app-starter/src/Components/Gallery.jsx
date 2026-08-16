import React from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";

const Gallery = (props) => {
  return <Card title={props.title} img={props.img} descript={props.descript} />;
};

export default Gallery;
