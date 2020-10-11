import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a Javascript library.",
  },
  {
    title: "How do we show content with React?s",
    content: "To show content...",
  },
  {
    title: "Why is React useful to engineers?",
    content: "Engineers like React...",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
