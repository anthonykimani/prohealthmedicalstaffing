import roleBg from "../assets/svg/rolebackground.svg";
import { roleSource } from "../helpers/roleSource";
import Role from "./Role";

const RoleSection = () => {
  return (
    <article className="bg-[url('./assets/svg/rolebackground.svg')] text-white h-auto flex flex-col justify-around items-center font-kumbh">
      <h1 className="text-4xl font-bold m-5 text-center">
        We Offer Opportunities in areas like
      </h1>
      <div className="flex flex-col md:flex-row justify-around">{roleSource.map((element) => {
        return (<Role image={element.image} text={element.text} />)
      })}</div>
    </article>
  );
};

export default RoleSection;
