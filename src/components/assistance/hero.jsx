import React from "react";

const Hero = (props) => {
  const hero = props.content;

  return (
    <section className={`hero`}>
      {hero.headline && (
        <div className="headline wrapper flex justify-center">
          <div className="two-thirds">
            <h1 className={`big-caslon-font text-3xl`}>{hero.headline}</h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
