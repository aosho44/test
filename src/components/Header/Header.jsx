import PropTypes from "prop-types";

function Header({ name }) {
  return <h1>Hello {name}</h1>;
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
