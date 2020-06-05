import React, { Component } from "react";
import Instagram from "./instagram";

const Footer = (props) => {
  // console.log(props);
  return (
    <section id="footer" className="pad-med no-top-pad">
      <Instagram social={props.allDatoCmsSocialProfile} />
      <div className={`wrapper flex space-between`}>
        <div className="one-half">
          <p>PO Box 1778</p>
          <p>Mt. Pleasant, SC 29465</p>
          <a href="tel:843-732-0660">843-732-0660</a>
          <p>
            Email:{" "}
            <a href="mailto:info@soslowcountry.org">info@soslowcountry.org</a>
          </p>
        </div>
        <div className="right one-half flex column text-right">
          <p className="al-fresco-font headline">follow</p>
          <a
            href="https://facebook.com"
            className="nobel-font uppercase"
            target="_blank"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            className="nobel-font uppercase"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
