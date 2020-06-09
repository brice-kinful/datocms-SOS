import React from "react";
import parse from "html-react-parser";
import Img from "gatsby-image";

const Suzy = (props) => {
  const suzy = props.content;
  return (
    <section className="suzy no-top-pad">
      <div className="flex">
        <div className="one-half image pink-bg flex align-center">
          <Img fluid={suzy.image.fluid} />
        </div>
        <div className="one-half text inner gray-bg">
          <div className="line-after">
            <h2 className="big-caslon-font text-lg">
              <span className="gray-bg">{suzy.title}</span>
            </h2>
          </div>
          <div className="text-base inner">{parse(suzy.bodyCopy)}</div>
        </div>
      </div>
    </section>
  );
};

export default Suzy;
