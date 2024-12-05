const Card = (
  cardImgSrc,
  cardAlt,
  cardBg,
  cardTitleText,
  cardDesc,
  cardTitleStyle,
  cardDescStyle
) => {
  return (
    <div className={`w-[300px] h-[400px] ${cardBg}  p-5`}>
      <img
        src={cardImgSrc}
        alt={cardAlt}
        className="w-full h-[200px] border border-black rounded-md"
      />
      <div className="w-full p-3 h-auto">
        <h2 className={`${cardTitleStyle} font-semibold text-start capitalize`}>
          {cardTitleText}
        </h2>
        <p className={`${cardDescStyle}`}>{cardDesc}</p>
      </div>
    </div>
  );
};
export default Card;
