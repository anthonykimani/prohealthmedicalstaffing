import { Link } from "react-router-dom";

const Employment = () => {
  return (
    <>
      <div>
        <div className="w-full bg-white p-2 md:p-10">
          <div className="md:flex items-center border-b pb-6 border-gray-200">
            <div className="flex items-center md:mt-0 mt-4">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-base font-medium leading-none text-gray-800">
                  01
                </p>
              </div>
              <p className="text-base ml-3 font-medium leading-4 text-gray-800">
                Personal Information
              </p>
            </div>
            <div className="flex items-center md:mt-0 mt-4 md:ml-12">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-base font-medium leading-none text-gray-800">
                  03
                </p>
              </div>
              <p className="text-base ml-3 font-medium leading-4 text-gray-800">
                Education
              </p>
            </div>
            <div className="flex items-center md:mt-0 mt-4 md:ml-12">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-base font-medium leading-none text-gray-800">
                  03
                </p>
              </div>
              <p className="text-base ml-3 font-medium leading-4 text-gray-800">
                References
              </p>
            </div>
            <div className="flex items-center md:mt-0 mt-4 md:ml-12">
              <div className="w-8 h-8 bg-indigo-700 rounded flex items-center justify-center">
                <p className="text-base font-medium leading-none text-white">
                  04
                </p>
              </div>
              <p className="text-base ml-3 font-medium leading-4 text-gray-800">
                Previous Employment
              </p>
            </div>
          </div>
          <h1
            tabIndex={0}
            role="heading"
            aria-label="profile information"
            className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
          >
            References
          </h1>
          <p className="text-sm font-light leading-none text-gray-600 mt-0.5">
            Please list professional references
          </p>

          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Company
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter Company"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Company here"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Phone
              </label>
              <input
                type="number"
                tabIndex={0}
                aria-label="Enter Phone"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Phone here"
              />
            </div>
          </div>

          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col  md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Address
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Last Name here"
              />
            </div>
          </div>

          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Supervisor
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter Supervisor"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Supervisor here"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Job Title
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter Job Title"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Job Title here"
              />
            </div>
          </div>

          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Starting Salary
              </label>
              <input
                type="number"
                tabIndex={0}
                aria-label="Enter Salary"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Salary here"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Ending Salary
              </label>
              <input
                type="number"
                tabIndex={0}
                aria-label="Enter Phone"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Salary here"
              />
            </div>
          </div>

          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col  md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Responsibilities
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="Enter Responsibilities"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Responsibilities here"
              />
            </div>
          </div>

          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                From
              </label>
              <input
                type="date"
                tabIndex={0}
                aria-label="Enter date here"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12">
              <label className="my-3 text-sm leading-none text-gray-800">
                To
              </label>
              <input
                type="date"
                tabIndex={0}
                aria-label="Enter date here"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>

          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Reason for leaving
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter Reason for leaving"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Reason for leaving here"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Phone
              </label>
              <input
                type="number"
                tabIndex={0}
                aria-label="Enter Phone"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Phone here"
              />
            </div>
          </div>

          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col  md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Address
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Last Name here"
              />
            </div>
          </div>
          <div className="flex">
            <Link to="/references">
              <button
                role="button"
                aria-label="Next step"
                className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border mr-3 rounded border-gray-400 mt-7 md:mt-14 ml-3  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <span className="text-sm font-medium text-center text-black capitalize">
                  Back a Step
                </span>
              </button>
            </Link>
            <button
              role="button"
              aria-label="Next step"
              className="flex items-center justify-center py-4 px-7 focus:outline-none bg-primarygreen text-white border rounded border-gray-400 mt-7 md:mt-14  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            >
              <span className="text-sm font-medium text-center  capitalize">
                Complete Registration
              </span>
            </button>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ",
          }}
        />
      </div>
    </>
  );
};

export default Employment;
