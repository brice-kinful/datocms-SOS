import React from "react";
// import { Link } from "gatsby";
import Link from "gatsby-plugin-transition-link";
import parse from "html-react-parser";

// import "../../styles/blocks/hero.sass";

const Cta = (props) => {
  const cta = props.content;
  return (
    <section className="cta no-top-pad">
      <div className="wrapper content md center-text">
        <p className="text-xl al-fresco-font">{cta.headline}</p>
        <div className="big-caslon-font text-lg inner">
          {parse(cta.bodyCopy)}
        </div>
        <div style={{ paddingTop: "35px" }}>
          {cta.externalButtonUrlToggle && cta.externalButtonUrl ? (
            <a
              href={cta.externalButtonUrl}
              key={cta.id}
              target="_blank"
              rel="noopener noreferrer"
              className="btn chunky med-pink"
            >
              {cta.buttonText}
            </a>
          ) : (
            <Link
              key={cta.id}
              to={`/${cta.buttonUrl.slug == "home" ? "" : cta.buttonUrl.slug}`}
              className="btn chunky med-pink"
            >
              {cta.buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cta;
