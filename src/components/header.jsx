import React, { Component } from "react";
// import { Link } from "gatsby";
// import Link from "gatsby-plugin-transition-link";/
import AniLink from "./transitions/AniLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      scrollPos: 0,
      scrolledPastHeader: false,
    };
  }

  trackHeaderScroll = (e) => {
    this.setState((state) => ({
      isMenuOpen: false,
      scrollPos: window.pageYOffset,
    }));
    console.log(this.state.scrollPos);
    if (this.state.scrollPos > 150) {
      this.setState((state) => ({
        scrolledPastHeader: true,
      }));
    } else {
      this.setState((state) => ({
        scrolledPastHeader: false,
      }));
    }
  };

  componentDidMount() {
    // document.body.classList.remove("menu-open");
    window.addEventListener("scroll", this.trackHeaderScroll);
    this.setState((state) => ({
      isMenuOpen: false,
    }));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.trackHeaderScroll);
  }

  menuToggle = (e) => {
    e.preventDefault();
    // console.log('clicked')
    this.setState((state) => ({
      isMenuOpen: !state.isMenuOpen,
    }));
    // if (this.state.isMenuOpen) {
    //   document.body.classList.remove("menu-open");
    // } else {
    //   document.body.classList.add("menu-open");
    // }
  };

  render() {
    // console.log(this.props);

    const { leftMenu, rightMenu } = this.props;

    return (
      <>
        <div id="header">
          <div
            id="menu_drawer"
            className={`${this.state.isMenuOpen ? "open" : ""}${
              this.state.scrolledPastHeader ? " scrolled" : ""
            }`}
          >
            <ul className={`flex wrap align-center justify-center`}>
              {leftMenu.map((item) => {
                return item.customUrl ? (
                  <li key={item.id}>
                    <a
                      href={item.menuItemCustomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        item.isThisAButton
                          ? `btn black`
                          : `nobel-font text-md uppercase`
                      }
                    >
                      {item.menuItemText}
                    </a>
                  </li>
                ) : (
                  <li key={item.id}>
                    <AniLink
                      preventScrollJump
                      fade
                      to={`/${item.menuItemPageLink.slug}`}
                      activeClassName="active"
                      className={
                        item.isThisAButton
                          ? `btn black`
                          : `nobel-font text-md uppercase`
                      }
                    >
                      {item.menuItemText}
                    </AniLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`wrapper flex space-between full`}>
            <div className="left two-fifths">
              <button
                id="menu_toggle"
                className={`${this.state.isMenuOpen ? "open" : ""}${
                  this.state.scrolledPastHeader ? " scrolled" : ""
                }`}
                onClick={this.menuToggle}
              >
                <span></span>
              </button>
              <ul className={`flex wrap show_1060`}>
                {leftMenu.map((item) => {
                  return item.customUrl ? (
                    <li key={item.id}>
                      <a
                        href={item.menuItemCustomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          item.isThisAButton
                            ? `btn black`
                            : `nobel-font text-md uppercase`
                        }
                      >
                        {item.menuItemText}
                      </a>
                    </li>
                  ) : (
                    <li key={item.id}>
                      <AniLink
                        preventScrollJump
                        fade
                        to={`/${item.menuItemPageLink.slug}`}
                        className={
                          item.isThisAButton
                            ? `btn black`
                            : `nobel-font text-md uppercase`
                        }
                        activeClassName="active"
                      >
                        {item.menuItemText}
                      </AniLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="one-fifth">
              <div className="logo-container">
                <AniLink preventScrollJump fade to="/">
                  <img src="/images/SOS_Logo.svg" alt="" />
                </AniLink>
              </div>
            </div>
            <div className="right two-fifths">
              <ul className={`flex justify-end wrap show_1060`}>
                {rightMenu.map((item) => {
                  return item.customUrl ? (
                    <li key={item.id} style={{ marginRight: 0 }}>
                      <a
                        href={item.menuItemCustomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          item.isThisAButton
                            ? `btn black`
                            : `nobel-font text-md uppercase`
                        }
                      >
                        {item.menuItemText}
                      </a>
                    </li>
                  ) : (
                    <li key={item.id}>
                      <AniLink
                        preventScrollJump
                        fade
                        to={`/${item.menuItemPageLink.slug}`}
                        className={
                          item.isThisAButton
                            ? `btn black`
                            : `nobel-font text-md uppercase`
                        }
                        activeClassName="active"
                      >
                        {item.menuItemText}
                      </AniLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
