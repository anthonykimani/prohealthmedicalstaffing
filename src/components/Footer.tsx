const Footer = () => {
  return (
    <footer className="text-center" >
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start font-kumbh text-primarygreen">
        <ul className="text-sm w-[95%] md:w-[30%] text-center my-5">
          <h3 className="text-secondarygreen font-bold text-xl mt-3">Prohealth Medical Staffing</h3>
          <a className="flex items-center">
            <i className="bx bxs-envelope"></i>
            prohealthmedicalstaffing@gmail.com
          </a>
          <a href="" className="flex items-center">
            <i className="fa-sharp fa-solid fa-location-dot fa-lg"></i>16916 se
            powell Blvd suite 8 97236,oregon portland
          </a>
          <a href="" className="flex items-center">
            <i className="bx bxs-phone"></i>+1 (503) 705-0431
          </a>
          <span>
            <i className="m-1 bx bxl-facebook-circle bx-sm"></i>
            <i className="m-1 bx bxl-twitter bx-sm"></i>
            <i className="m-1 bx bxl-linkedin-square bx-sm"></i>
          </span>
        </ul>
        <ul className="text-sm w-[95%] md:w-[30%] text-center my-5">
          <h3 className="text-secondarygreen font-bold text-xl mt-3">What we do</h3>
          <h4>
            Prohealth is a medical staffing agency located in Portland Oregon,
            We provide Oregon and Washington with the best healthcare
            professionals and exceptional care to all our clients.
          </h4>
        </ul>
        <ul className="text-sm w-[95%] md:w-[30%] text-center my-5">
          <h3 className="text-secondarygreen font-bold text-xl mt-3">Support</h3>
          <li>Help & Support</li>
          <li>FAQs</li>
          <li>Direct Contact</li>
        </ul>
      </div>
      <hr />
      <footer className="text-secondarygreen">
        &copy;2023 Prohealth Medical Staffing Agency. All rights reserved.
      </footer>
    </footer>
  );
};

export default Footer;
