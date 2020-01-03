import React, { Component } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

const headerNavigation = theRef => {
  let theBody = document.getElementsByTagName("body")[0];

  window.addEventListener("scroll", function() {
    let offsetTop = window.pageYOffset;
    if (offsetTop > 100) {
      theBody.classList.add("is-sticky");
    } else {
      theBody.classList.remove("is-sticky");
    }
  });
};

class DefaultHeader extends Component {
  constructor(props) {
    super([props]);
    this.props = props;
    this.headerRef = React.createRef();
    this.navbarToggler = React.createRef();
    this.navbarCollapse = React.createRef();
    this.mobileNavbarCollapse = React.createRef();
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }
  toggleNavigation = evt => {
    let theButton = evt.currentTarget,
      theCollapser = theButton.nextSibling;
    if (theCollapser.classList.contains("collapse")) {
      theCollapser.classList.add("collapsing");
      theCollapser.classList.remove("collapse");
      setTimeout(() => {
        theCollapser.classList.remove("collapsing");
      }, 300);
    } else {
      theCollapser.classList.remove("collapsing");
      theCollapser.classList.add("collapse");
    }
  };
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    headerNavigation(this.headerRef);

    return (
      <React.Fragment>
        <header className="main-header" ref={this.headerRef}>
          <div className="main-header-inner">
            <Container>
              <Navbar className="navbar-expand-md">
                <div
                  className="collapse navbar-collapse mx-auto justify-content-md-center"
                  ref={this.navbarCollapse}
                >
                  <div className="navbar-left">
                    {this.props.appData && this.props.appData.headerNavLeft ? (
                      <ul className="nav navbar-nav">
                        {this.props.appData.headerNavLeft.map((link, index) => (
                          <li key={index}>
                            <a href={link.url}>{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <NavbarBrand className="logo-desktop">
                    <img src="https://via.placeholder.com/150x138.png" alt="" />
                  </NavbarBrand>

                  <div className="navbar-right">
                    {this.props.appData && this.props.appData.headerNavRight ? (
                      <ul className="nav navbar-nav">
                        {this.props.appData.headerNavRight.map(
                          (link, index) => (
                            <li key={index}>
                              <a href={link.url}>{link.label}</a>
                            </li>
                          )
                        )}
                      </ul>
                    ) : null}
                  </div>
                </div>
                <NavbarBrand className="logo-mobile">
                  <img src="https://via.placeholder.com/150x138.png" alt="" />
                </NavbarBrand>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#mobile-onepage-navbar"
                  aria-controls="mobile-onepage-navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={e => this.toggleNavigation(e)}
                >
                  {" "}
                  <i className="fa fa-bars"></i>{" "}
                </button>
                <div
                  id="mobile-onepage-navbar"
                  className="navbar-collapse collapse"
                  ref={this.mobileNavbarCollapse}
                >
                  <ul className="nav navbar-nav mobile-navbar">
                    {this.props.appData &&
                      this.props.appData.mobileMenuLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.url} title={link.label}>
                            {link.label}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </Navbar>
            </Container>
            <div className="social-links-desktop">
              {this.props.appData.socialLinks ? (
                <ul className="social-links">
                  {this.props.appData &&
                    this.props.appData.socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} title={link.title}>
                          <i className={link.icon}></i>
                        </a>
                      </li>
                    ))}
                </ul>
              ) : null}
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
