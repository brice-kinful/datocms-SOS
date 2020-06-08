import React from "react";
import { Link } from "gatsby";
import parse from "html-react-parser";

const Application = (props) => {
  const application = props.content;
  return (
    <section className="application">
      <div className="wrapper sm content center-text">
        {application.title && (
          <h2 className="nobel-font uppercase">{application.title}</h2>
        )}
        {application.headline && (
          <h3 className="headline big-caslon-font text-xl">
            {application.headline}
          </h3>
        )}
        {application.subheadline && (
          <p className="subheadline">{application.subheadline}</p>
        )}
        {application.bodyCopy && (
          <div className="body-copy inner">{parse(application.bodyCopy)}</div>
        )}
        {application.externalButtonUrlToggle &&
        application.externalButtonUrl ? (
          <div>
            <a
              href={application.externalButtonUrl}
              key={application.id}
              target="_blank"
              rel="noopener noreferrer"
              className="btn chunky med-pink"
            >
              {application.buttonText}
            </a>
          </div>
        ) : (
          <div>
            <Link
              key={application.id}
              to={`/${
                application.buttonUrl.slug == "home"
                  ? ""
                  : application.buttonUrl.slug
              }`}
              className="btn chunky med-pink"
            >
              {application.buttonText}
            </Link>
          </div>
        )}
        {application.asterikText && (
          <p
            style={{
              maxWidth: "450px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {application.asterikText}
          </p>
        )}
      </div>
    </section>
  );
};

export default Application;
