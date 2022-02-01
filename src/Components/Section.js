import React from "react";

const Section = (props) => {
  return (
    <div className="section">
      <h2>{props.category}</h2>
      <div className="list">
        {props.images.map((image, index) => {
          return <img src={image} index={index} alt={index} />;
        })}
      </div>
    </div>
  );
};

export default Section;
