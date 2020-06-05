import React from "react";
import BackgroundImage from "gatsby-background-image";

// import "../../styles/blocks/hero.sass";

const Hero = (props) => {
  const { content } = props;

  return (
    <section className={`hero flex column`}>
      {content.map((block) => {
        return (
          <React.Fragment key={block.id}>
            {block.__typename === "DatoCmsHeadline" && (
              <div className={`headline wrapper`}>
                <div className="two-thirds">
                  <h2 className={`big-caslon-font text-3xl`}>{block.text}</h2>
                </div>
              </div>
            )}
            {block.__typename === "DatoCmsBackgroundImage" && (
              <BackgroundImage
                fluid={block.image.fluid}
                backgroundColor={`#FAE8EF`}
              ></BackgroundImage>
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default Hero;
