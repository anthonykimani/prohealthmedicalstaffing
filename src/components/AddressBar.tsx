const AddressBar = () => {
  return (
    <address className="flex flex-row justify-between md:justify-around items-center font-kumbh not-italic text-secondarygreen mx-2 text-sm">
      <span className="flex justify-around">
        <span className="flex items-center mr-2">
          <i className="fa-sharp fa-solid fa-location-dot fa-lg"></i>
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
        <i className="m-1 bx bxl-facebook-circle bx-sm"></i>
        <i className="m-1 bx bxl-twitter bx-sm"></i>
        <i className="m-1 bx bxl-linkedin-square bx-sm"></i>
      </span>
    </address>
  );
};

export default AddressBar;
