import React from "react";
import parse from "html-react-parser";
import { Link } from "gatsby";

const HowYouCanHelp = props => {
  const { content } = props;

  console.log(content);

  return (
    <section className={`help gray-bg pad-med`}>
      <div className={`flex wrapper justify-center`}>
        {content.map(block => {
          return (
            <h3
              className={`al-fresco-font text-xl lowercase title`}
              key={block.id}
            >
              {block.__typename === "DatoCmsHowYouCanHelpTitle" && block.title}
            </h3>
          );
        })}
      </div>
      <div className={`flex wrapper`}>
        <div className={`left one-half`}>
          <div className="inner">
            {content.map(block => {
              return (
                <React.Fragment key={block.id}>
                  {block.__typename === "DatoCmsLeftColumn" && (
                    <>
                      <h4 className={`nobel-font uppercase`}>
                        {block.headline}
                      </h4>
                      <p className={`big-caslon-font text-lg`}>
                        {block.subheadline}
                      </p>
                      {parse(block.textBlock)}
                      {block.customUrl ? (
                        <a
                          href={block.ctaButtonUrl}
                          className={`btn pink`}
                          target="_blank"
                        >
                          {block.ctaButtonText}
                        </a>
                      ) : (
                        <Link
                          to={`/${block.ctaButtonUrlPageLink.slug}`}
                          className={`btn pink`}
                        >
                          {block.ctaButtonText}
                        </Link>
                      )}
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className={`right one-half`}>
          {content.map(block => {
            return (
              <React.Fragment key={block.id}>
                {block.__typename === "DatoCmsRightColumnItem" && (
                  <div className="inner">
                    <h4 className={`nobel-font uppercase`}>{block.headline}</h4>
                    <p className={`big-caslon-font text-lg`}>
                      {block.subheadline}
                    </p>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;
