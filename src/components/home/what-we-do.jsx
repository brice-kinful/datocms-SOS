import React from "react";
import parse from "html-react-parser";

const WhatWeDo = (props) => {
  const { content } = props;

  // console.log(content);

  return (
    <section className={`what-we-do pink-bg`}>
      <div className={`wrapper lg flex align-center`}>
        {content.map((block, index) => {
          return (
            <React.Fragment key={index}>
              {block.__typename === "DatoCmsWhatWeDoContent" && (
                <div className={`one-half text`}>
                  <div className="inner">
                    <h3 className={`al-fresco-font text-xl line-after`}>
                      <span className={`pink-bg lowercase`}>{block.title}</span>
                    </h3>
                    <p className={`big-caslon-font text-lg`}>
                      {block.headline}
                    </p>
                    <div className="text-base">{parse(block.copy)}</div>
                  </div>
                </div>
              )}
              {block.__typename === "DatoCmsImageIconGroup" && (
                <div className={`one-half images`}>
                  <div className="inner flex grid three wrap">
                    {block.imagesIcons.map((item, index) => {
                      return (
                        <div
                          className="grid-item one-third"
                          key={index}
                          style={{ margin: 0 }}
                        >
                          <img
                            src={item.url}
                            alt=""
                            style={{
                              width: "120px",
                              height: "100px",
                              margin: "0 auto",
                            }}
                          />
                          <p
                            className="nobel-font uppercase text-xs center-text"
                            style={{ paddingTop: "20px" }}
                          >
                            {item?.title}
                          </p>
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
