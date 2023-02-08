import background from "../assets/svg/subscribebackground.svg";

const Subscribe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around font-kumbh bg-[url('./assets/svg/subscribebackground.svg')] h-[400px] md:h-[300px]">
      <article className="flex flex-col justify-around items-center h-[150px]  w-[95%] md:w-[50%]">
        <h1 className="text-3xl text-white font-bold my-4">Stay Connected</h1>
        <h3 className="text-lg text-gray-300 text-center">
          Want to hear from us about important information by phone , text or
          email? You’ll get updates on new exciting opportunities from your
          area.
        </h3>
      </article>
      <form className="border-8 border-[#19504B] w-[95%] md:w-[40%] rounded-lg flex flex-col ">
        <input
          type="email"
          placeholder="Enter Your Email.."
          className="text-secondarygreen p-3 w-[100%] bg-primarygreen "
        />
        <button className="bg-secondarygreen text-white w-[100%] p-3 rounded-md">
          Subscribe to Our Newsletter
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
