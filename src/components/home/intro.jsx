import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import parse from "html-react-parser";
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Intro = (props) => {
  const { content } = props;
  const [scrollPos, setScrollPos] = useState(0);

  // useScrollPosition(({ prevPos, currPos }) => {
  //   setScrollPos(currPos.y / 4);
  // });

  const trackMovement = (e) => {
    setScrollPos(document.body.getBoundingClientRect().top);
  };

  useEffect(() => {
    window.addEventListener("scroll", trackMovement);
    return () => {
      window.removeEventListener("scroll", trackMovement);
    };
  });

  const imageMovement = {
    transform: `translateY(${scrollPos / 9}px)`,
  };

  return (
    <section className="intro no-top-pad">
      <div className={`wrapper lg flex`}>
        {content.map((block, index) => {
          return (
            <React.Fragment key={index}>
              {block.__typename === "DatoCmsImage" && (
                <div className={`two-fifths image`} style={imageMovement}>
                  <div className="inner show_860">
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
