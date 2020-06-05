import React from "react";
import parse from "html-react-parser";

// import "../../styles/blocks/hero.sass";

const Goal = (props) => {
  const goal = props.content;
  return (
    <section className="goal no-top-pad">
      <div className="wrapper content sm-2">
        <p className="text-xl big-caslon-font">{goal.headline}</p>
        {parse(goal.bodyCopy)}
      </div>
    </section>
  );
};

export default Goal;
