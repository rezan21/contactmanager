import React from "react";
// impt automatically writes the:
import PropTypes from "prop-types";

const Header = props => {
  // deconstructuring (just like contacts.js)
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// default value for props
Header.defaultProps = {
  branding: "my App"
};

// validation (type checking) for props.
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
