const AddressBar = () => {
  return (
    <address className="flex flex-row justify-around items-center font-kumbh not-italic text-secondarygreen">
      <span className="flex justify-around">
        <span className="flex items-center mr-2">
          <i className="fa-sharp fa-solid fa-location-dot fa-xl"></i>
          <h5 className="hidden md:block ml-1">11604 sw 35th ave 97219 Portland</h5>
        </span>
        <span className="flex items-center mr-2">
          <i className="bx bxs-phone bx-sm"></i>
          <h5 className="hidden md:block ml-1">+1 (503) 705-0431</h5>
        </span>
        <span className="flex items-center mr-2">
          <i className="bx bxs-envelope bx-sm"></i>
          <h5 className="hidden md:block ml-1">Prohealthmedicalstaffing@gmail.com</h5>
        </span>
      </span>
      <span>
        <i className="bx bxl-facebook-circle bx-sm"></i>
        <i className="bx bxl-twitter bx-sm"></i>
        <i className="bx bxl-linkedin-square bx-sm"></i>
      </span>
    </address>
  );
};

export default AddressBar;
