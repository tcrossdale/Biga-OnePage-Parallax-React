import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <footer className="main-footer">
        <Container>
          <div className="social-links">
            <ul>
              <li>
                <a href="mailto:bargiovy@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/biganyc/" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/biganyc/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.yelp.com/biz/biga-pizza-italiana-contemporanea-new-york-2"
                  target="_blank"
                >
                  <i className="fa fa-yelp"></i>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
