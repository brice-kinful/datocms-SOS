import React, { Component } from "react";
import { Link } from "gatsby";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  componentDidMount() {
    document.body.classList.remove("menu-open");
    this.setState(state => ({
      isMenuOpen: false
    }));
  }

  openMenu = e => {
    e.preventDefault();
    // console.log('clicked')
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
    if (this.state.isMenuOpen) {
      document.body.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
    }
  };

  closeMenu = e => {
    if (this.state.isMenuOpen) {
      document.body.classList.remove("menu-open");
    }
  };

  render() {
    // console.log(this.props);

    const { leftMenu, rightMenu } = this.props;

    return (
      <>
        <div id="header">
          <div className={`wrapper flex space-between full`}>
            <ul className={`left two-fifths flex wrap`}>
              {leftMenu.map(item => {
                return item.customUrl ? (
                  <li key={item.id}>
                    <a
                      href={item.menuItemCustomLink}
                      target="_blank"
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
                    <Link
                      to={`/${item.menuItemPageLink.slug}`}
                      className={
                        item.isThisAButton
                          ? `btn black`
                          : `nobel-font text-md uppercase`
                      }
                    >
                      {item.menuItemText}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="one-fifth">
              <div className="logo-container">
                <Link to="/">
                  <img src="/images/SOS_Logo.svg" alt="" />
                </Link>
              </div>
            </div>
            <ul className={`right two-fifths flex justify-end wrap`}>
              {rightMenu.map(item => {
                return item.customUrl ? (
                  <li key={item.id}>
                    <a
                      href={item.menuItemCustomLink}
                      target="_blank"
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
                    <Link
                      to={`/${item.menuItemPageLink}`}
                      className={
                        item.isThisAButton
                          ? `btn black`
                          : `nobel-font text-md uppercase`
                      }
                    >
                      {item.menuItemText}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
