import { Link } from "react-router-dom";

const Education = () => {
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
              <div className="w-8 h-8 bg-indigo-700 rounded flex items-center justify-center">
                <p className="text-base font-medium leading-none text-white">
                  02
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
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-base font-medium leading-none text-gray-800">
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
            Education
          </h1>
          <h2
            role="heading"
            aria-label="enter Personal data"
            className="text-xl font-semibold leading-7 text-gray-800 mt-10"
          >
            Education Data
          </h2>
          <p className="text-sm font-light leading-none text-gray-600 mt-0.5">
            Your education details
          </p>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                High School
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter first name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter High School here"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Address
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Address here"
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
          <div>
            <div className="flex flex-col mt-5">
              <h3>Did you graduate?</h3>
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="choice"
                  className="mr-2"
                  value="yes"
                />
                <label className="text-lg font-medium">Yes</label>
                <input
                  type="radio"
                  id="no"
                  name="choice"
                  className="ml-6 mr-2"
                  value="no"
                />
                <label className="text-lg font-medium">No</label>
              </div>
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Diploma
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="Enter date of birth"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Diploma here"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                College
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="Enter place of birth"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter College here"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col  md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Address
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter address here"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter address here"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Address Line 2
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter address here"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter address here"
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
          <div>
            <div className="flex flex-col mt-5">
              <h3>Did you graduate?</h3>
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="choice"
                  className="mr-2"
                  value="yes"
                />
                <label className="text-lg font-medium">Yes</label>
                <input
                  type="radio"
                  id="no"
                  name="choice"
                  className="ml-6 mr-2"
                  value="no"
                />
                <label className="text-lg font-medium">No</label>
              </div>
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Degree
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="Enter date of birth"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter Diploma here"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Other
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="Enter place of birth"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter College here"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col  md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Address
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter address here"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter address here"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Address Line 2
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter address here"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter address here"
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
          <div>
            <div className="flex flex-col mt-5">
              <h3>Did you graduate?</h3>
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="choice"
                  className="mr-2"
                  value="yes"
                />
                <label className="text-lg font-medium">Yes</label>
                <input
                  type="radio"
                  id="no"
                  name="choice"
                  className="ml-6 mr-2"
                  value="no"
                />
                <label className="text-lg font-medium">No</label>
              </div>
            </div>
          </div>

          <div className="mt-12 md:flex items-center"></div>
          <div className="flex">
            <Link to="/register">
              <button
                role="button"
                aria-label="Next step"
                className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <span className="text-sm font-medium text-center text-gray-800 capitalize">
                  Back to Home
                </span>
              </button>
            </Link>
            <Link to="/references">
              <button
                role="button"
                aria-label="Next step"
                className="flex items-center justify-center py-4 px-7 focus:outline-none bg-primarygreen border rounded border-gray-400 mt-7 md:mt-14 ml-3  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <span className="text-sm font-medium text-center text-white capitalize">
                  Next Step
                </span>

                <svg
                  className="mt-1 ml-3"
                  width={12}
                  height={8}
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                </svg>
              </button>
            </Link>
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

export default Education;
