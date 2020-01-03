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
              {this.props.appData &&
                this.props.appData.socialLinks &&
                this.props.appData.socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} title={link.title}>
                      <i className={link.icon}></i>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          {this.props.appData && this.props.appData.copyright ? (
            <div className="copyright">
              <p>{this.props.appData.copyright}</p>
            </div>
          ) : null}
        </Container>
      </footer>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
