import React, { Component } from "react";
import { Accordion } from "semantic-ui-react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import parse from "html-react-parser";
import Img from "gatsby-image";
import AniLink from "../transitions/AniLink";

import "../../styles/blocks/accordion.sass";

class AnnualEventsAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      images: [],
    };
  }

  componentDidMount() {
    this.props.content.map((item) => {
      this.setState((prevState) => ({
        images: [...prevState.images, item.image],
      }));
    });
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? 0 : index;
    this.setState({
      activeIndex: newIndex,
    });
  };

  render() {
    const { activeIndex, images } = this.state;
    const { title, content } = this.props;

    return (
      <section className="annual-events pad-bottom-med">
        <div className="wrapper xl flex">
          <div className="one-half image">
            {images.map((image, index) => {
              return (
                <ReactCSSTransitionGroup
                  //transitioned in css with .event-image-enter.event-image-enter-active
                  // and .event-image-leave.event-image-leave-active
                  transitionName="event-image"
                  transitionEnterTimeout={0}
                  transitionLeaveTimeout={400}
                  key={index}
                >
                  {activeIndex === index && <Img fluid={image.fluid} />}
                </ReactCSSTransitionGroup>
              );
            })}
          </div>
          <div className="one-half inner">
            <h3 className="al-fresco-font text-xl line-after">
              <span className="white-bg lowercase">{title}</span>
            </h3>
            <Accordion>
              {content.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Accordion.Title
                      active={activeIndex === index}
                      index={index}
                      name="dropdown"
                      onClick={this.handleClick}
                      className="big-caslon-font text-3xl"
                    >
                      {item.title}
                      <span
                        className={`plus-minus-toggle ${
                          activeIndex !== index ? "collapsed" : ""
                        }`}
                      ></span>
                    </Accordion.Title>
                    <Accordion.Content
                      active={activeIndex === index}
                      index={index}
                      className="inner"
                    >
                      <div className="text-base inner">{parse(item.copy)}</div>
                      {item.ctaButtonUrl && (
                        <div>
                          {item.ctaButtonUrl.startsWith("/") ? (
                            <AniLink
                              preventScrollJump
                              fade
                              to={item.ctaButtonUrl}
                              className="btn med-pink"
                            >
                              {item.menuItemText}
                            </AniLink>
                          ) : (
                            <a
                              href={item.ctaButtonUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn med-pink"
                            >
                              {item.ctaButtonText}
                            </a>
                          )}
                        </div>
                      )}
                    </Accordion.Content>
                  </React.Fragment>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
}

export default AnnualEventsAccordion;
