import React from "react";

// import "../../styles/blocks/hero.sass";

const Goal = (props) => {
  const goal = props.content;
  return (
    <section className="goal no-top-pad">
      <div className="wrapper md">
        <p className="text-xl big-caslon-font">{goal.headline}</p>
      </div>
    </section>
  );
};

export default Goal;
