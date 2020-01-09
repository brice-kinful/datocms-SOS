import React from "react";
import BackgroundImage from "gatsby-background-image";

import "../../styles/blocks/home/hero.sass";

const Hero = props => {
  const { content } = props;

  // console.log(content);

  return (
    <section className={`hero flex column`}>
      {content.map(block => {
        return (
          <React.Fragment key={block.id}>
            {block.__typename === "DatoCmsHeadline" && (
              <div className={`headline wrapper`}>
                <div className="two-thirds">
                  <h2 className={`hoefler-font text-3xl`}>{block.text}</h2>
                </div>
              </div>
            )}
            {block.__typename === "DatoCmsBackgroundImage" && (
              <BackgroundImage
                fluid={block.image.fluid}
                backgroundColor={`#040e18`}
              ></BackgroundImage>
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default Hero;
