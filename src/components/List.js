import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import Items from "./Items";
import SingleListItem from "./ListItem";

const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(false);
  // Internchanged use state function and variable

  useEffect(() => {
    setSelectedIndex(false); // Null => boolean so false
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  if (items) {
    return (
      <ul style={{ textAlign: "left" }}>
        {items.map((item, index) => (
          <SingleListItem
            key={index}
            onClickHandler={(e) => handleClick(e)}
            // onClickHandler={() => handleClick(index)}
            text={item.text}
            index={index}
            isSelected={selectedIndex === index}
          />
        ))}
      </ul>
    );
  }
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  )
};

WrappedListComponent.defaultProps = {
  items: Items
};

const List = memo(WrappedListComponent);

export default List;
