import React from "react";
// import { Link } from "gatsby";
import AniLink from "../transitions/AniLink";
import parse from "html-react-parser";

const PatientAssistance = (props) => {
  const { content } = props;
  return (
    <section className="patient-assistance">
      <div className="wrapper sm content center-text">
        <h4 className="nobel-font text- uppercase">{content[0]?.headline}</h4>
        <h3 className="big-caslon-font text-2xl">{content[0]?.subheadline}</h3>
        {parse(content[0]?.copy)}
        {content[0].ctaButtonUrl &&
        content[0].ctaButtonUrl.startsWith("/") &&
        content[0].ctaButtonUrl != null ? (
          <AniLink
            fade
            preventScrollJump
            to={content[0].ctaButtonUrl}
            className="btn med-pink"
          >
            {content[0].ctaButtonText}
          </AniLink>
        ) : (
          <a href={content[0].ctaButtonUrl} className="btn med-pink">
            {content[0].ctaButtonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default PatientAssistance;
