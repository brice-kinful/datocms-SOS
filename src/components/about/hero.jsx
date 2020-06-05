import React from "react";
import BackgroundImage from "gatsby-background-image";

// import "../../styles/blocks/hero.sass";

const Hero = (props) => {
  const hero = props.content;

  return (
    <section className={`hero flex column no-top-pad`}>
      {hero.backgroundImage && (
        <BackgroundImage
          fluid={hero.backgroundImage.fluid}
          backgroundColor={`#FAE8EF`}
        ></BackgroundImage>
      )}
      {hero.headline && (
        <div className={`headline wrapper`}>
          <div className="two-thirds">
            <h2 className={`big-caslon-font text-3xl`}>{hero.headline}</h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
