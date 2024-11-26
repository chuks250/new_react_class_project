const Button = ({ btnText, btnStyle, btnFunc }) => {
  return (
    <div onClick={btnFunc} className={`${btnStyle} bg-red-800 text-gray-50 border-none`}>
      {btnText}
    </div>
  );
};
export default Button;
