import React, { memo } from "react";
import PropTypes from "prop-types";

// Single List Item

const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{
        backgroundColor: isSelected ? "green" : "red",
        margin: "10px",
        padding: "10px",
        color: "white ",
        marker: "black",
        fontSize: "1.25rem",
        cursor: "pointer",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        boxShadow: "5px 6px #7895B2"
      }}
      onClick={() => onClickHandler(index)}
      // onClick={onclickHandler}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
const SingleListItem = memo(WrappedSingleListItem);
export default SingleListItem;
