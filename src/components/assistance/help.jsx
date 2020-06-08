import React from "react";
import parse from "html-react-parser";

const Help = (props) => {
  const help = props.content;
  return (
    <section className="help pink-bg pad-med">
      <div className="wrapper">
        {help.title && (
          <h2 className="al-fresco-font text-xl lowercase title center-text">
            {help.title}
          </h2>
        )}
        <div className="flex">
          <div className="one-half left">
            <div className="inner">{parse(help.leftCol)}</div>
          </div>
          <div className="one-half right">
            <div className="inner">{parse(help.rightCol)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
