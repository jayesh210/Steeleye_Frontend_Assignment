# Explain what the simple List component does.

####  List is memoized component from `WrappedListComponent` and take items as a props which is array of object in which `text` and `clickhandler` is set as required in proptypes.
#### Item which is passed as props in `WrappedListComponent` is iterated over and wrapped in `singleListItem`.
#### In return we are iterating over `item` and calling `singleListItem` to create li component and wrap it in `unorodered list`.
#### Talking about functionality list is created with default background as `Red` and after clicking the `li` it changed to `Green` using `clickhandler`.

# What problems / warnings are there with code? 

#### Could not find dependency: `'prop-types'` error  so added proptypes as dependency.
#### `propTypes.default.shapeOf` is not a function so replaced it with `shape` function
#### `propTypes.default.array` is not a function so replaced it with `arrayOf` function
#### Cannot read properties of `null` (reading 'map') to resolve this error I added condition if array is not null then iteration will be done.
####
####
####


# Please fix, optimize, and/or modify the component as much as you think is necessary.

####
####
####
####
####

## Updated code of List component
```js
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

```
## Updated code of seperated Listitem component 
```js
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

```
