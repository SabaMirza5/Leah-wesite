import React from "react";
import signin from "../assets/signin.png";

function Client_portal() {
  return (
    <>
      <div className="flex  lg:flex-row md:flex-row flex-col p-[5%]">
        <div className="basis-1/2 shadow-2xl">
          <div className="flex items-center w-full">
            <div className="w-full bg-white rounded-lg lg:p-10 md:p-10 p-5">
              <span className="block w-full text-xl uppercase font-bold mb-4">
                Sign In
              </span>
              <form className="mb-4" action="/" method="post">
                <div className="mb-4 md:w-full border-2 rounded flex justify-center items-center ">
                  <span className="ms-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                    >
                      <path
                        d="M21.5001 2.15001C21.5001 0.967503 20.5326 0 19.3501 0H2.15001C0.967503 0 0 0.967503 0 2.15001V15.05C0 16.2325 0.967503 17.2001 2.15001 17.2001H19.3501C20.5326 17.2001 21.5001 16.2325 21.5001 15.05V2.15001ZM19.3501 2.15001L10.75 7.52502L2.15001 2.15001H19.3501ZM19.3501 15.05H2.15001V4.30001L10.75 9.67503L19.3501 4.30001V15.05Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                    </svg>
                  </span>
                  <input
                    className="w-full  p-2 outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                  />
                </div>

                <div className="mb-4 md:w-full border-2 rounded flex justify-center items-center ">
                  <span className="ms-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                    >
                      <path
                        d="M15.3178 12.3637L17.0451 14.091L20.4996 10.6365L18.7724 8.90918"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.30303"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.3452 12.1546L20.4998 2"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.30303"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.68182 21.0004C9.54366 21.0004 11.8636 18.6804 11.8636 15.8185C11.8636 12.9567 9.54366 10.6367 6.68182 10.6367C3.81998 10.6367 1.5 12.9567 1.5 15.8185C1.5 18.6804 3.81998 21.0004 6.68182 21.0004Z"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.30303"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <input
                    className="w-full  p-2 outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <button className="bg-[#1E559B] w-full hover:bg-blue-800 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                  Log In
                </button>
              </form>
              <a
                className="text-blue-700 text-center justify-center items-center flex text-sm"
                href="/login"
              >
                Forgot password?
              </a>
              <p className="text-sm  md:pt-0 pt-5 lg:pt-9"> Don’t have an account?<a
                className="text-blue-700 text-center text-sm font-bold"
                href="/login"
              >
              Sign Up
              </a></p>
              
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={signin} alt=""  className="w-full"/>
        </div>
      </div>
    </>
  );
}

export default Client_portal;
