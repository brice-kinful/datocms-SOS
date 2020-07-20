import React from "react";
import AniLink from "./transitions/AniLink";

const PromoBar = (props) => {
  // console.log(props);
  const style = {
    paddingBottom: "10px",
    paddingTop: "10px",
    backgroundColor: props.promoBarBackgroundColor.hex,
    color:
      props.promoBarBackgroundColor.hex === "#231f20" ? "#ffffff" : "#231F20",
  };
  return (
    <div className="promo-bar" style={style}>
      <div className="wrapper center-text caps-font text-sm">
        {props.promoBarPageLink ||
        (props.promoBarCustomUrl && props.promoBarExternalUrl !== "") ? (
          props.promoBarCustomUrl && props.promoBarExternalUrl !== "" ? (
            <a
              href={props.promoBarExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              {props.promoText}
            </a>
          ) : (
            <AniLink
              preventScrollJump
              fade
              to={`/${props.promoBarPageLink.slug}`}
              style={{ textDecoration: "none" }}>
              >{props.promoText}
            </AniLink>
          )
        ) : (
          <p>{props.promoText}</p>
        )}
      </div>
    </div>
  );
};

export default PromoBar;
