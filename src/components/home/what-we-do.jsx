import React from "react";
import parse from "html-react-parser";
import Img from "gatsby-image";

const WhatWeDo = props => {
  const { content } = props;

  // console.log(content);

  return (
    <section className={`what-we-do pink-bg`}>
      <div className={`wrapper lg flex align-center`}>
        {content.map(block => {
          return (
            <React.Fragment key={block.id}>
              {block.__typename === "DatoCmsWhatWeDoContent" && (
                <div className={`one-half text`}>
                  <div className="inner">
                    <h3 className={`al-fresco-font text-xl line-after`}>
                      <span className={`pink-bg lowercase`}>{block.title}</span>
                    </h3>
                    <p className={`big-caslon-font text-lg`}>
                      {block.headline}
                    </p>
                    {parse(block.copy)}
                  </div>
                </div>
              )}
              {block.__typename === "DatoCmsImageIconGroup" && (
                <div className={`one-half images`}>
                  <div className="inner flex grid three wrap">
                    {block.imagesIcons.map(item => {
                      return (
                        <div className="grid-item one-third">
                          <Img fluid={item.fluid} />
                        </div>
                      );
                    })}
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

export default WhatWeDo;
