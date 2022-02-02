import React from "react";

const Section = ({ category, images }) => {
  return (
    <div className="section">
      <h2>{category}</h2>
      <div className="list">
        {images.map((image, index) => {
          return <img src={image} index={index} alt={index} />;
        })}
      </div>
    </div>
  );
};

export default Section;
