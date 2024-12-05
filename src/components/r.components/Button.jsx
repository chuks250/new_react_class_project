import PropTypes from "prop-types";

const Button = ({ btnText, btnStyle, btnFunc }) => {
  return (
    <div
      onClick={btnFunc}
      className={`${btnStyle}`}
    >
      {btnText}
    </div>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnStyle: PropTypes.string,
  btnFunc: PropTypes.string.func,
};

Button.defaultProps = {
  btnStyle: "",
  btnFunc: () => {},
};

export default Button;
