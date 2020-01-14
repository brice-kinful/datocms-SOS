import React from "react";
import Slider from "react-slick";

const CommunityCarousel = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true
  };

  const { title, content } = props;

  return (
    <section className={`community-carousel pad-med`}>
      <div className={`wrapper lg`}>
        <h3 className={`al-fresco-font text-xl lowercase center-text`}>
          {title}
        </h3>
        <Slider {...settings} className="center-text">
          {content.map(item => {
            return (
              <div key={item.id}>
                <p className={`quote big-caslon-italic-font text-lg`}>
                  {item.quote}
                </p>
                <p className="said-by">{item.quoteSaidBy}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default CommunityCarousel;
