import React from "react";
import parse from "html-react-parser";

const QuestionAnswer = (props) => {
  const item = props.content;
  const { order } = props;
  //   console.log(item);
  return (
    <section className={`q_a no-bottom-pad${order !== 0 ? " no-top-pad" : ""}`}>
      <div className="wrapper md">
        <p className="question big-caslon-font text-xl center-text">
          {item.question}
        </p>
        <div className="answer inner">{parse(item.answer)}</div>
      </div>
      <div className="border"></div>
    </section>
  );
};

export default QuestionAnswer;
