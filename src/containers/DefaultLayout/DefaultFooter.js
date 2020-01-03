import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    const { children, ...attributes } = this.props;

    return (
      <footer className="main-footer">
        <Container>
          <div className="social-links">
            <ul>
              {this.props.appData &&
                this.props.appData.socialLinks &&
                this.props.appData.socialLinks.map((link, index) => (
                  <li>
                    <a href={link.url} title={link.title}>
                      <i className={link.icon}></i>
                    </a>
                  </li>
                ))}
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
