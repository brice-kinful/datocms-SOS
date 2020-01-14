import React from "react";
import Img from "gatsby-image";
import parse from "html-react-parser";

const Intro = props => {
  const { content } = props;

  // console.log(content);
  return (
    <section className="intro no-top-pad">
      <div className={`wrapper lg flex`}>
        {content.map(block => {
          return (
            <React.Fragment key={block.id}>
              {block.__typename === "DatoCmsImage" && (
                <div className={`two-fifths image`}>
                  <div className="inner">
                    <Img fluid={block.image.fluid} />
                  </div>
                </div>
              )}
              {block.__typename === "DatoCmsIntroContent" && (
                <div className={`three-fifths text`}>
                  <div className="inner">
                    <h1 className={`big-caslon-font text-lg line-after`}>
                      <span className="white-bg">{block.headline}</span>
                    </h1>
                    {parse(block.copy)}
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Intro;
