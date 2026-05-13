import React from "react";
import { useState } from "react";
import { sculptureList } from "./data_1.jsx";
const AddingInteractivity = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleMoreClick = () => setShowMore(!showMore);

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>

      <h2>
        {" "}
        {sculpture.name} by {sculpture.artist}
      </h2>
      <h3>
        {" "}
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {" "}
        {showMore ? "Show" : "Hide"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
};

export default AddingInteractivity;
