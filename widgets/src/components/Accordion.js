import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState("");

  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };

  const listItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          onClick={() => onTitleClicked(index)}
          className={`title ${active}`}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{listItems}</div>;
};

export default Accordion;
