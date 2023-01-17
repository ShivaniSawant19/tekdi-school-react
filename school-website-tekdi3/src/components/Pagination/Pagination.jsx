import React, { useState, useEffect } from "react";
import "./pagination.css";

export const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;

    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div id="pagination_btn">
      <button class="btn" onClick={() => onButtonClick("prev")}>
        Previous-Page
      </button>
      <button class="btn" onClick={() => onButtonClick("next")}>
        Next-Page
      </button>
    </div>
  );
};
