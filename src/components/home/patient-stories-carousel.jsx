import React, { Component } from "react";
import Slider from "react-slick";
import parse from "html-react-parser";

class PatientStoriesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      navImages: null,
      navContent: null
    };
  }

  componentDidMount() {
    this.setState({
      navImages: this.navImages,
      navContent: this.navContent
    });
    this.props.content.map(item => {
      this.setState(prevState => ({
        images: [...prevState.images, item.image]
      }));
    });
  }

  render() {
    const imageSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    const contentSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true
    };

    const { title, content } = this.props;
    const { images } = this.state;

    return (
      <section className="patient-stories">
        <div className="flex">
          <div className="one-half">
            <Slider
              {...imageSettings}
              asNavFor={this.state.navContent}
              ref={slider => (this.navImages = slider)}
              className="images"
            >
              {images.map(item => {
                return (
                  <React.Fragment key={item.url}>
                    <div
                      key={item.url}
                      className="bg"
                      style={{ backgroundImage: `url(${item.url})` }}
                    ></div>
                  </React.Fragment>
                );
              })}
            </Slider>
          </div>
          <div className="one-half gray-bg flex align-center">
            <div className="wrapper">
              <h3 className="al-fresco-font text-xl line-after">
                <span className="gray-bg lowercase">{title}</span>
              </h3>
              <Slider
                {...contentSettings}
                asNavFor={this.state.navImages}
                ref={slider => (this.navContent = slider)}
              >
                {content.map(item => {
                  return (
                    <div key={item.id}>
                      <div className="inner lg-gap">
                        <p className="big-caslon-font text-lg">
                          {item.headline}
                        </p>
                        {parse(item.copy)}
                      </div>
                      {/* <Img fluid={item.image.fluid} /> */}
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PatientStoriesCarousel;
