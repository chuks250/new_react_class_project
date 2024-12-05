import Button from "../components/r.components/Button";
import Card from "../components/r.components/Card";
import CardImg from "/IMG_2976.jpg";

const PropPage = () => {
  return (
    <div className="min-h-screen bg-slate-600 text-black">
      <div className="flex items-center justify-center gap-16 pt-10">
        <h1 className=" text-center font-bold text-3xl capitalize">
          your prop page
        </h1>

        <Button
          btnText="prop page button"
          btnStyle="bg-blue-500 capitalize text-white text-center"
        />
      </div>
      <div className="container px-16 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <Card
          cardImgSrc={CardImg}
          cardAlt={"First Card Image"}
          cardBg="bg-red-500 text-white"
          cardTitleText="My First Card"
          cardTitleStyle="text-3xl font-bold uppercase"
          cardDesc="      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum officiis iste ad eaque veniam exercitationem."
          cardDescStyle="mt-3 text-sm text-center text-gray-600"
        />
      </div>
    </div>
  );
};
export default PropPage;
